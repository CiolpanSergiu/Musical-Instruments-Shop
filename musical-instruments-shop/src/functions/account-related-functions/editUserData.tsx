import axios from "axios";

type User = {
  fullName: string;
  email: string;
  password: string;
  country: string;
  phoneNumber: string;
  shoppingCart: [];
  _id: string;
};

export default function editUserData(user: User) {
  const url = `http://localhost:5174/api/users/${user._id}`;
  axios.patch(url, user);
}
