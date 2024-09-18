import { StatusCodes } from "http-status-codes";

import { AuthorDto } from "./dto/author.dto.js";

export class AuthorController {
  constructor(authorService) {
    this.authorService = authorService;
  }

  async create(request, response) {
    const author = await this.authorService.create(request.body);

    response.success({
      message: "Author created successfully",
      status: StatusCodes.CREATED,
      data: new AuthorDto(author),
    });
  }

  async findAll(request, response) {
    const author = await this.authorService.findAll();

    response.success({
      message: "Author list successfully",
      status: StatusCodes.OK,
      data: author.map((a) => new AuthorDto(a)),
    });
  }

  async findById(request, response) {
    const author = await this.authorService.findById(request.params.authorId);

    response.success({
      message: "Author find successfully",
      status: StatusCodes.OK,
      data: new AuthorDto(author),
    });
  }

  async update(request, response) {
    const author = await this.authorService.update(
      request.params.authorId,
      request.body,
    );
    console.log(author);

    response.success({
      message: "Author updated successfully",
      status: StatusCodes.OK,
      data: new AuthorDto(author),
    });
  }

  async delete(request, response) {
    const author = await this.authorService.delete(request.params.authorId);

    response.success({
      message: "Author deleted successfully",
      status: StatusCodes.OK,
      data: new AuthorDto(author),
    });
  }
}
