export interface TicketContract {
  url(): string;
  authParams(): object;
  ticketLocation(): string;
  ticketsLocation(): string;
}
