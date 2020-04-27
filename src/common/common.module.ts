import {Module} from '@nestjs/common';
import {TicketUtil} from './ticket-util';
import {Zendesk} from '../ticket-manager/zendesk';
import {Freshdesk} from '../ticket-manager/freshdesk';

@Module({
  exports: [TicketUtil],
  providers: [TicketUtil, Freshdesk, Zendesk],
})
export class CommonModule {}
