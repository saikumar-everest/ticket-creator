import {Ticket} from './model/ticket.model';
import {Resolver, Query, Args} from '@nestjs/graphql';
import {TicketService} from './ticket.service';
import {TicketManagerValidator} from './pipes/ticket-manager-validator.pipe';

@Resolver(() => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService) {}

  @Query(() => [Ticket], {name: 'tickets'})
  async getTickets(@Args('ticketManager', new TicketManagerValidator()) type: string): Promise<Ticket[]> {
    return this.ticketService.getAll(type);
  }
}
