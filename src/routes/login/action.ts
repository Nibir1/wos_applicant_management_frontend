import { getFormData } from "@/utils";

import type { ActionFunctionArgs } from "react-router-dom";
import type { LoginFormData, LoginFormResponse } from "./Body";
import type { OptSessionUser } from "@/session";

async function performLogin(
  email: string,
  password: string
): Promise<OptSessionUser> {
  try {
    const response = await fetch(
      `https://wosambackend-production.up.railway.app/get_user_infos`
    );
    const user_infos = await response.json();

    const foundUser = user_infos.find(
      (data: { user_email: string; user_password: string }) => {
        return email === data.user_email && password === data.user_password;
      }
    );

    if (foundUser) {
      return {
        id: "1234",
        name: foundUser.user_name,
        picture: "",
        designation: foundUser.user_designation,
        user_email: foundUser.user_email,
      };
    }
  } catch (error) {
    console.error(error);
  }

  return null;
}

export default async function loginFormAction({
  request,
}: ActionFunctionArgs): Promise<LoginFormResponse> {
  const { accountEmail, accountPassword } = await getFormData<LoginFormData>(
    request
  );

  const response: LoginFormResponse = { user: null, errors: {} };

  if (typeof accountEmail !== "string" || !accountEmail.includes("@"))
    response.errors.email = true;

  if (typeof accountPassword !== "string" || accountPassword.length < 6)
    response.errors.password = true;

  // Do a dumb login check
  const optUser = await performLogin(accountEmail, accountPassword);
  console.log(`The optUser is ${optUser}`);
  if (optUser) response.user = optUser;
  else response.errors.badCredentials = true;

  // Check if any errors, otherwise, move on
  return response;
}
