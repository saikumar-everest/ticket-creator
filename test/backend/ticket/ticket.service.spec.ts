import {TicketService} from 'src/backend/ticket/ticket.service';
import {TicketUtil} from 'src/backend/common/ticket-util';
import {RestClient} from 'src/backend/rest-client/rest-client';
import {TicketInput} from 'src/backend/ticket/model/ticket-input.model';

jest.mock('src/backend/rest-client/rest-client');

describe('Ticket service unit tests', () => {
  let ticketUtil;
  let ticketService;
  beforeEach(() => {
    // @ts-ignore
    RestClient.mockClear();

    ticketUtil = new TicketUtil(null, null);
    ticketUtil.getTicketManager = jest.fn().mockReturnValue({
      apis: () => {
        return {
          tickets: '/GET-Tickets-Endpoint',
          ticket: '/POST-Ticket-Endpoint',
        };
      },
      build: ticketInput => {
        return {
          transformed: ticketInput,
        };
      },
    });
    ticketService = new TicketService(ticketUtil);
  });

  it('should call doGet on RestClient to get all tickets', () => {
    ticketService.getAll('SomeSupportingTicketManager');

    expect(ticketUtil.getTicketManager).toHaveBeenCalledWith('SomeSupportingTicketManager');
    expect(RestClient).toHaveBeenCalled();
    // @ts-ignore
    const mockRestClientInstance = RestClient.mock.instances[0];
    expect(mockRestClientInstance.doGet).toHaveBeenCalledWith('/GET-Tickets-Endpoint');
  });

  it('should call doPost on RestClient to create a ticket', () => {
    ticketService.create({
      ticketManager: 'SomeSupportingTicketManager',
    } as TicketInput);

    expect(ticketUtil.getTicketManager).toHaveBeenCalledWith('SomeSupportingTicketManager');
    expect(RestClient).toHaveBeenCalled();
    // @ts-ignore
    const mockRestClientInstance = RestClient.mock.instances[0];
    expect(mockRestClientInstance.doPost).toHaveBeenCalledWith('/POST-Ticket-Endpoint', {
      transformed: {
        ticketManager: 'SomeSupportingTicketManager',
      },
    });
  });
});
