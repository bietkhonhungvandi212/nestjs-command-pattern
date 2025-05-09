import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DragonKillerService } from './../src/dragon-killer/dragon-killer.service';
import { WarriorParams } from './../src/command/handler/warrior-dragon-killer/warrior-params';
import { WitchParams } from './../src/command/handler/witch-dragon-killer/witch-params';
import { Weapon } from './../src/dragon-killer/dto/dragon-kill.request';
import { RESULT_TYPE_SYMBOL } from 'src/dragon-killer/constant';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let dragonKillerService: DragonKillerService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    dragonKillerService = moduleFixture.get<DragonKillerService>(DragonKillerService);
  });

  afterEach(async () => {
    await app.close();
  });

  it('/witchers (POST)', async () => {
    const killSpy = jest.spyOn(dragonKillerService, 'kill');
    const witchParams: WitchParams = { dragonId: 1, killBy: 'spear', abilityPower: 100, flexibility: 50, [RESULT_TYPE_SYMBOL]: {actionId: '1'} };

    await request(app.getHttpServer())
      .post('/witchers')
      .send(witchParams)
      .expect(201);

    expect(killSpy).toHaveBeenCalledWith({ dragonId: witchParams.dragonId, killBy: witchParams.killBy });
  });

  it('/warriors (POST)', async () => {
    const killSpy = jest.spyOn(dragonKillerService, 'kill');
    const warriorParams: WarriorParams = { dragonId: 2, killBy: 'sword', health: 100, attack: 70, defense: 30, [RESULT_TYPE_SYMBOL]: {actionId: '2'} };

    await request(app.getHttpServer())
      .post('/warriors')
      .send(warriorParams)
      .expect(201);

    expect(killSpy).toHaveBeenCalledWith({ dragonId: warriorParams.dragonId, killBy: warriorParams.killBy });
  });
});
