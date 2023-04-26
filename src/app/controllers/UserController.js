const { response } = require("express");
const UserRepository = require("../repositories/UserRepository");

class UserController {
  async index(request, response) {
    const users = await UserRepository.findAll("users");

    response.json(users);
  }

  async store(request, response) {
    const { name, team } = request.body;
    const initialScore = 0;

    const user = await UserRepository.create("users", {
      name,
      team,
      score: initialScore,
    });

    response.status(201).json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { score } = request.body;

    const user = await UserRepository.update(id, "users", {
      score,
    });
    response.status(200).json(user);
  }
}

module.exports = new UserController();
