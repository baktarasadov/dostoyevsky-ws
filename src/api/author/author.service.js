import { StatusCodes } from "http-status-codes";

import { BaseResponse } from "../../core/response/base-response.js";

export class AuthorService {
  constructor(authorRepository) {
    this.authorRepository = authorRepository;
  }

  async create(createAuthorDto) {
    return this.authorRepository.create(createAuthorDto);
  }

  async findAll() {
    return this.authorRepository.findAll();
  }

  async findById(authorId) {
    const author = await this.authorRepository.findById(authorId);

    if (!author) {
      throw BaseResponse.error({
        status: StatusCodes.NOT_FOUND,
        message: "User not found!",
      });
    }

    return author;
  }

  async update(authorId, updateAuthorDto) {
    await this.findById(authorId);

    return this.authorRepository.update(authorId, updateAuthorDto);
  }

  async delete(authorId) {
    await this.findById(authorId);

    return this.authorRepository.delete(authorId);
  }
}
