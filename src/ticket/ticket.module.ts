import {Module} from '@nestjs/common';
import {TicketResolver} from './ticket.resolver';
import {TicketService} from './ticket.service';
import {TicketManagerModule} from '../ticket-manager/ticket-manager.module';

@Module({
  imports: [TicketManagerModule],
  providers: [TicketResolver, TicketService],
})
export class TicketModule {}
