import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandInvokerFactory } from './command/command-invoker-factory';
import { WitchParams } from './command/handler/witch-dragon-killer/witch-params';
import { WARRIOR_COMMAND, WITCH_COMMAND } from './dragon-killer/constant';
import { WarriorParams } from './command/handler/warrior-dragon-killer/warrior-params';

@Controller()
export class AppController {
  constructor(private readonly commandInvokerFactory: CommandInvokerFactory) {}

  @Post("/witchers")
  async kill(@Body() body: WitchParams){
    const invoker = this.commandInvokerFactory.createInvoker<WitchParams>(WITCH_COMMAND);
    return await invoker.execute(body);
  }

  @Post("/warriors")
  async killWarrior(@Body() body: WarriorParams){
    const invoker = this.commandInvokerFactory.createInvoker(WARRIOR_COMMAND);
    return invoker.execute(body);
  }
}
