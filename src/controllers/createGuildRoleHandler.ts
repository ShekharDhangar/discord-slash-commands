import jwt from "@tsndr/cloudflare-worker-jwt";
import * as response from "../constants/responses";
import { env } from "../typeDefinitions/default.types";
import JSONResponse from "../utils/JsonResponse";
import { IRequest } from "itty-router";
import { createGuildRole } from "../utils/createGuildRole";
import { createNewRole } from "../typeDefinitions/discordMessage.types";

export async function createGuildRoleHandler(request: IRequest, env: env) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return new JSONResponse(response.BAD_SIGNATURE);
  }
  const authToken = authHeader.split(" ")[1];
  try {
    await jwt.verify(authToken, env.BOT_PUBLIC_KEY, { algorithm: "RS256" });
    const body: createNewRole = await request.json();

    const res = await createGuildRole(body, env);
    return new JSONResponse(res);
  } catch (err) {
    console.error(err);
    return new JSONResponse(response.BAD_SIGNATURE);
  }
}
