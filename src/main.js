const inputRangeSizeX = document.getElementById("range-size-x");
const inputRangeSizeY = document.getElementById("range-size-y");
const inputRangeIntensity = document.getElementById("range-intensity");
const inputRangeBlur = document.getElementById("range-blur");

inputRangeSizeX.addEventListener("change", () => changeRangeSizeX(event));

inputRangeSizeY.addEventListener("change", () => changeRangeSizeY(event));

inputRangeIntensity.addEventListener("change", () =>
  changeRangeIntensity(event)
);

inputRangeBlur.addEventListener("change", () => changeRangeBlur(event));

const exempleShadow = [
  {
    opacity: inputRangeIntensity.value,
    offestX: inputRangeSizeX.value,
    offestY: inputRangeSizeY.value,
    blur: inputRangeBlur.value,
  },
];

let shadow = exempleShadow;

const exempleElement = document.getElementById("exemple");

function changeRangeSizeX(event) {
  const newOffestX = (shadow.offestX = event.target.value);
  exempleElement.style.boxShadow = `${newOffestX}px ${shadow.offestY}px ${shadow.blur}px rgba(0, 0, 0, 0.${shadow.opacity})`;
  refreshCode(shadow);
}

function changeRangeSizeY(event) {
  const newOffestY = (shadow.offestY = event.target.value);
  exempleElement.style.boxShadow = `${shadow.offestX}px ${newOffestY}px ${shadow.blur}px rgba(0, 0, 0, 0.${shadow.opacity})`;
  refreshCode(shadow);
}

function changeRangeIntensity(event) {
  const newIntensity = (shadow.opacity = event.target.value);
  exempleElement.style.boxShadow = `${shadow.offestX}px ${shadow.offestY}px ${shadow.blur}px rgba(0, 0, 0, 0.${newIntensity})`;
  refreshCode(shadow);
}

function changeRangeBlur(event) {
  const newBlur = (shadow.blur = event.target.value);
  exempleElement.style.boxShadow = `${shadow.offestX}px ${shadow.offestY}px ${newBlur}px rgba(0, 0, 0, 0.${shadow.opacity})`;
  refreshCode(shadow);
}

function refreshCode(shadow) {
  exempleElement.textContent = `box-shadow: ${shadow.offestX || 0}px ${
    shadow.offestY || 0
  }px ${shadow.blur || 0}px rgba(0, 0, 0, 0.${shadow.opacity || 0});`;
}
