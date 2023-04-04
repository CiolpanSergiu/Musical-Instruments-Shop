import axios from "axios";
import { usersURL } from "../../variables/urls";

export default function sendSinginFormData(formData: {
  fullName: string;
  email: string;
  password: string;
  country: string;
  phoneNumber: string;
}): void {
  axios.post(usersURL, formData);
}
