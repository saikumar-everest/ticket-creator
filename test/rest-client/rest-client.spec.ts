import {RestClient} from 'src/rest-client/rest-client';
import {TicketManagerContract} from 'src/ticket-manager/ticket-manager-contract';
import {TicketInput} from 'src/ticket/model/ticket-input.model';
import {BaseTicketInput} from 'src/ticket/model/base-ticket-input.model';
import * as axios from 'axios';

class TestTicketManager implements TicketManagerContract {
  managerAsString(): string {
    return '';
  }
  url(): string {
    return 'test-ticket-rest-endpoint';
  }
  authParams(): object {
    return {username: 'someone', password: 'secret'};
  }
  ticketLocation(): string {
    return 'data.testTicket';
  }
  ticketsLocation(): string {
    return 'data.testTickets';
  }
  apis() {
    throw new Error('Method not implemented.');
  }
  build(ticketInput: TicketInput): BaseTicketInput {
    throw new Error('Method not implemented.');
  }
}

describe('Rest client unit tests', () => {
  let mockAxiosDefault;
  let restClient;
  beforeEach(() => {
    mockAxiosDefault = jest.spyOn(axios, 'default');
    mockAxiosDefault.mockImplementation(config => {
      if (config.method === 'POST') {
        return Promise.resolve({
          data: {
            testTicket: {id: 3, status: 'New ticket created'},
          },
        });
      }
      return Promise.resolve({
        data: {
          testTickets: [
            {id: 1, status: 'Not working'},
            {id: 2, status: 'We lost'},
          ],
        },
      });
    });

    const testTicketManager = new TestTicketManager();
    restClient = new RestClient(testTicketManager);
  });

  it('should get all tickets', async () => {
    const params = {search: 'nothing'};

    const tickets = await restClient.doGet('/testTicket', params);

    expect(mockAxiosDefault).toHaveBeenCalledWith({
      baseURL: 'test-ticket-rest-endpoint/testTicket',
      method: 'GET',
      auth: {
        username: 'someone',
        password: 'secret',
      },
      params: {search: 'nothing'},
    });
    expect(tickets).toEqual([
      {id: 1, status: 'Not working'},
      {id: 2, status: 'We lost'},
    ]);
  });

  it('should create a ticket', async () => {
    const body = {subject: 'nothing'};

    const ticket = await restClient.doPost('/testTicket', body);

    expect(mockAxiosDefault).toHaveBeenCalledWith({
      baseURL: 'test-ticket-rest-endpoint/testTicket',
      method: 'POST',
      auth: {
        username: 'someone',
        password: 'secret',
      },
      data: {subject: 'nothing'},
    });
    expect(ticket).toEqual({id: 3, status: 'New ticket created'});
  });
});
