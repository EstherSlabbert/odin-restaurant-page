import pageLoad from "./modules/initial-page-load";
import { homePage } from "./modules/home-page";
import { contactPage } from "./modules/contact-page";
import { menuPage } from "./modules/menu-page";

init();

function addNavEvents() {
  const tabContentDiv = document.getElementById("tab-content");
  const homeBtn = document.getElementById("homeBtn");
  const menuBtn = document.getElementById("menuBtn");
  const contactBtn = document.getElementById("contactBtn");

  homeBtn.addEventListener("click", () => {
    tabContentDiv.innerHTML = "";
    homePage();
  });
  menuBtn.addEventListener("click", () => {
    tabContentDiv.innerHTML = "";
    menuPage();
  });
  contactBtn.addEventListener("click", () => {
    tabContentDiv.innerHTML = "";
    contactPage();
  });
}

function init() {
  pageLoad();
  homePage();
  addNavEvents();
}
