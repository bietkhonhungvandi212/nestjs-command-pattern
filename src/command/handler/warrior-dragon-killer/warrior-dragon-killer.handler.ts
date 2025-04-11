import { CommandHandler } from "../../command.interface";
import { WarriorParams } from "./warrior-params";
import { DragonKillerService } from "src/dragon-killer/dragon-killer.service";
import { CommandHandlerFactory, getCommandMetadata } from "src/decorator/command-handler.decorator";

@CommandHandlerFactory(WarriorParams)
export class WarriorDragonKillerHandler implements CommandHandler<WarriorParams> {
    constructor(private readonly dragonKillerService: DragonKillerService) {}

    async execute(data: WarriorParams): Promise<any> {
        console.log("🚀 ~ WarriorDragonKillerHandler ~ execute ~ data:", data)
        getCommandMetadata(WarriorParams);
        this.dragonKillerService.kill({dragonId: data.dragonId, killBy: data.killBy})
    }
}