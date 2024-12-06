import { StatusCodes } from "http-status-codes";

import { BaseResponse } from "../../core/response/base-response.js";

export class PublisherService {
  constructor(publisherRepository) {
    this.publisherRepository = publisherRepository;
  }

  async create(createPublisherDto) {
    return this.publisherRepository.create(createPublisherDto);
  }

  async findAll() {
    return this.publisherRepository.findAll();
  }

  async findById(publisherId) {
    const publisher = await this.publisherRepository.findById(publisherId);

    if (!publisher) {
      throw BaseResponse.error({
        status: StatusCodes.NOT_FOUND,
        message: "Publisher not found!",
      });
    }

    return publisher;
  }

  async update(publisherId, updatePublisherDto) {
    await this.findById(publisherId);

    return this.publisherRepository.update(publisherId, updatePublisherDto);
  }

  async delete(publisherId) {
    await this.findById(publisherId);

    return this.publisherRepository.delete(publisherId);
  }
}
