import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { Movie } from "./entity/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    console.log(typeof id);
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.movieService.update(id, updateData);
  }
}
