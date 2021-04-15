import { Request, Response } from "express";
import { resolve } from "path";
import { getCustomRepository } from "typeorm";
import { AppError } from "../erros/AppErro";
import { SurveyRepository } from "../repositories/SurveyRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;

    const usersRepository = getCustomRepository(UserRepository);
    const surveyRepository = getCustomRepository(SurveyRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

    const user = await usersRepository.findOne({
      email,
    });
    if (!user) {
      return response.status(400).json({
        error: "User does not exists",
      });
    }

    const survey = await surveyRepository.findOne({
      id: survey_id,
    });
    if (!survey) {
      throw new AppError("Survey does not exists");
    }

    //And Condition
    const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
      where: { user_id: user.id, value: null },
      relations: ["user", "survey"],
    });

    /*
      Or condition
      const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
        where: [{ user_id: user.id}, {value: null }],
        relations: ["user", "survey"]
    });
    */

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      surveyUserId: surveyUserAlreadyExists?.id,
      link: process.env.URL_MAIL,
    };

    if (surveyUserAlreadyExists) {
      variables.surveyUserId = surveyUserAlreadyExists.id;
      await SendMailService.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUserAlreadyExists);
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id,
    });
    await surveysUsersRepository.save(surveyUser);

    variables.surveyUserId = surveyUser.id;

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return response.json(surveyUser);
  }
}

export { SendMailController };
