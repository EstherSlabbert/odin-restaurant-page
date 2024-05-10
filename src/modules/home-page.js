import "../index.css";

function homePage() {
  const content = document.getElementById("tab-content");
  const home = document.createElement("div");
  home.className = "home";

  // review
  const review = document.createElement("div");
  review.className = "review";

  const quote = document.createElement("div");
  quote.className = "quote";
  quote.textContent = '"Best food in town."';
  const reviewBy = document.createElement("div");
  reviewBy.className = "attribution";
  reviewBy.textContent = "- John Doe";

  review.appendChild(quote);
  review.appendChild(reviewBy);

  // open hours
  const openHours = document.createElement("div");
  openHours.className = "open-hours";

  const hoursHeading = document.createElement("h2");
  hoursHeading.className = "hours-heading";
  hoursHeading.textContent = "Open hours";

  const hours = document.createElement("div");
  hours.className = "hours";

  const daysAndHours = [
    { day: "Monday", hours: "7am to 11pm" },
    { day: "Tuesday", hours: "7am to 11pm" },
    { day: "Wednesday", hours: "7am to 11pm" },
    { day: "Thursday", hours: "7am to 11pm" },
    { day: "Friday", hours: "7am to 11pm" },
    { day: "Saturday", hours: "7am to 11pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  daysAndHours.forEach((dayAndHour) => {
    const dayElement = document.createElement("span");
    dayElement.className = "day";
    dayElement.textContent = dayAndHour.day;

    const hoursElement = document.createElement("span");
    hoursElement.className = "hours";
    hoursElement.textContent = dayAndHour.hours;

    const dayAndHoursContainer = document.createElement("div");
    dayAndHoursContainer.className = "day-and-hours-container";
    dayAndHoursContainer.appendChild(dayElement);
    dayAndHoursContainer.appendChild(hoursElement);

    hours.appendChild(dayAndHoursContainer);
  });

  openHours.appendChild(hoursHeading);
  openHours.appendChild(hours);

  // about
  const about = document.createElement("div");
  about.className = "about";
  const aboutHeading = document.createElement("h2");
  aboutHeading.className = "about-heading";
  aboutHeading.textContent = "About";
  const aboutText = document.createElement("p");
  aboutText.className = "about-text";
  aboutText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ullamcorper malesuada proin libero nunc consequat. Cursus euismod quis viverra nibh. 
    Elit eget gravida cum sociis. Eu scelerisque felis imperdiet proin fermentum leo. 
    Sapien et ligula ullamcorper malesuada proin libero. 
    Elit ut aliquam purus sit amet luctus venenatis lectus magna. 
    Et netus et malesuada fames ac. Vitae nunc sed velit dignissim sodales ut. 
    Turpis massa tincidunt dui ut ornare lectus sit. Est sit amet facilisis magna. 
    In nisl nisi scelerisque eu ultrices vitae auctor. Egestas dui id ornare arcu odio ut sem nulla pharetra. 
    Risus at ultrices mi tempus imperdiet nulla malesuada.Ullamcorper velit sed ullamcorper morbi. Tristique risus nec feugiat in. 
    Sit amet porttitor eget dolor morbi non arcu risus quis. Lacus vel facilisis volutpat est. Sagittis orci a scelerisque purus semper eget duis at tellus. 
    Sapien faucibus et molestie ac feugiat sed. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. 
    Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. 
    Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. 
    Ac auctor augue mauris augue neque gravida in fermentum et. Ipsum consequat nisl vel pretium lectus quam id leo in. 
    Ornare arcu odio ut sem nulla pharetra diam sit. Quis varius quam quisque id diam. Odio morbi quis commodo odio aenean sed adipiscing diam.`;

  about.appendChild(aboutHeading);
  about.appendChild(aboutText);

  home.appendChild(review);
  home.appendChild(openHours);
  home.appendChild(about);

  content.appendChild(home);
}

export { homePage };
