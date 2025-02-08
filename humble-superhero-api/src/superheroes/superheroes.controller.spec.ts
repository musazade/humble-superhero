import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesModule } from './superheroes.module';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SuperheroesModule],
      controllers: [SuperheroesController],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a superhero', () => {
    const createSuperheroDto = {
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 7,
    };
    const result = controller.create(createSuperheroDto);
    expect(result.message).toBe('Superhero created');
  });
});
