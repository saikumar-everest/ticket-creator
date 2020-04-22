import {Ticket} from './model/ticket.model';
import {Resolver, Query, Args} from '@nestjs/graphql';
import {TicketService} from './ticket.service';

@Resolver(() => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Query(() => [Ticket], {name: 'tickets'})
  async getTickets(@Args('ticketType') type: string): Promise<Ticket[]> {
    return await this.ticketService.getAll(type);
  }
}
