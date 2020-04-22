import {Injectable} from '@nestjs/common';
import {RestClient} from '../rest-client/rest-client';
import {Ticket} from './model/ticket.model';
import {TicketUtil} from '../common/ticket-util';

@Injectable()
export class TicketService {
  constructor(private readonly ticketUtil: TicketUtil) {}

  getAll(ticketType: string): Promise<Ticket[]> {
    const ticketManager = this.ticketUtil.getTicketManager(ticketType);

    return new RestClient(ticketManager).doGet(ticketManager.apis().tickets);
  }
}
