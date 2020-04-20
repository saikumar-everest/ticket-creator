import {TicketContract} from '../common/ticket-contract';
import {Injectable} from '@nestjs/common';

@Injectable()
export class Zendesk implements TicketContract {
  ticketLocation(): string {
    return 'data.ticket';
  }
  ticketsLocation(): string {
    return 'data.tickets';
  }
  url(): string {
    return process.env.ZENDESK_SERVER_URL;
  }
  authParams(): object {
    return {
      username: `${process.env.ZENDESK_CLIENT_MAIL}/token`,
      password: process.env.ZENDESK_AUTH_TOKEN,
    };
  }
}
