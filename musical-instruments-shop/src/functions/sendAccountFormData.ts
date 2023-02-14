export default function sendAccountFormData(formData: {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}) {
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
      passwordConfirmation: formData.passwordConfirmation,
    }),
  });
}
