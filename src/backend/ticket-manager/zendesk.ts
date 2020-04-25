import {TicketManagerContract} from '../common/ticket-manager-contract';
import {Injectable} from '@nestjs/common';
import {BaseTicketManager} from './base-ticket-manager';
import {TicketInput} from '../ticket/model/ticket-input.model';
import {BaseTicketInput} from '../ticket/model/base-ticket-input.model';
import {ZendeskTicketInput} from '../ticket/model/zendesk/zendesk-ticket-input.model';

const APIS = {
  tickets: '/requests',
};

@Injectable()
export class Zendesk extends BaseTicketManager implements TicketManagerContract {
  build(ticketInput: TicketInput): BaseTicketInput {
    const {description, subject, status} = ticketInput;
    const zendeskTicket: ZendeskTicketInput = {
      request: {
        comment: {
          body: description,
        },
        subject,
        status,
      },
    };
    return zendeskTicket;
  }
  apis(): object {
    return {...this.commonApis, ...APIS};
  }
  ticketLocation(): string {
    return 'data.request';
  }
  ticketsLocation(): string {
    return 'data.requests';
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
