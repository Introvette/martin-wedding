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
      name: "Bri",
      photo: "../assets/photos/place-holder2.png",
      description: "Bridesmaid",
    },
    {
      name: "Nia",
      photo: "../assets/photos/nia.jpeg",
      description: "Bridesmaid",
    },

    {
      name: "Taylor",
      photo: "../assets/photos/place-holder2.png",
      description: "Bridesmaid",
    },
    {
      name: "Ashley",
      photo: "../assets/photos/place-holder2.png",
      description: "Bridesmaid",
    },
    {
      name: "Aerial",
      photo: "../assets/photos/place-holder2.png",
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
      hideDistance: false,
    },
    {
      name: "Comfort Inn & Suites Lenoir",
      photo: "../assets/photos/comfortlenoir.png",
      website:
        "https://www.choicehotels.com/north-carolina/lenoir/comfort-inn-hotels/nc291?mc=llgoxxpx",
      distance: "16 miles",
      rating: "4.5 Stars",
      hideDistance: false,
    },
    {
      name: "Hampton Inn Morganton",
      photo: "../assets/photos/hamptonmorganton.png",
      website:
        "https://www.hilton.com/en/hotels/mrnnchx-hampton-morganton/?SEO_id=GMB-AMER-HX-MRNNCHX&y_source=1_MjA4MjA2NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      distance: "21 Miles",
      rating: "4.5 Stars",
      hideDistance: false,
    },
    {
      name: "Airbnb in Lenoir",
      photo: "../assets/photos/airbnb.png",
      website:
        "https://www.airbnb.com/s/Lenoir--NC/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJB3om2mrfUIgRubk9usfwA5o&checkin=2025-06-26&checkout=2025-06-29&adults=2&query=Lenoir%2C%20NC&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-03-01&monthly_length=3&monthly_end_date=2025-06-01&search_mode=regular_search&price_filter_input_type=0&price_filter_num_nights=3&channel=EXPLORE&source=structured_search_input_header&search_type=filter_change",
      distance: "",
      rating: "",
      hideDistance: true,
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

      const websiteLink = document.createElement("a");
      websiteLink.href = `${hotel.website}`;
      websiteLink.target = "_blank";
      websiteLink.textContent = "Website";

      const distance = document.createElement("p");
      distance.textContent = "Distance from venue: " + `${hotel.distance}`;
      if (hotel.hideDistance) {
        distance.style.display = "none";
      }

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
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
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
