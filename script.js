const colors = ["#ff8166", "#66ff81", "#6681ff", "#ff66b9"];

const timeDivs = document.querySelectorAll(".time-div");

timeDivs.forEach((div, index) => {
  div.style.backgroundColor = colors[index % colors.length];
});
