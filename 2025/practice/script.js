const colours = [
  "#DC143C", // Crimson
  "#40E0D0", // Turquoise
  "#FFD700", // Gold
  "#6A5ACD", // SlateBlue
  "#228B22", // ForestGreen
  "#FF7F50", // Coral
  "#FF1493", // DeepPink
  "#191970", // MidnightBlue
  "#FF6347", // Tomato
  "#FF8C00", // DarkOrange
  "#8A2BE2", // BlueViolet
  "#00CED1", // DarkTurquoise
  "#ADFF2F", // GreenYellow
  "#FF4500", // OrangeRed
  "#9370DB", // MediumPurple
  "#00FA9A", // MediumSpringGreen
  "#FF69B4", // HotPink
  "#20B2AA", // LightSeaGreen
  "#87CEEB", // SkyBlue
  "#B22222", // FireBrick
];

const colorChangeDiv = document.getElementById("clrOnHover");
const colorChangeBtn = document.getElementById("clrOnClick");

colorChangeDiv.addEventListener("mouseover", () => {
  const randomClr = colours[Math.floor(Math.random() * colours.length)];

  colorChangeDiv.style.backgroundColor = randomClr;
});

colorChangeBtn.addEventListener("click", () => {
  const randomClr = colours[Math.floor(Math.random() * colours.length)];
  const body = document.body;

  body.style.backgroundColor = randomClr;
});
