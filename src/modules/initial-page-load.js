import "../index.css";

function setUpHeader() {
  const header = document.getElementById("header");

  const logoNameContainer = document.createElement("div");
  logoNameContainer.classList.add("logo-name-container");

  const logo = document.createElement("img");
  logo.src = "./assets/icons8-restaurant-96.png";
  logo.height = 65;

  logoNameContainer.appendChild(logo);

  header.insertBefore(logoNameContainer, document.getElementById("nav"));

  return header;
}

function setUpNav() {
  const nav = document.getElementById("nav");

  const homeBtn = document.createElement("button");
  homeBtn.id = "homeBtn";
  homeBtn.innerHTML = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.id = "menuBtn";
  menuBtn.innerHTML = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.id = "contactBtn";
  contactBtn.innerHTML = "Contact";

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  homeBtn.classList.add("active");

  [homeBtn, menuBtn, contactBtn].forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      [homeBtn, menuBtn, contactBtn].forEach((button) => {
        button.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });

  return nav;
}

function createMain(id) {
  const main = document.createElement("main");
  main.id = id;
  return main;
}

function createFooter(text) {
  const footer = document.createElement("footer");
  footer.innerHTML = `<p>${text}</p>`;
  return footer;
}

function pageLoad() {
  const content = document.getElementById("content");

  setUpHeader();

  setUpNav("nav");

  const tabContent = createMain("tab-content");
  content.appendChild(tabContent);

  const footer = createFooter(
    "Built by EstherSlabbert | See README for resource acknowledgements"
  );
  content.appendChild(footer);
}

export default pageLoad;
