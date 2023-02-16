import axios from "axios";

type User = {
  fullName: string;
  email: string;
  password: string;
  country: string;
  phoneNumber: string;
  _id: string;
};

export default function editUserData(user: User) {
  const postURL = `http://localhost:5174/api/users/${user._id}`;
  axios.patch(postURL, user);
}
