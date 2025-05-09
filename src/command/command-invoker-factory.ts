import { Injectable } from '@nestjs/common';
import { CommandInvoker } from './command-invoker';
import { Command, CommandHandler } from './command.interface';
import { ModuleRef } from '@nestjs/core';
import { getCommandHandlerMetadata } from 'src/decorator/command-handler.decorator';
import { WarriorDragonKillerHandler } from './handler/warrior-dragon-killer/warrior-dragon-killer.handler';

@Injectable()
export class CommandInvokerFactory {
  constructor(private readonly moduleRef: ModuleRef) {
    console.log(
      '🚀 ~ CommandInvokerFactory<T> ~ moduleRef.modules:',
      moduleRef.container.getModules(),
    );
  }

  createInvoker<T extends Command<unknown>>(token: symbol): CommandInvoker<T> {
    const command = this.moduleRef.get(token, {
      strict: false,
    }) as CommandHandler<T>;
    getCommandHandlerMetadata(WarriorDragonKillerHandler);
    console.log(
      '🚀 ~ CommandInvokerFactory<T ~ createInvoker ~ command:',
      command,
    );
    return new CommandInvoker(command);
  }
}
