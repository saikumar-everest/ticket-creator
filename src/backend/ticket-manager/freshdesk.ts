import {TicketContract} from '../common/ticket-contract';
import {Injectable} from '@nestjs/common';

@Injectable()
export class Freshdesk implements TicketContract {
  ticketLocation(): string {
    return 'data';
  }
  ticketsLocation(): string {
    return 'data';
  }
  url(): string {
    return process.env.FRESHDESK_SERVER_URL;
  }
  authParams(): object {
    return {
      username: process.env.FRESHDESK_API_KEY,
      password: 'X',
    };
  }
}
