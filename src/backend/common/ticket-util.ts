import {TicketContract} from './ticket-contract';
import {Zendesk} from '../ticket-manager/zendesk';
import {Freshdesk} from '../ticket-manager/freshdesk';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TicketUtil {
  constructor(private readonly freshdesk: Freshdesk, private readonly zendesk: Zendesk) {}

  getTicketManager(ticketType: string): TicketContract {
    return ticketType === 'freshdesk' ? this.freshdesk : this.zendesk;
  }
}