import {TicketInput} from '../ticket/model/ticket-input.model';
import {BaseTicketInput} from '../ticket/model/base-ticket-input.model';

export interface TicketManagerContract {
  url(): string;
  authParams(): object;
  ticketLocation(): string;
  ticketsLocation(): string;
  apis(): any;
  build(ticketInput: TicketInput): BaseTicketInput;
}
