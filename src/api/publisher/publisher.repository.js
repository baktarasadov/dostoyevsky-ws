import { BaseRepository } from "@/shared/repository/base.repository";

import Publisher from "./model/publisher.mode";

export class PublisherRepository extends BaseRepository {
  constructor() {
    super(Publisher);
  }
}
