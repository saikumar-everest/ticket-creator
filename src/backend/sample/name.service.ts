import {Name} from './model/name.model';
import {Injectable} from '@nestjs/common';

@Injectable()
export class NameService {
  private names: Name[] = [
    {
      family: 'Vantaku',
      given: 'Saikumar',
    },
    {
      family: 'Aleti',
      given: 'Srinivasarao',
    },
  ];
  getNames(): Name[] {
    return this.names;
  }
}
