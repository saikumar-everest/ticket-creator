import {TicketContract} from '../common/ticket-contract';
import {Injectable} from '@nestjs/common';
import {BaseTicketManager} from './base-ticket-manager';

const APIS = {};

@Injectable()
export class Freshdesk extends BaseTicketManager implements TicketContract {
  apis(): object {
    return {...this.commonApis, ...APIS};
  }
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
