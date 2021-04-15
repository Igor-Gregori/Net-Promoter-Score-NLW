import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../erros/AppErro";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
  //http://localhost:3333/answers/5?u=98b3f39c-a3e4-40c5-ab99-f75e75fcc64b
  //
  // Parametros de rota 'url/1/' :
  // routes.get("/answers/:value")
  //
  //
  // Parametros de query '?chave=valor'

  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError("surveyUser does not exists !", 400);
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.status(200).json(surveyUser);
  }
}

export { AnswerController };
