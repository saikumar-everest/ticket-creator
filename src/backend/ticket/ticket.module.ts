import {Module} from '@nestjs/common';
import {TicketResolver} from './ticket.resolver';
import {TicketService} from './ticket.service';
import {Zendesk} from '../ticket-manager/zendesk';
import {Freshdesk} from '../ticket-manager/freshdesk';

@Module({
  providers: [TicketResolver, TicketService, Freshdesk, Zendesk],
})
export class TicketModule {}
