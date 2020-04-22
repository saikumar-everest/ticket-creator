import {Module} from '@nestjs/common';
import {TicketResolver} from './ticket.resolver';
import {TicketService} from './ticket.service';
import {CommonModule} from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [TicketResolver, TicketService],
})
export class TicketModule {}
