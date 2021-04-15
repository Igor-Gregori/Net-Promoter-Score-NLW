import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import * as yup from "yup";
import { AppError } from "../erros/AppErro";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
    });
    
    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const usersRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists !");
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }

  async delete(request: Request, response: Response) {
    const { id, name, email } = request.body;

    const usersRepository = getRepository(User);

    const users = await usersRepository.findByIds([id]);

    if (users.length < 1) {
      return response.status(400).json({
        error: "User no exists !",
      });
    }

    await usersRepository.delete({
      id,
    });

    return response.status(201).json(`The user was been deleted`);
  }

  async update(request: Request, response: Response){
    const { id, name, email } = request.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(id);

    if(!user){
      return response.status(400).json({
        error: "User no exists !",
      });
    }

    user.name = name;
    user.email = email;

    await usersRepository.save(user);

    return response.status(201).json('The user has been updated');
  }
}

export { UserController };
