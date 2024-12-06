import { StatusCodes } from "http-status-codes";

import { BaseResponse } from "../../core/response/base-response.js";

export class GenreService {
  constructor(genreRepository) {
    this.genreRepository = genreRepository;
  }

  async create(createGenreDto) {
    return this.genreRepository.create(createGenreDto);
  }

  async findAll() {
    return this.genreRepository.findAll();
  }

  async findById(genreId) {
    const genre = await this.genreRepository.findById(genreId);

    if (!genre) {
      throw BaseResponse.error({
        status: StatusCodes.NOT_FOUND,
        message: "Genre not found!",
      });
    }

    return genre;
  }

  async update(genreId, updateGenreDto) {
    await this.findById(genreId);

    return this.genreRepository.update(genreId, updateGenreDto);
  }

  async delete(genreId) {
    await this.findById(genreId);

    return this.genreRepository.delete(genreId);
  }
}
