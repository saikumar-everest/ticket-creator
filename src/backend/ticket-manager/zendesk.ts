import {TicketContract} from '../common/ticket-contract';
import {Injectable} from '@nestjs/common';
import {BaseTicketManager} from './base-ticket-manager';

const APIS = {};

@Injectable()
export class Zendesk extends BaseTicketManager implements TicketContract {
  apis(): object {
    return {...this.commonApis, ...APIS};
  }
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
