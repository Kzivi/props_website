var navbarLogo = document.getElementById("navbarLogo");
var homeLogo = document.getElementById("homeLogo");
var sections = document.querySelectorAll(".section");
var navbarMenu = document.getElementById("navbarMenu");
var menuButton = document.getElementById("menuButton");

function showSection(sectionId) {
  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  var sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add("active");

  if (sectionId !== "home") {
    navbarLogo.style.display = "block";
    homeLogo.style.display = "block";
  } else {
    navbarLogo.style.display = "none";
    homeLogo.style.display = "block";
  }

  navbarMenu.classList.remove("open");
}

function toggleNavMenu() {
  navbarMenu.classList.toggle("open");
}

menuButton.addEventListener("click", toggleNavMenu);

function changeLanguage(lang) {
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const servicesSection = document.getElementById("services");
  const portfolioSection = document.getElementById("portfolio");
  const contactSection = document.getElementById("contact");

  switch (lang) {
    case "pl":
      homeSection.querySelector("h1").innerHTML = "Witaj w Props Workshop";
      aboutSection.querySelector("h2").innerHTML = "O nas";
      servicesSection.querySelector("h2").innerHTML = "Usługi";
      portfolioSection.querySelector("h2").innerHTML = "Portfolio";
      contactSection.querySelector("h2").innerHTML = "Kontakt";
      break;
    case "en":
      homeSection.querySelector("h1").innerHTML = "Welcome to Props Workshop";
      aboutSection.querySelector("h2").innerHTML = "About Us";
      servicesSection.querySelector("h2").innerHTML = "Services";
      portfolioSection.querySelector("h2").innerHTML = "Portfolio";
      contactSection.querySelector("h2").innerHTML = "Contact";
      break;
    default:
      break;
  }

  navbarMenu.classList.remove("open");
}

function hideNavMenuOnResize() {
  if (window.innerWidth >= 768) {
    navbarMenu.classList.remove("open");
    menuButton.style.display = "none";
  } else {
    menuButton.style.display = "block";
  }
}

window.addEventListener("resize", hideNavMenuOnResize);

// Sprawdź szerokość ekranu przy ładowaniu
hideNavMenuOnResize();
