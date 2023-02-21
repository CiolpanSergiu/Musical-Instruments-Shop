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

export default function SaveCurrentUser(currentUser: User) {
  localStorage.setItem("isLogged", "true");
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}
