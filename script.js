// Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("June 28, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var distance = countDownDate - now;

  // Calculate days, hours, and minutes (removed seconds)
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Display the countdown without seconds
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m ";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  // mobile nav menu
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // footer
  const currentYearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;
});

// wedding party cards
document.addEventListener("DOMContentLoaded", function () {
  const bridesmaidsData = [
    {
      name: "Amorita",
      photo: "./assets/photos/amorita.jpeg",
      description: "Maid of Honor",
    },
    {
      name: "Jurysia",
      photo: "./assets/photos/rysia.jpg",
      description: "Bridesmaid",
    },
    {
      name: "Celeste",
      photo: "./assets/photos/celeste.jpeg",
      description: "Bridesmaid",
    },
    {
      name: "Nia",
      photo: "./assets/photos/nia.jpeg",
      description: "Bridesmaid",
    },
    {
      name: "Bridesmaid",
      photo: "./assets/photos/place-holder.png",
      description: "Bridesmaid",
    },
  ];

  const partyGirlsDiv = document.querySelector(".party-girls");

  const bridesmaidsContainer = createCardContainer();
  partyGirlsDiv.appendChild(bridesmaidsContainer);

  generateCards(bridesmaidsData, bridesmaidsContainer);

  const groomsmenData = [
    {
      name: "Drake",
      photo: "./assets/photos/place-holder2.png",
      description: "Best Man",
    },
    {
      name: "Alex",
      photo: "./assets/photos/alex.jpeg",
      description: "Groomsman",
    },
    {
      name: "King",
      photo: "./assets/photos/king.jpeg",
      description: "Groomsman",
    },
    {
      name: "Jay",
      photo: "./assets/photos/jay.jpeg",
      description: "Groomsman",
    },
    {
      name: "Groomsman #4",
      photo: "./assets/photos/place-holder.png",
      description: "Groomsman",
    },
  ];

  const partyBoysDiv = document.querySelector(".party-boys");

  const groomsmenContainer = createCardContainer();
  partyBoysDiv.appendChild(groomsmenContainer);

  generateCards(groomsmenData, groomsmenContainer);

  function createCardContainer() {
    const container = document.createElement("div");
    container.classList.add("card-container");
    return container;
  }

  function generateCards(data, container) {
    data.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.src = member.photo;
      image.alt = member.name;

      const name = document.createElement("h3");
      name.textContent = member.name;

      const description = document.createElement("p");
      description.textContent = member.description;

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(description);

      container.appendChild(card);
    });
  }
});

// hotel cards
document.addEventListener("DOMContentLoaded", function () {
  const hotelData = [
    {
      name: "Hotel 1",
      photo: "hotel.jpg",
      website: "https://hotel.com",
    },
    {
      name: "Hotel 2",
      photo: "hotel.jpg",
      website: "https://hotel.com",
    },
    {
      name: "Hotel 3",
      photo: "hotel.jpg",
      website: "https://hotel.com",
    },
  ];

  const hotelContainer = document.getElementById("hotel-container");

  generateHotelCards(hotelData, hotelContainer);

  function generateHotelCards(data, container) {
    data.forEach((hotel) => {
      const card = document.createElement("div");
      card.classList.add("hotel-card");

      const name = document.createElement("h2");
      name.textContent = hotel.name;

      const image = document.createElement("img");
      image.src = hotel.photo;
      image.alt = `${hotel.name} Photo`;

      const websiteHeader = document.createElement("h3");
      websiteHeader.textContent = "Website";

      const websiteLink = document.createElement("a");
      websiteLink.href = hotel.website;
      websiteLink.target = "_blank";
      websiteLink.textContent = `${hotel.name} Website`;

      card.appendChild(name);
      card.appendChild(image);
      card.appendChild(websiteHeader);
      card.appendChild(websiteLink);

      container.appendChild(card);
    });
  }
});
