import axios from "axios";
import { usersURL } from "../../variables/urls";
import { User } from "../../types/commonTypes";

export default function deleteUserAccount(user: User) {
  const url = `${usersURL}/${user._id}`;
  axios.delete(url);
}
