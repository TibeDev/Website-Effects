var cursors = [];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cursor").forEach((cursor) => {
    const duration = cursor.dataset.duration;
    cursors.push({ obj: cursor, duration: duration });
  });
});

var xPos;
var yPos;

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  xPos = clientX;
  yPos = clientY;

  for (let i = 0; i < cursors.length; i++) {
    AnimateCursor(cursors[i].obj, parseInt(cursors[i].duration));
  }
};
function AnimateCursor(cursor, duration) {
  cursor.style.transform = "translate(-50%, -50%)";
  cursor.animate(
    {
      left: `${xPos}px`,
      top: `${yPos}px`,
    },
    { duration: duration, fill: "forwards" },
  );
}
