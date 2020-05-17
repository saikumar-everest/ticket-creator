import {Injectable} from '@nestjs/common';
import {RestClient} from '../rest-client/rest-client';
import {Ticket} from './model/ticket.model';
import {TicketUtil} from '../ticket-manager/ticket-util';
import {TicketInput} from './model/ticket-input.model';

@Injectable()
export class TicketService {
  constructor(private readonly ticketUtil: TicketUtil) {}

  async getAll(ticketType: string): Promise<Ticket[]> {
    const ticketManager = this.ticketUtil.getTicketManager(ticketType);

    const tickets = await new RestClient(ticketManager).doGet(ticketManager.apis().tickets);
    return this.addTicketManagerProperty(tickets, ticketManager.managerAsString());
  }

  async create(ticketInput: TicketInput): Promise<Ticket> {
    const ticketManager = this.ticketUtil.getTicketManager(ticketInput.ticketManager);
    const transformedTicket = ticketManager.build(ticketInput);

    const ticket = await new RestClient(ticketManager).doPost(ticketManager.apis().ticket, transformedTicket);
    return this.addTicketManagerProperty([ticket], ticketManager.managerAsString())[0];
  }

  private addTicketManagerProperty(tickets: Ticket[], ticketManager: string): Ticket[] {
    return tickets.map(ticket => {
      return {...ticket, ticketManager};
    });
  }
}
