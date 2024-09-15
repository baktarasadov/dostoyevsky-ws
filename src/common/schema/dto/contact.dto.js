export class ContactDto {
  constructor({ email, phoneNumber }) {
    Object.assign(this, {
      email,
      phoneNumber,
    });
  }
}
