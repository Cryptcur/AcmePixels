const colors = ["00", "33", "66", "99", "CC", "FF"];

const palette = document.querySelector(".palette");
const form = document.querySelector(".form");
console.log(palette);

colors.map(color => {
  let colorBoxes = document.createElement("div");
  colorBoxes.classList.add('colorboxes')

    

  palette.append(colorBoxes);
});
