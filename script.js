// Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("June 28, 2025 17:30:00").getTime();

// Update the countdown every 1 minute
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
    days + " days " + hours + " hrs " + minutes + " min ";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  // mobile nav menu
  const menuIcon = document.querySelector(".menu-icon");
  const homeLinks = document.querySelector(".homepage-nav");

  menuIcon.addEventListener("click", function () {
    console.log("Menu icon clicked");
    homeLinks.classList.toggle("show");
  });

  // footer
  const currentYearSpan = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  // mobile nav menu
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

// wedding party cards
document.addEventListener("DOMContentLoaded", function () {
  const bridesmaidsData = [
    {
      name: "Amorita",
      photo: "../assets/photos/amorita.jpeg",
      description: "Maid of Honor",
    },
    {
      name: "Jurysia",
      photo: "../assets/photos/rysia.jpg",
      description: "Bridesmaid",
    },
    {
      name: "Mariah",
      photo: "../assets/photos/place-holder2.png",
      description: "Bridesmaid",
    },
    {
      name: "Nia",
      photo: "../assets/photos/nia.jpeg",
      description: "Bridesmaid",
    },
    {
      name: "Aerial",
      photo: "../assets/photos/place-holder2.png",
      description: "Bridesmaid",
    },
    {
      name: "Bri",
      photo: "../assets/photos/place-holder2.png",
      description: "Bridesmaid",
    },
    {
      name: "Celeste",
      photo: "../assets/photos/celeste.jpeg",
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
      photo: "../assets/photos/place-holder2.png",
      description: "Best Man",
    },
    {
      name: "Alex",
      photo: "../assets/photos/place-holder2.png",
      description: "Groomsman",
    },
    {
      name: "Brian",
      photo: "../assets/photos/place-holder2.png",
      description: "Groomsman",
    },
    {
      name: "King",
      photo: "../assets/photos/king.jpeg",
      description: "Groomsman",
    },
    {
      name: "Jay",
      photo: "../assets/photos/jay.jpeg",
      description: "Groomsman",
    },
    {
      name: "Blaine",
      photo: "../assets/photos/place-holder2.png",
      description: "Groomsman",
    },
    {
      name: "CJ",
      photo: "../assets/photos/place-holder2.png",
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
      name: "Hampton Inn & Suites Lenoir",
      photo: "../assets/photos/hamptonlenoir.png",
      website:
        "https://www.hilton.com/en/hotels/cltlrhx-hampton-suites-lenoir/",
      distance: "16 miles",
      rating: "4.5 Stars",
    },
    {
      name: "Comfort Inn & Suites Lenoir",
      photo: "../assets/photos/comfortlenoir.png",
      website: "https://hotel.com",
      distance: "16 miles",
      rating: "4.5 Stars",
    },
    {
      name: "Red Roof Inn Lenoir",
      photo: "../assets/photos/redrooflenoir.png",
      website: "https://hotel.com",
      distance: "15 miles",
      rating: "3.5 Stars",
    },
    {
      name: "Hampton Inn Morganton",
      photo: "../assets/photos/hamptonmorganton.png",
      website: "https://hotel.com",
      distance: "21 Miles",
      rating: "4.5 Stars",
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
      image.alt = `${hotel.name}`;

      const websiteLink = document.createElement("button");
      websiteLink.href = hotel.website;
      websiteLink.target = "_blank";
      websiteLink.textContent = "Website";

      const distance = document.createElement("p");
      distance.textContent = "Distance from venue: " + `${hotel.distance}`;

      const rating = document.createElement("i");
      rating.textContent = hotel.rating;

      card.appendChild(name);
      card.appendChild(image);
      card.appendChild(websiteLink);
      card.appendChild(distance);
      card.appendChild(rating);

      container.appendChild(card);
    });
  }
});

// slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}