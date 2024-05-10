function contactPage() {
  const content = document.getElementById("tab-content");

  const contact = document.createElement("div");
  contact.className = "contact";

  const contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";
  contact.appendChild(contactTitle);

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  const howAndWhere = [
    {
      how: "Address: ",
      where: `999 Eatery Lane,\n Diner Hill,\n Somewhere,\n AB12 CD34`,
    },
    { how: "Email: ", where: "support@dinerandcorner.com" },
    { how: "Phone: ", where: "+44 7589 1234 5678" },
  ];

  howAndWhere.forEach((howAndWhere) => {
    const howElement = document.createElement("span");
    howElement.className = "how";
    howElement.textContent = howAndWhere.how;

    const whereElement = document.createElement("span");
    whereElement.className = "where";
    whereElement.textContent = howAndWhere.where;

    const howAndWhereContainer = document.createElement("div");
    howAndWhereContainer.className = "how-and-where";
    howAndWhereContainer.appendChild(howElement);
    howAndWhereContainer.appendChild(whereElement);

    contactInfo.appendChild(howAndWhereContainer);
  });
  contact.appendChild(contactInfo);

  content.appendChild(contact);
}

export { contactPage };
