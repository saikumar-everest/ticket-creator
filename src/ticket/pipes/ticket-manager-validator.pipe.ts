import {PipeTransform, Injectable} from '@nestjs/common';
import {TicketInput} from '../model/ticket-input.model';
import {SUPPORTING_MANAGERS} from 'src/constants';

@Injectable()
export class TicketManagerValidator implements PipeTransform {
  transform(value: string | TicketInput): string | TicketInput {
    const isString = typeof value === 'string';
    const ticketManagerInput = isString ? (value as string) : ((value as TicketInput).ticketManager as string);
    const isValidTicketManager = SUPPORTING_MANAGERS.find(
      ticketManager => ticketManager.toLowerCase() === ticketManagerInput.toLowerCase(),
    );
    if (!isValidTicketManager) {
      throw Error(
        `Validation error: we currently support working with these ticket managers only! -> ${SUPPORTING_MANAGERS.join(
          ',',
        )}`,
      );
    }
    if (isString) {
      return (ticketManagerInput as string).toLowerCase();
    }
    return {
      ...(value as TicketInput),
      ticketManager: ticketManagerInput.toLowerCase(),
    };
  }
}
