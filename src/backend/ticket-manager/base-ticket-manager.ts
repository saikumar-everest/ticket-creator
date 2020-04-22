const APIS = {
  tickets: '/tickets',
};
export class BaseTicketManager {
  protected commonApis: any;
  constructor() {
    this.commonApis = APIS;
  }
}
