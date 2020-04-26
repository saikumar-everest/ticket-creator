import {TicketManagerValidator} from 'src/backend/ticket/pipes/ticket-manager-validator.pipe';
import {TicketInput} from 'src/backend/ticket/model/ticket-input.model';

describe('Ticket manager validator pipe unit tests', () => {
  it('should return freshdesk in lowercase as its a valid supporting ticket manager', () => {
    expect(new TicketManagerValidator().transform('Freshdesk')).toEqual('freshdesk');
  });

  it('should return ticketInput as it has zendesk(a supporting ticket manager)', () => {
    const ticketInput: TicketInput = {
      ticketManager: 'Zendesk',
      subject: 'something',
      description: 'this is so long',
    };

    expect(new TicketManagerValidator().transform(ticketInput)).toEqual({
      ...ticketInput,
      ticketManager: 'zendesk',
    });
  });

  it('should throw validation error if given ticket manager is not one of supporting', () => {
    expect(() => {
      new TicketManagerValidator().transform('Newdesk');
    }).toThrowError(
      `Validation error: we currently support working with these ticket managers only! -> freshdesk,zendesk`,
    );
  });
});
