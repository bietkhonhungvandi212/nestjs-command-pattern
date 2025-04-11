import { Test, TestingModule } from '@nestjs/testing';
import { DragonKillerService } from './dragon-killer.service';

describe('DragonKillerService', () => {
  let service: DragonKillerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DragonKillerService],
    }).compile();

    service = module.get<DragonKillerService>(DragonKillerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
