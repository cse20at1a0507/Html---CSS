const range = document.querySelector("#range");
const title = document.querySelector("#title");

range.addEventListener("input", () => {
  document.body.style.setProperty("--bg-pos-x", range.value);
});

updateBgSize();

function updateBgSize() {
  const titleRect = title.getBoundingClientRect();

  document.body.style.setProperty("--text-w", `${titleRect.width}px`);
}

window.addEventListener("resize", updateBgSize);