import { StatusCodes } from "http-status-codes";

import { GenreDto } from "./dto/genre.dto.js";

export class GenreController {
  constructor(genreService) {
    this.genreService = genreService;
  }

  async create(request, response) {
    const genre = await this.genreService.create(request.body);

    response.success({
      message: "Genre created successfully",
      status: StatusCodes.CREATED,
      data: new GenreDto(genre),
    });
  }

  async findAll(request, response) {
    const genre = await this.genreService.findAll();

    response.success({
      message: "Genre list successfully",
      status: StatusCodes.OK,
      data: genre.map((g) => new GenreDto(g)),
    });
  }

  async findById(request, response) {
    const genre = await this.genreService.findById(request.params.genreId);

    response.success({
      message: "Genre find successfully",
      status: StatusCodes.OK,
      data: new GenreDto(genre),
    });
  }

  async update(request, response) {
    const genre = await this.genreService.update(
      request.params.genreId,
      request.body,
    );

    response.success({
      message: "Genre updated successfully",
      status: StatusCodes.OK,
      data: new GenreDto(genre),
    });
  }

  async delete(request, response) {
    const genre = await this.genreService.delete(request.params.genreId);

    response.success({
      message: "Genre deleted successfully",
      status: StatusCodes.OK,
      data: new GenreDto(genre),
    });
  }
}
