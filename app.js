const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`";

const passwordField = document.querySelector(".input-box input");
const lengthSlider = document.querySelector('input[type="range"]');
const copyIcon = document.querySelector(".input-box .material-symbols-rounded");
const generateBtn = document.querySelector(".generate-btn");
const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const lengthDisplay = document.querySelector(".lengthcha span");
const strengthIndicator = document.querySelectorAll(".indicator span");

lengthSlider.addEventListener("input", () => {
  lengthDisplay.textContent = lengthSlider.value;
});
const generatePassword = () => {
  let charset = "";
  if (lowercaseCheckbox.checked) charset += lowercase;
  if (uppercaseCheckbox.checked) charset += uppercase;
  if (numbersCheckbox.checked) charset += numbers;
  if (symbolsCheckbox.checked) charset += symbols;

  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  passwordField.value = password;

  updateStrengthIndicator(password);
};

generateBtn.addEventListener("click", generatePassword);

copyIcon.addEventListener("click", () => {
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");
});
const updateStrengthIndicator = (password) => {
  let strength = 0;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  if (password.length >= 12) strength++;

  strengthIndicator.forEach((span, index) => {
    span.classList.remove("active");
    if (index < strength) {
      span.classList.add("active");
    }
  });
};
