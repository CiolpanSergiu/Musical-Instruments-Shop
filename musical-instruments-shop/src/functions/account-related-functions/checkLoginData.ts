type User = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  country: string;
  phoneNumber: string;
  shoppingCart: [];
  _id: string;
};

export default function checkLoginData(
  values: { email: string; password: string },
  users: User[]
): User[] {
  return users.filter((user) => {
    return user.email === values.email && user.password === values.password;
  });
}
