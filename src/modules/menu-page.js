function menuPage() {
  const content = document.getElementById("tab-content");

  const menu = document.createElement("div");
  menu.className = "menu";
  menu.id = "menu";

  const menuSpacing = document.createElement("p");
  menuSpacing.textContent = ".";

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  menu.appendChild(menuSpacing);
  menu.appendChild(menuTitle);
  content.appendChild(menu);

  const menuItems = {
    menu: {
      breakfast: {
        title: "Breakfast",
        items: [
          {
            name: "Pancakes",
            description:
              "Buttermilk or blueberry pancakes served with maple syrup and a fruit selection.",
            price: "£10.00",
            image: "./assets/eiliv-aceron-exyTIrXyqm0-unsplash.jpg",
          },
          {
            name: "Omelette",
            description:
              "Made with various fillings like cheese, ham, peppers, onions, mushrooms, and tomatoes.",
            price: "£10.00",
            image: "./assets/restaurant-1762236_1280.jpg",
          },
        ],
      },
      "burgers-and-sandwiches": {
        title: "Burgers and Sandwiches",
        items: [
          {
            name: "Classic Cheese Burger",
            description:
              "A juicy beef patty topped with cheese, lettuce, tomato, onion, pickles, and mayo.",
            price: "£10.00",
            image: "./assets/osama-bgid-uOsGAtKos8g-unsplash.jpg",
          },
          {
            name: "BLT",
            description:
              "Bacon, lettuce, and tomato sandwich served on toasted bread with mayo.",
            price: "£10.00",
            image: "./assets/sandwich-696417_1280.jpg",
          },
          {
            name: "Grilled Cheese",
            description: "Melted cheese between slices of grilled bread.",
            price: "£10.00",
            image: "./assets/micheile-henderson-Q-AUYsdKdww-unsplash.jpg",
          },
        ],
      },
      sides: {
        title: "Sides",
        items: [
          {
            name: "Onion Rings",
            description:
              "Thick-cut onion rings battered and deep-fried until golden brown.",
            price: "£10.00",
            image: "./assets/pexels-iamabdullahsheik-9738991.jpg",
          },
          {
            name: "Fries",
            description: "Classic crispy French fries.",
            price: "£10.00",
            image: "./assets/emmy-smith-LEjEst7lLfU-unsplash.jpg",
          },
        ],
      },
      desserts: {
        title: "Desserts",
        items: [
          {
            name: "Chocolate Cake",
            description: "Rich chocolate cake served with chocolate frosting.",
            price: "£10.00",
            image: "./assets/pesce-huang-6TTy4uKh0ck-unsplash.jpg",
          },
          {
            name: "Apple Pie Cake",
            description:
              "Classic apple pie cake served warm with a scoop of vanilla ice cream.",
            price: "£10.00",
            image: "./assets/apple-pie-3594534_1280.jpg",
          },
        ],
      },
      drinks: {
        title: "Drinks",
        items: [
          {
            name: "Coffee",
            description:
              "A smooth and aromatic blend of freshly ground coffee beans.",
            price: "£10.00",
            image: "./assets/devin-avery-5iRgh_G0eRY-unsplash.jpg",
          },
          {
            name: "Hot chocolate",
            description:
              "A comforting blend of rich cocoa powder and steamed milk.",
            price: "£10.00",
            image: "./assets/zoe-gXtvTOs4tzg-unsplash.jpg",
          },
          {
            name: "Milkshakes",
            description:
              "Vanilla, chocolate, or strawberry milkshakes topped with whipped cream.",
            price: "£10.00",
            image: "./assets/oscar-nord-VnsBx4onRxQ-unsplash.jpg",
          },
          {
            name: "Soda",
            description: "Coke, Sprite, or Fanta.",
            price: "£10.00",
            image: "./assets/qasim-malick-PZsso_IiYRE-unsplash.jpg",
          },
        ],
      },
    },
  };

  function createMenuItem(item) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.name;

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    const itemName = document.createElement("h4");
    itemName.classList.add("item-name");
    itemName.textContent = item.name;
    itemInfo.appendChild(itemName);

    const itemPrice = document.createElement("h4");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = item.price;
    itemInfo.appendChild(itemPrice);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = item.description;
    itemInfo.appendChild(itemDescription);

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemInfo);

    return menuItem;
  }

  function displayMenu(menuData) {
    const menu = document.getElementById("menu");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menu.appendChild(menuContainer);

    for (let category in menuData.menu) {
      const categoryData = menuData.menu[category];

      // Create dropdown using details and summary elements
      const categoryDropdown = document.createElement("details");
      const categoryTitle = document.createElement("summary");
      categoryTitle.textContent = categoryData.title;
      categoryDropdown.appendChild(categoryTitle);

      const categoryItems = document.createElement("div");
      categoryItems.classList.add("category-items");

      categoryData.items.forEach((item) => {
        const menuItem = createMenuItem(item);
        categoryItems.appendChild(menuItem);
      });

      categoryDropdown.appendChild(categoryItems);
      menuContainer.appendChild(categoryDropdown);

      categoryDropdown.addEventListener("toggle", (event) => {
        const menuAfterword = document.querySelector(".menu-afterword");
        if (event.target.open) {
          // Dropdown is open
          menuAfterword.classList.add("hidden");
        } else {
          // Dropdown is closed
          menuAfterword.classList.remove("hidden");
        }
      });
    }

    const menuAfterword = document.createElement("div");
    menuAfterword.classList.add("menu-afterword");
    menuAfterword.textContent =
      "All menu items are available during open hours.";
    menuContainer.appendChild(menuAfterword);
  }

  displayMenu(menuItems);
}

export { menuPage };
