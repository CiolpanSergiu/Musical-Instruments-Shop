import { User } from "../../types/commonTypes";

export default function checkSinginData(
  values: { email: string; password: string },
  users: User[]
) {
  return users.filter((user) => {
    return user.email === values.email;
  });
}
