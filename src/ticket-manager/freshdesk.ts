import {TicketManagerContract} from './ticket-manager-contract';
import {Injectable} from '@nestjs/common';
import {BaseTicketManager} from './base-ticket-manager';
import {TicketInput} from '../ticket/model/ticket-input.model';
import {BaseTicketInput} from '../ticket/model/base-ticket-input.model';
import {FreshdeskTicketInput} from '../ticket/model/freshdesk/freshdesk-ticket-input.model';
import {FRESHDESK} from 'src/constants';

const APIS = {
  tickets: '/tickets?include=description',
  ticket: '/tickets',
};
const statusMap = {
  open: 2,
  pending: 3,
  resolved: 4,
  closed: 5,
};
const priorityMap = {
  low: 1,
  medium: 2,
  high: 3,
  urgent: 4,
};

@Injectable()
export class Freshdesk extends BaseTicketManager implements TicketManagerContract {
  build(ticketInput: TicketInput): BaseTicketInput {
    const {description, email, subject, status, priority} = ticketInput;
    const freshdeskTicketInput: FreshdeskTicketInput = {
      description,
      email,
      subject,
      status: statusMap[status?.toLowerCase() || `open`],
      priority: priorityMap[priority?.toLowerCase() || `low`],
    };
    return freshdeskTicketInput;
  }
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
  managerAsString(): string {
    return FRESHDESK;
  }
}
