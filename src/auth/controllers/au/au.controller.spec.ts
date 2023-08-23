import { Test, TestingModule } from '@nestjs/testing';
import { AuController } from './au.controller';

describe('AuController', () => {
  let controller: AuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuController],
    }).compile();

    controller = module.get<AuController>(AuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
