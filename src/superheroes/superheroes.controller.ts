import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes') // {baseurl}/superheroes
export class SuperheroesController {
  constructor(private readonly superheroeService: SuperheroesService) {}

  @Post() // POST /superheroes
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    console.log('createSuperheroDto', createSuperheroDto);
    this.superheroeService.create(createSuperheroDto);
    return { message: 'Superhero created' };
  }

  @Get() // GET /superheroes
  findAll() {
    return this.superheroeService.findAll();
  }
}
