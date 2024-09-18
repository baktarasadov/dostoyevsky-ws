import { BaseResponse } from "@/core/response/base-response";
import { StatusCodes } from "http-status-codes";

import { hashPassword } from "../../common/helper/hash-password";
import Contact from "../../common/schema/model/contact-model.schema";
import { sequelize } from "../../core/config/db.config";

export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(userDto) {
    const { password } = userDto;

    const { email, phoneNumber } = userDto.contact;

    const passwordHash = await hashPassword(password);

    const transaction = await sequelize.transaction();

    try {
      const newContact = await Contact.create(
        {
          email,
          phoneNumber,
        },
        { transaction },
      );

      await transaction.commit();

      return this.userRepository.create({
        ...userDto,
        password: passwordHash,
        role: 1,
        contact: newContact.id,
      });
    } catch (error) {
      console.log(error);

      await transaction.rollback();
    }
  }

  async findByEmail(email) {
    return this.userRepository.findOne({ "contact.email": email });
  }

  async find(query) {
    return this.userRepository.findOne(query);
  }

  async findById(id) {
    const data = await this.userRepository.findById(id);

    if (!data) {
      throw BaseResponse.error({
        status: StatusCodes.NOT_FOUND,
        message: "User not found!",
      });
    }

    return data;
  }

  async update(id, userDto) {
    await this.findById(id);

    return this.userRepository.update(id, userDto);
  }

  async delete(id) {
    await this.findById(id);

    return this.userRepository.delete(id);
  }

  async findByEmailOrThrow(email) {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new BaseResponse.error({
        message: "User with this email does not exist.",
        status: StatusCodes.NOT_FOUND,
      });
    }

    return user;
  }
}
