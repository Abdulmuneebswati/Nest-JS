import { Test, TestingModule } from '@nestjs/testing';
import { AuService } from './au.service';

describe('AuService', () => {
  let service: AuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuService],
    }).compile();

    service = module.get<AuService>(AuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
