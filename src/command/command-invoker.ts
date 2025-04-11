import { Command, CommandHandler, ICommand } from "./command.interface";

export class CommandInvoker<T extends Command<unknown>> {
    constructor(
        private readonly command: CommandHandler<T>,
    ) {}

    async execute(data: T) {
        return this.command.execute(data);
    }
}