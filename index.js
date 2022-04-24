let mouse = {
  x: 0,
  y: 0,
};
const boxes = document.getElementsByClassName("col");

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  for (let i = 0; i < boxes.length; i++) {
    const rect = boxes[i].getBoundingClientRect();
    const val = Math.sqrt(
      Math.pow(rect.x - mouse.x, 2) + Math.pow(rect.y - mouse.y, 2)
    );

    if (val < 100) {
      boxes[i].style.width = `calc(${boxes[i].style.width} + 5%)`;
    }

    if (val < 225) {
      boxes[i].style.transform = `rotateY(${((225 - val) / 200) * 80.5}deg)`;
    } else {
      boxes[i].style.transform = `rotateY(0deg)`;
    }

    console.log(val);
  }
});
