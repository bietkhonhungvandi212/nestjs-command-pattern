import { Injectable } from "@nestjs/common";
import { CommandInvoker } from "./command-invoker";
import { Command, CommandHandler, ICommand } from "./command.interface";
import { ModuleRef } from "@nestjs/core";

@Injectable()
export class CommandInvokerFactory {
    constructor(
        private readonly moduleRef: ModuleRef
    ) {
        console.log("🚀 ~ CommandInvokerFactory<T> ~ moduleRef.modules:", moduleRef.container.getModules())
    }

    createInvoker<T extends Command<unknown>>(token: symbol): CommandInvoker<T> {
        const command =  this.moduleRef.get(token, {strict: false}) as CommandHandler<T>;
        console.log("🚀 ~ CommandInvokerFactory<T ~ createInvoker ~ command:", command)
        return new CommandInvoker(command);
    }
}