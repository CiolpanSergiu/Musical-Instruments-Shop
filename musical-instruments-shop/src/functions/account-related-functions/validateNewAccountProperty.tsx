export default function validateNewAccountProperty(
  newValue: string,
  toEdit: string
) {
  if (toEdit === "email") {
    return {
      isValid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newValue),
      errorMsg: "Invalid email address",
    };
  } else if (toEdit === "password") {
    return {
      isValid: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(newValue),
      errorMsg: "Invalid password",
    };
  } else if (toEdit === "phoneNumber") {
    return {
      isValid: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(
        newValue
      ),
      errorMsg: "Invalid phone number",
    };
  } else if (toEdit === "country") {
    return {
      isValid: /\w/.test(newValue),
      errorMsg: "Not a country",
    };
  }
}
