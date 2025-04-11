import { Test, TestingModule } from '@nestjs/testing';
import { DragonKillerController } from './dragon-killer.controller';
import { DragonKillerService } from './dragon-killer.service';

describe('DragonKillerController', () => {
  let controller: DragonKillerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DragonKillerController],
      providers: [DragonKillerService],
    }).compile();

    controller = module.get<DragonKillerController>(DragonKillerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
