import {TicketContract} from '../common/ticket-contract';
import {compact, get} from 'lodash';
import {Ticket} from '../ticket/model/ticket.model';
import * as axios from 'axios';

export class RestClient {
  constructor(private readonly ticketManager: TicketContract) {}

  private baseUrl(path: string): string {
    return compact([this.ticketManager.url(), path]).join('');
  }

  async doGet(path: string, params?: object): Promise<Ticket[]> {
    const config: axios.AxiosRequestConfig = {
      baseURL: this.baseUrl(path),
      headers: {'Content-Type': 'application/json'},
      method: 'GET',
      params,
      auth: this.ticketManager.authParams() as axios.AxiosBasicCredentials,
    };

    const response = await axios.default(config);
    return get(response, this.ticketManager.ticketsLocation());
  }
}
