import {TicketUtil} from 'src/backend/common/ticket-util';
import {Freshdesk} from 'src/backend/ticket-manager/freshdesk';
import {Zendesk} from 'src/backend/ticket-manager/zendesk';

describe('Ticket util unit tests', () => {
  it('should return freshdesk ticket manager if input given is freshdesk', () => {
    const freshdeskManager = new Freshdesk();
    const ticketUtil = new TicketUtil(freshdeskManager, new Zendesk());

    expect(ticketUtil.getTicketManager('freshdesk')).toStrictEqual(freshdeskManager);
  });

  it('should return zendesk ticket manager(as default) if input given is not freshdesk', () => {
    const zendeskManager = new Zendesk();
    const ticketUtil = new TicketUtil(new Freshdesk(), zendeskManager);

    expect(ticketUtil.getTicketManager('something not freshdesk')).toStrictEqual(zendeskManager);
  });
});
