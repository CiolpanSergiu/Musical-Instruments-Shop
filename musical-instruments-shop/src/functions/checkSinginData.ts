type User = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  country: string;
  phoneNumber: string;
};

export default function checkSinginData(
  values: { email: string; password: string },
  users: User[]
) {
  return users.filter((user) => {
    return user.email === values.email;
  });
}
