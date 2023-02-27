import axios from "axios";
import { User } from "../../types/commonTypes";

export default function editUserData(user: User) {
  const url = `http://localhost:5174/api/users/${user._id}`;
  axios.patch(url, user);
}
