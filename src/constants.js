export const FIRST_NAME = "First Name:";
export const LAST_NAME = "Last Name:";
export const CHAR_REGX = /^[a-zA-Z]+$/;
export const PHONE_REGX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
export const EMAIL_REGX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PASSWORD_REGX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const FIRST_HEAD = "Personal Information";
export const SECOND_HEAD = "Account Information";
export const THIRD_HEAD = "Contact Information";
export const EMAIL_NAME = "Email:";
export const RE_EMAIL_NAME = "Re-type Email:";
export const PASSWORD_NAME = "Password";
export const RE_PASSWORD_NAME = "Re-type Password";
export const OBJECT_ELEMENT = {
  fname: "",
  lname: "",
  dob: {
    month: "",
    day: "",
    year: "",
  },
  gender: "",
  email: "",
  password: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  phone: "",
  phonetype: "",
};
export const ADDRESS = "Address:";
export const CITY = "city:";
export const STATE = "State:";
export const PHONE = "Phone:";
export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const STATE_NAMES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
export const DAY = Array.from({ length: 31 }, (_, i) => i + 1);
export const YEAR = Array.from({ length: 100 }, (_, i) => 2023 - i);
