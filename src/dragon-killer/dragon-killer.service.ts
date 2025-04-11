import { Injectable } from '@nestjs/common';
import { DragonKillRequest } from './dto/dragon-kill.request';

@Injectable()
export class DragonKillerService {
    constructor() { }

    kill(data: DragonKillRequest) {
        console.log("🚀 ~ DragonKillerService ~ kill ~ dragonId:", data.dragonId)
    }
}
