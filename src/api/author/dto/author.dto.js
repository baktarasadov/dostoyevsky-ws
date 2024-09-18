export class AuthorDto {
  constructor({ authorId, name, biography, dateOfBirth, nationality }) {
    Object.assign(this, {
      authorId,
      name,
      biography,
      dateOfBirth,
      nationality,
    });
  }
}
