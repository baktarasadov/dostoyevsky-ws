export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    return this.model.update(data, {
      where: { id },
      returning: true,
    });
  }

  delete(id) {
    return this.model.destroy({
      where: { id },
    });
  }

  findById(id) {
    return this.model.findOne({
      where: { id },
    });
  }

  findAll() {
    console.log("working FindAll");

    return this.model.findAll();
  }

  findOne(query) {
    return this.model.findOne({
      where: query,
    });
  }

  find(query) {
    return this.model.findAll({
      where: query,
    });
  }

  // Kayıtları sayma
  count(query) {
    return this.model.count({
      where: query,
    });
  }

  createMany(data) {
    return this.model.bulkCreate(data);
  }

  updateMany(query, data) {
    return this.model.update(data, {
      where: query,
    });
  }

  async upsert(query, data) {
    const record = await this.findOne(query);

    if (!record) {
      return this.create(data);
    }

    return this.update(record.id, data);
  }
}
