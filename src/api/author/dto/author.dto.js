export class AuthorDto {
  constructor({ id, name, biography, dateOfBirth, nationality }) {
    Object.assign(this, {
      id,
      name,
      biography,
      dateOfBirth,
      nationality,
    });
  }
}
