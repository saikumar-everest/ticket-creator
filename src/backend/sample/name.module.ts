import {Module} from '@nestjs/common';
import {NameResolver} from './name.resolver';
import {NameService} from './name.service';

@Module({
  providers: [NameResolver, NameService],
})
export class NameModule {}
