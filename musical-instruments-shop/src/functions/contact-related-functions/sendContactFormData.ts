import axios from "axios";
import { usersMsgsURL } from "../../variables/urls";

export default function sendContactFormData(formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  additionalInfo: string;
}) {
  axios.post(usersMsgsURL, formData);
}
