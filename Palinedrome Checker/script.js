const input = document.getElementById("input");

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const check = () => {
  const value = input.value.toLowerCase();
  const reverse = reverseString(value);

  if (value === reverse) {
    alert("P A L I N D R O M E");
  } else {
    alert("Not today!");
  }

  input.value = "";
};
