import { api } from "../api";

export const login = async (
  email: string,
  passord: string
): Promise<boolean> => {
  const data: any = await api;

  if (email !== data.email) {
    return false;
  }

  if (passord !== data.password) {
    return false;
  }

  return true;
};
