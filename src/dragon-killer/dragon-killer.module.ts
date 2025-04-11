import { Module } from '@nestjs/common';
import { DragonKillerService } from './dragon-killer.service';
import { DragonKillerController } from './dragon-killer.controller';

@Module({
  controllers: [DragonKillerController],
  providers: [DragonKillerService],
  exports: [DragonKillerService]
})
export class DragonKillerModule {}
