import {FreshdeskTicketInput} from './freshdesk/freshdesk-ticket-input.model';
import {ZendeskTicketInput} from './zendesk/zendesk-ticket-input.model';

export type BaseTicketInput = FreshdeskTicketInput | ZendeskTicketInput;
