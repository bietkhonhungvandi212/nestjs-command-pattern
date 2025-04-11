import { Injectable } from "@nestjs/common";
import { CommandHandler } from "../../command.interface";
import { WitchParams } from "./witch-params";
import { DragonKillerService } from "src/dragon-killer/dragon-killer.service";

@Injectable()
export class WitchDragonKillerHandler implements CommandHandler<WitchParams> {
    constructor(private readonly dragonKillerService: DragonKillerService) { }

    async execute(data: WitchParams): Promise<any> {
        console.log("🚀 ~ WitchDragonKillerHandler ~ execute ~ data:", data)
        this.dragonKillerService.kill({dragonId: data.dragonId, killBy: data.killBy})
    }
}