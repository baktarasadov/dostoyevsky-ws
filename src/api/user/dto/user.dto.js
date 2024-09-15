import { ContactDto } from "@/common/schema/dto/contact.dto";

export class UserDto {
  constructor(data) {
    this.fullName = data.fullName;
    this.profileImage = data.profileImage;
    this.role = data.role;
    this.contact = new ContactDto(data.contact);
  }
}
