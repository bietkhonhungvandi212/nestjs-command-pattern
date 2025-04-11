import { Injectable } from "@nestjs/common";
import { CommandHandler } from "../../command.interface";
import { WitchParams } from "./witch-params";
import { DragonKillerService } from "src/dragon-killer/dragon-killer.service";
import { CommandHandlerFactory } from "src/decorator/command-handler.decorator";
import { COMMAND_METADATA } from "src/decorator/metadata-constant";

@CommandHandlerFactory(WitchParams)
export class WitchDragonKillerHandler implements CommandHandler<WitchParams> {
    constructor(private readonly dragonKillerService: DragonKillerService) { }

    async execute(data: WitchParams): Promise<any> {
        console.log("🚀 ~ WitchDragonKillerHandler ~ execute ~ data:", data)
        const { constructor: commandType } = Object.getPrototypeOf(data);
        console.log("🚀 ~ getCommandMetadata ~ commandType:", commandType)
        const commandMetadata: { id: string } = Reflect.getMetadata(
            COMMAND_METADATA,
            commandType,
        );
        console.log("🚀 ~ getCommandMetadata ~ commandMetadata:", commandMetadata)
        this.dragonKillerService.kill({dragonId: data.dragonId, killBy: data.killBy})
    }
}