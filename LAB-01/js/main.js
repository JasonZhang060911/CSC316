const title = document.getElementById("main-title");
const button = document.getElementById("change-btn");

button.addEventListener("click", function () {
    title.innerText = "Button was clicked!";
});

const select = document.getElementById("color-select");

select.addEventListener("change", function () {
    console.log(select.value);
    title.style.color = this.value;
});