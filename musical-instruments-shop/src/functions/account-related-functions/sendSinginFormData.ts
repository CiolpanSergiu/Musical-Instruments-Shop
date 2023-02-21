export default function sendSinginFormData(formData: {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  country: string;
  phoneNumber: string;
}): void {
  const postURL = "http://localhost:5174/api/users";
  fetch(postURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      country: formData.country,
      phoneNumber: formData.phoneNumber,
    }),
  });
}
