const body = document.body;

const setColor = (color) => {
  body.style.backgroundColor = color;

}

const setRandom = () => {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;

  const randomButtonColor = document.getElementById(`random`);
  randomButtonColor.style.backgroundColor = color;
}