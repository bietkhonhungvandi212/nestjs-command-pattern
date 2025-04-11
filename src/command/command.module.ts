import { Module } from "@nestjs/common";
import { WarriorDragonKillerHandler } from "./handler/warrior-dragon-killer/warrior-dragon-killer.handler";
import { WitchDragonKillerHandler } from "./handler/witch-dragon-killer/witch-dragon-killer.handler";
import { WARRIOR_COMMAND, WITCH_COMMAND } from "src/dragon-killer/constant";
import { CommandInvokerFactory } from "./command-invoker-factory";
import { DragonKillerModule } from "src/dragon-killer/dragon-killer.module";

@Module({
    imports: [DragonKillerModule],
    providers: [
        {
            provide: WARRIOR_COMMAND,
            useClass: WarriorDragonKillerHandler,
        },
        {
            provide: WITCH_COMMAND,
            useClass: WitchDragonKillerHandler,
        },
        CommandInvokerFactory
    ],
    exports: [CommandInvokerFactory],
})
export class CommandModule {}