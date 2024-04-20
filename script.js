const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPRSTUWXYZ";
const lowerCase = "abcdefghijklmnoprstuwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,./<>?";
const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
