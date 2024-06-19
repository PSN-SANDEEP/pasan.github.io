const cv = document.getElementById("cv");
const menu = document.getElementById("menu");
const menubtn = document.getElementById("menubtn");


menubtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");

   
} else {
    menu.classList.add("hidden");
   
}
});