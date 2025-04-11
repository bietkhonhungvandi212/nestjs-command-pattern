import { Controller } from '@nestjs/common';
import { DragonKillerService } from './dragon-killer.service';

@Controller('dragon-killer')
export class DragonKillerController {
  constructor(private readonly dragonKillerService: DragonKillerService) {}
}
