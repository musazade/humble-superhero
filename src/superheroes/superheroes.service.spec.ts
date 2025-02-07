import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return superheroes sorted by humilityScore', () => {
    service.create({ name: 'Ironman', superpower: 'Flying', humilityScore: 5 });
    service.create({ name: 'Flash', superpower: 'Speed', humilityScore: 9 });
    service.create({
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 7,
    });

    const superheroes = service.findAll();
    expect(superheroes[0].name).toBe('Flash'); // Highest humility score first
    expect(superheroes[1].name).toBe('Superman');
    expect(superheroes[2].name).toBe('Ironman');
  });
});
