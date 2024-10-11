const input = document.getElementById("input");

const check = () => {
  const value = input.value;

  const arrayOfLetters = value.toLowerCase().split("");
  const reversedArrayOfLetters = arrayOfLetters.reverse();
  const reversedValue = reversedArrayOfLetters.join("");

  if (value === reversedValue) {
    alert(`P A L I N D R O M E`);
  } else {
    alert(`Not today`);
  }

  input.value = "";
};
