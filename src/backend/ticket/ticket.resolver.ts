import {Ticket} from './model/ticket.model';
import {Resolver, Query, Args} from '@nestjs/graphql';
import {TicketService} from './ticket.service';

@Resolver(of => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Query(returns => [Ticket], {name: 'tickets'})
  async getTickets(@Args('ticketType') type: string): Promise<Ticket[]> {
    const tickets = await this.ticketService.getAll(type);
    // console.log(tickets);
    return tickets;
  }
}
