import { UserDto } from "@/api/user/dto/user.dto";

export class AuthDto {
  constructor(data) {
    this.token = data.token.access || null;
    this.user = new UserDto(data.user);
  }
}
