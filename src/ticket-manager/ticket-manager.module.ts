import {Module} from '@nestjs/common';
import {TicketUtil} from './ticket-util';
import {Zendesk} from './zendesk';
import {Freshdesk} from './freshdesk';

@Module({
  exports: [TicketUtil],
  providers: [TicketUtil, Freshdesk, Zendesk],
})
export class TicketManagerModule {}
