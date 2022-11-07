const inputs = document.querySelectorAll('input[type="radio"]');
const prices = document.querySelectorAll("p.price");

const disableColor = () => {
    prices.forEach((a) => a.style.color = "black");
}

inputs.forEach((a, index) => {
  a.onchange = () => {
    disableColor();
    document.querySelector(`.pric${a.attributes.id.value}`).style.color = "#FE9013";
    document.querySelector(`.price3`).classList.remove = "active";
}
});
