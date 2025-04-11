import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DragonKillerModule } from './dragon-killer/dragon-killer.module';
import { CommandModule } from './command/command.module';

@Module({
  imports: [DragonKillerModule, CommandModule],
  controllers: [AppController],
})
export class AppModule {}
