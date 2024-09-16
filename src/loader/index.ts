import { LoaderFunction } from "react-router-dom";
import { Users, UsersResponse } from "@types";

export const loaderUsers: LoaderFunction = async (): Promise<UsersResponse> => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  if (result.status === 404) {
    throw new Response("not found", { status: 404 });
  }
  const resultData: Users[] = await result.json();
  return { users: resultData };
};
