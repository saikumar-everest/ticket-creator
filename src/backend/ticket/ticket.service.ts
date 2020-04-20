import {Injectable} from '@nestjs/common';
import {RestClient} from '../rest-client/rest-client';
import {Freshdesk} from '../ticket-manager/freshdesk';
import {Zendesk} from '../ticket-manager/zendesk';
import {Ticket} from './model/ticket.model';

@Injectable()
export class TicketService {
  constructor(private readonly freshdesk: Freshdesk, private readonly zendesk: Zendesk) {}

  getAll(ticketType: string): Promise<Ticket[]> {
    return this.restClient(ticketType).doGet('/tickets');
  }

  private restClient(ticketType: string): RestClient {
    return new RestClient(ticketType === 'freshdesk' ? this.freshdesk : this.zendesk);
  }
}
