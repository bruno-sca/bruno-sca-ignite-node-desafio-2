import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    let userProfile;

    try {
      userProfile = this.turnUserAdminUseCase.execute({ user_id });
    } catch (error) {
      return response.status(404).json({ error: { message: error } });
    }

    return response.json(userProfile);
  }
}

export { TurnUserAdminController };
