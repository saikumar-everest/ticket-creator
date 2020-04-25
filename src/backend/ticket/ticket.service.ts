import {Injectable} from '@nestjs/common';
import {RestClient} from '../rest-client/rest-client';
import {Ticket} from './model/ticket.model';
import {TicketUtil} from '../common/ticket-util';
import {TicketInput} from './model/ticket-input.model';

@Injectable()
export class TicketService {
  constructor(private readonly ticketUtil: TicketUtil) {}

  getAll(ticketType: string): Promise<Ticket[]> {
    const ticketManager = this.ticketUtil.getTicketManager(ticketType);

    return new RestClient(ticketManager).doGet(ticketManager.apis().tickets);
  }

  create(ticketInput: TicketInput): Promise<Ticket> {
    this.ticketUtil.getTicketManager(ticketInput.ticketManager).build(ticketInput);
    return Promise.resolve({
      id: '34',
      subject: 'Something',
      description: 'Another thing',
      status: 'Todo',
    });
  }
}
