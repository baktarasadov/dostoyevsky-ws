import { container } from "@/core/di";

import { publisherController } from "./publisher.controller";
import { PublisherRepository } from "./publisher.repository";
import { PublisherService } from "./publisher.service";

export const publisherDIKeys = {
  service: "publisher-service",
  repository: "publisher-repository",
  controller: "publisher-controller",
};

container.register(
  publisherDIKeys.repository,
  [],
  () => new PublisherRepository(),
);

container.register(
  publisherDIKeys.service,
  [publisherDIKeys.repository],
  (publisherRepository) => new PublisherService(publisherRepository),
);

container.register(
  publisherDIKeys.controller,
  [publisherDIKeys.service],
  (publisherService) => new publisherController(publisherService),
);
