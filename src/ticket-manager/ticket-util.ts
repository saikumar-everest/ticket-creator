import {TicketManagerContract} from './ticket-manager-contract';
import {Zendesk} from './zendesk';
import {Freshdesk} from './freshdesk';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TicketUtil {
  constructor(private readonly freshdesk: Freshdesk, private readonly zendesk: Zendesk) {}

  getTicketManager(ticketType: string): TicketManagerContract {
    return ticketType === 'freshdesk' ? this.freshdesk : this.zendesk;
  }
}
