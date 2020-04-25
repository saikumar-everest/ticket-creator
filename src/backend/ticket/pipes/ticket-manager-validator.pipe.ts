import {PipeTransform, Injectable} from '@nestjs/common';

const supportingTicketManagers = ['freshdesk', 'zendesk'];

@Injectable()
export class TicketManagerValidator implements PipeTransform {
  transform(value: string): string {
    const isValidTicketManager = supportingTicketManagers.find(
      ticketManager => ticketManager.toLowerCase() === value.toLowerCase(),
    );
    if (!isValidTicketManager) {
      throw Error(
        `Validation error: we currently support working with these ticket managers only! -> ${supportingTicketManagers.join(
          ',',
        )}`,
      );
    }
    return value.toLowerCase();
  }
}
