import {TicketManagerContract} from '../common/ticket-manager-contract';
import {compact, get} from 'lodash';
import {Ticket} from '../ticket/model/ticket.model';
import * as axios from 'axios';

export class RestClient {
  constructor(private readonly ticketManager: TicketManagerContract) {}

  private baseUrl(path: string): string {
    return compact([this.ticketManager.url(), path]).join('');
  }

  async doGet(path: string, params?: object): Promise<Ticket[]> {
    return this.dispatch('GET', path, {params}, this.ticketManager.ticketsLocation()) as Promise<Ticket[]>;
  }

  async doPost(path: string, data: object): Promise<Ticket> {
    return this.dispatch('POST', path, {data}, this.ticketManager.ticketLocation()) as Promise<Ticket>;
  }

  async dispatch(
    method: axios.Method,
    path: string,
    options: {
      params?: object;
      data?: object;
      headers?: object;
    } = {headers: {'Content-Type': 'application/json'}},
    responseDataLocation: string,
  ): Promise<Ticket | Ticket[]> {
    const config: axios.AxiosRequestConfig = {
      baseURL: this.baseUrl(path),
      method,
      auth: this.ticketManager.authParams() as axios.AxiosBasicCredentials,
      ...options,
    };

    const response = await axios.default(config);
    return get(response, responseDataLocation);
  }
}
