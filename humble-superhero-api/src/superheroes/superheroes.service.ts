import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
@Injectable()
export class SuperheroesService {
  private superheroes = [];

  create(createSuperheroDto: CreateSuperheroDto) {
    this.superheroes.push(createSuperheroDto);
  }

  findAll() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore); // sort by humility score before returning (desc)
  }
}
