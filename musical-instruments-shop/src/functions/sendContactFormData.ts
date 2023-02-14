export default function sendContactFormData(formData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  additionalInfo: string;
}) {
  const postURL = "http://localhost:5174/api/userMsg";
  fetch(postURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      additionalInfo: formData.additionalInfo,
    }),
  });
}
