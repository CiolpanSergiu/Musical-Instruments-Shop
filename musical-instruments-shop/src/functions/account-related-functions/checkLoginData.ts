import { User } from "../../types/commonTypes";

export default function checkLoginData(
  values: { email: string; password: string },
  users: User[]
): User[] {
  return users.filter((user) => {
    return user.email === values.email && user.password === values.password;
  });
}
