function random(n) {
  return Math.floor(Math.random() * n);
}

function updateContainer(squarePerSide) {
  const container = document.querySelector(".container");

  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  let squareLength = 500 / squarePerSide + "px";

  for (i = 0; i < squarePerSide ** 2; i++) {
    const el = document.createElement("div");
    el.className = "square";
    el.style.width = squareLength;
    el.style.height = squareLength;
    el.onmouseover = () => {
      el.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    };

    fragment.append(el);
  }

  container.append(fragment);
}

console.log(random(255));

updateContainer(10);

document.querySelector("button").onclick = () => {
  updateContainer(prompt("Pick the squares per side"));
};
