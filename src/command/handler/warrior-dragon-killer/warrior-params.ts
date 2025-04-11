import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Command } from "src/command/command.interface";
import { Weapon } from "src/dragon-killer/dto/dragon-kill.request";

export class WarriorParams extends Command<{actionId: string}> {
    @IsNumber()
    @IsNotEmpty()
    dragonId: number;

    @IsString()
    @IsNotEmpty()
    killBy: Weapon; 

    @IsNumber()
    @IsNotEmpty()
    health: number;

    @IsNumber()
    @IsNotEmpty()
    attack: number;

    @IsNumber()
    @IsNotEmpty()
    defense: number;
}