import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroeService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    console.log('createSuperheroDto', createSuperheroDto);
    this.superheroeService.create(createSuperheroDto);
    return { message: 'Superhero created' };
  }

  @Get()
  findAll() {
    return this.superheroeService.findAll();
  }
}
