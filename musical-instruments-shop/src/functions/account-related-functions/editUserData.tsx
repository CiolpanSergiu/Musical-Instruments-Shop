import axios from "axios";
import { User } from "../../types/commonTypes";
import { usersURL } from "../../variables/urls";

export default function editUserData(user: User, toEdit?: string) {
  const url = `${usersURL}/${user._id}`;
  return axios.patch(url, { user, toEdit });
}
