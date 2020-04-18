import {Resolver} from '@nestjs/graphql';
import {Name} from './model/name.model';
import {NameService} from './name.service';
import {Query} from '@nestjs/graphql';

@Resolver(of => Name)
export class NameResolver {
  constructor(private readonly nameService: NameService) {}

  @Query(returns => [Name], {name: 'names'})
  async getNames(): Promise<Name[]> {
    return this.nameService.getNames();
  }
}
