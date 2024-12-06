import { StatusCodes } from "http-status-codes";

import { PublisherDto } from "./dto/publisher.dto.js";

export class publisherController {
  constructor(publisherService) {
    this.publisherService = publisherService;
  }

  async create(request, response) {
    const publisher = await this.publisherService.create(request.body);

    response.success({
      message: "Publisher created successfully",
      status: StatusCodes.CREATED,
      data: new PublisherDto(publisher),
    });
  }

  async findAll(request, response) {
    const publisher = await this.publisherService.findAll();

    response.success({
      message: "Publisher list successfully",
      status: StatusCodes.OK,
      data: publisher.map((g) => new PublisherDto(g)),
    });
  }

  async findById(request, response) {
    const publisher = await this.publisherService.findById(
      request.params.publisherId,
    );

    response.success({
      message: "Publisher find successfully",
      status: StatusCodes.OK,
      data: new PublisherDto(publisher),
    });
  }

  async update(request, response) {
    const publisher = await this.publisherService.update(
      request.params.publisherId,
      request.body,
    );

    response.success({
      message: "Publisher updated successfully",
      status: StatusCodes.OK,
      data: new PublisherDto(publisher),
    });
  }

  async delete(request, response) {
    const publisher = await this.publisherService.delete(
      request.params.publisherId,
    );

    response.success({
      message: "publisher deleted successfully",
      status: StatusCodes.OK,
      data: new PublisherDto(publisher),
    });
  }
}
