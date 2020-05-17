import {Ticket} from './model/ticket.model';
import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import {TicketService} from './ticket.service';
import {TicketManagerValidator} from './pipes/ticket-manager-validator.pipe';
import {TicketInput} from './model/ticket-input.model';
import {TicketUtil} from '../ticket-manager/ticket-util';

@Resolver(() => Ticket)
export class TicketResolver {
  constructor(private readonly ticketService: TicketService, private readonly ticketUtil: TicketUtil) {
    ticketUtil = this.ticketUtil;
  }

  @Query(() => [Ticket], {name: 'tickets'})
  async getTickets(@Args('ticketManager', new TicketManagerValidator()) type: string): Promise<Ticket[]> {
    return this.ticketService.getAll(type);
  }

  @Mutation(() => Ticket, {name: 'ticket'})
  async createTicket(
    @Args('ticketInput', new TicketManagerValidator())
    ticketInput: TicketInput,
  ): Promise<Ticket> {
    return this.ticketService.create(ticketInput);
  }
}
