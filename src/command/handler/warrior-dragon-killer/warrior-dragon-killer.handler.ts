import { Injectable } from "@nestjs/common";
import { CommandHandler } from "../../command.interface";
import { WarriorParams } from "./warrior-params";
import { DragonKillerService } from "src/dragon-killer/dragon-killer.service";

@Injectable()
export class WarriorDragonKillerHandler implements CommandHandler<WarriorParams> {
    constructor(private readonly dragonKillerService: DragonKillerService) {}

    async execute(data: WarriorParams): Promise<any> {
        console.log("🚀 ~ WarriorDragonKillerHandler ~ execute ~ data:", data)
        this.dragonKillerService.kill({dragonId: data.dragonId, killBy: data.killBy})
    }
}