import { User } from "../../types/commonTypes";

export default function SaveCurrentUser(currentUser: User) {
  localStorage.setItem("isLogged", "true");
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}
