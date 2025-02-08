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
    // Create superheroes with different humility scores
    service.create({ name: 'Ironman', superpower: 'Flying', humilityScore: 5 });
    service.create({ name: 'Flash', superpower: 'Speed', humilityScore: 9 });
    service.create({
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 7,
    });

    // Retrieve the list of superheroes sorted by humilityScore in descending order
    const superheroes = service.findAll();

    // Verify the order of superheroes by their humilityScore
    expect(superheroes[0].name).toBe('Flash'); // Expect Flash to be first as it has the highest humility score
    expect(superheroes[1].name).toBe('Superman'); // Expect Superman to be second
    expect(superheroes[2].name).toBe('Ironman'); // Expect Ironman to be third
  });
});
