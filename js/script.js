let topHeader = document.querySelector(".topHeader");
let flowHeader = document.querySelector(".flowHeader");
let xBtn = document.querySelector(".bx-x");
let headerNav = document.querySelector(".headerNav");
let logoHeader = document.querySelector(".logoHeader");
let showTopHeader = true;
// Search input //////////////////////////////////////////////////////
let searchIcon = document.querySelector(".bx-search");
searchIcon.addEventListener("click", () => {
  let inputField = document.querySelector(".rightNavInput");

  if (!inputField) {
    inputField = document.createElement("input");
    inputField.classList.add("rightNavInput");
    inputField.setAttribute("placeholder", "Search In Ford Content...");
    document.querySelector(".rightNav").appendChild(inputField);
    searchIcon.classList.add("bx-x");
    searchIcon.classList.remove("bx-search");
  } else {
    inputField.remove();
    searchIcon.classList.add("bx-search");
    searchIcon.classList.remove("bx-x");
  }
});
// ADD EVENTS /////////////////////////////////////////////////
topHeader.addEventListener("click", () => {
  flowHeader.classList.remove("hideBlock");
  flowHeader.classList.add("showBlock");
  showTopHeader = false;
});
xBtn.addEventListener("click", () => {
  flowHeader.classList.remove("showBlock");
  flowHeader.classList.add("hideBlock");
  showTopHeader = true;
});

// FUNCTIONS //////////////////////////////////////////////////
function removeClass() {
  productTitles.forEach((element) => {
    element.classList.remove("listActive");
  });
}
//progress bar
const progress = document.querySelector(".progressBar");
window.addEventListener("scroll", () => {
  const winScroll = window.pageYOffset;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (winScroll / height) * 100;
  progress.style.width = `${scrolled}%`;
});
// loader ford
let loaderImg = document.createElement("div");
loaderImg.classList.add("loaderImg");
document.body.appendChild(loaderImg);
let loaderImgSrc = document.createElement("img");
loaderImgSrc.classList.add("loaderImgSrc");
loaderImgSrc.src = "../assets/images/loader.svg";
loaderImg.appendChild(loaderImgSrc);
window.addEventListener("load", () => {
  loaderImg.classList.add("loaderImgRemove");
});
// change header when scroll
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".headerNav").addClass("changeColor");
      $(".navLinks").addClass("navChangeColor");
      $(".logoHeader").attr("src", "../assets/images/Ford-logo-blue.svg");
      $(".line").css("stroke", "var(--darkBlue)");
    } else {
      $(".headerNav").removeClass("changeColor");
      $(".navLinks").removeClass("navChangeColor");
      $(".logoHeader").attr("src", "../assets/images/Ford-logo-white.svg");
      $(".line").css("stroke", "var(--white)");
    }
  });
});
// change head logo color on hover
function hover(element) {
  element.setAttribute("src", "../assets/images/Ford-logo-blue.svg");
}
function unhover(element) {
  element.setAttribute("src", "../assets/images/Ford-logo-white.svg");
}
headerNav.addEventListener("mouseover", () => {
  hover(logoHeader);
  $(".line").css("stroke", "var(--darkBlue)");
});
headerNav.addEventListener("mouseout", () => {
  unhover(logoHeader);
  $(".line").css("stroke", "var(--white)");
});
// BURGERMENU ///////////////////////////////////////////////////////////////////
let burgermenu = document.querySelector(".burgermenuLinks");
let burgermenuLinks = document.querySelectorAll(".burgermenuLinks li");
let innerBurgerMenuLinks = document.querySelectorAll(".burgermenuLinks li ul");
function removeBurgerOpenLinks() {
  burgermenuLinks.forEach((element) => {
    element.lastElementChild.style.display = "none";
    element.firstElementChild.classList.add("fa-plus");
    element.firstElementChild.classList.remove("fa-minus");
  });
}
$(".burgermenu").click(function () {
  if (burgermenu.style.display != "flex") {
    burgermenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
  } else {
    burgermenu.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
});
burgermenuLinks.forEach((element) => {
  element.addEventListener("click", () => {
    removeBurgerOpenLinks();

    if (element.lastElementChild.style.display != "flex") {
      element.firstElementChild.classList.remove("fa-plus");
      element.firstElementChild.classList.add("fa-minus");
      element.lastElementChild.style.display = "flex";
    } else if (element.lastElementChild.style.display == "flex") {
      element.firstElementChild.classList.remove("fa-minus");
      element.firstElementChild.classList.add("fa-plus");
      element.lastElementChild.style.display = "none";
    }
  });
});
// MODAL ///////////////////////////////////////////////////////////////////
setTimeout(() => {
  let modalBase = document.createElement("div");
  let modalMessege = document.createElement("div");
  let modalHead = document.createElement("h4");
  let modalParaph = document.createElement("p");
  let modalButton = document.createElement("a");
  let modalClose = document.createElement("i");
  document.body.appendChild(modalBase);
  document.body.style.overflowY = "hidden";
  modalBase.appendChild(modalMessege);
  modalMessege.appendChild(modalHead);
  modalMessege.appendChild(modalParaph);
  modalMessege.appendChild(modalButton);
  modalMessege.appendChild(modalClose);
  modalBase.classList.add("modalBase");
  modalMessege.classList.add("modalMessege");
  modalClose.classList.add("fa-solid", "fa-circle-x", "modalClose");
  modalHead.innerText = "Our Big Offer To Customers";
  modalParaph.innerText =
    "Ford is offering six months of payment relief for eligible new-car customers who finance their purchases through Ford Credit. Ford will pay for three months, and customers can defer for up to three more months, totaling six months.";
  modalButton.innerText = "Learn More";
  modalClose.addEventListener("click", () => {
    modalBase.remove();
    document.body.style.overflowY = "scroll";
  });
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
    modalBase.remove();
  }, 5000);
}, 10000);
// MAIN BACKGROUND CHANGE //////////////////////////////////////////////////
let countGif = 0;
let backgroundDivGif = [
  "url(../assets/images/mainCar2.gif)",
  "url(../assets/images/mainCar.gif)",
];
if (
  document.getElementById("backgroundDiv").style.backgroundImage !=
  backgroundDivGif[0]
) {
  document.getElementById("backgroundDiv").style.backgroundImage =
    backgroundDivGif[0];
}

function changeGif() {
  if (countGif > 1) {
    countGif = 0;
  }
  document.getElementById("backgroundDiv").style.backgroundImage =
    backgroundDivGif[countGif];
  countGif++;
}
setInterval(changeGif, 6000);

// DIGIT COUNTER //////////////////////////////////////////////////
let hasRun = false;

function runOnce() {
  if (!hasRun && 1200 > window.scrollY && window.scrollY > 1000) {
    let digiCount = document.querySelectorAll(".digiCount");
    digiCount.forEach((counter) => {
      counter.innerText = "0";
      let updateCount = () => {
        let target = +counter.getAttribute("data-target");
        let c = +counter.innerText;
        let increment = target / 400;
        if (c < target) {
          counter.innerText = Math.ceil(c + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    hasRun = true;
  }
}

window.addEventListener("scroll", runOnce);
window.addEventListener("beforeunload", function () {
  hasRun = false;
});
// PRODUCTS SLIDER //////////////////////////////////////////////////
const slides = [
  {
    src: "../assets/images/slider/electric.jpg",
    header: "All-Elecrtic",
    alt: "electric",
    button: "Explore EV Power",
  },
  {
    src: "../assets/images/slider/trucks.jpg",
    header: "Trucks Versatility",
    alt: "trucks",
    button: "Explore Gas + Ecoboost®",
  },
  {
    src: "../assets/images/slider/suvs.jpg",
    header: "Gas Power",
    alt: "suvs",
    button: "Explore SUV's",
  },
  {
    src: "../assets/images/slider/mustang.jpg",
    header: "Drive To Infinity",
    alt: "mustang",
    button: "Choose A Mustang",
  },
  {
    src: "../assets/images/slider/f-150.webp",
    header: "Climb The Mountain",
    alt: "f-150",

    button: "Explore Hybrid Power",
  },
  {
    src: "../assets/images/slider/bronco.webp",
    header: "Split The Waters",
    alt: "bronco",

    button: "Pick A Powertrain",
  },
];
let productSec = document.querySelector(".productList");
let mainCarImg = document.querySelector(".mainCarImg");
let productTitles = document.querySelectorAll(".product");
let mainCarHeader = document.querySelector(".mainCarHeader");
let mainCarBtn = document.querySelector(".mainCarBtn");
let productListDiv = document.querySelector(".productListImage");
let slidesSrc = [];
let slidesHeader = [];
let slidesButton = [];
let slidesAlt = [];
// get sliders src's & give it to product titles
slides.forEach((item) => {
  slidesSrc.push(item.src);
  slidesHeader.push(item.header);
  slidesButton.push(item.button);
  slidesAlt.push(item.alt);
});
if (mainCarImg.src) {
  mainCarImg.src = slidesSrc[0];
  mainCarHeader.textContent = slidesHeader[0];
  mainCarBtn.textContent = slidesButton[0];
  mainCarImg.alt = slidesAlt[0];

  divTag = document.createElement("div");
  productTitles[0].appendChild(divTag);
  divTag.classList.add("divCheck");
}
// do auto slide
let currentIndex = 0;
let autoSlide = () => {
  currentIndex = (currentIndex + 1) % productTitles.length;
  productTitles[currentIndex].click();
};
setInterval(autoSlide, 9800);

for (let i = 0; i < productTitles.length; i++) {
  productTitles[i].addEventListener("click", () => {
    // line fill under product
    removeClass(productTitles[i]);
    productTitles[i].classList.add("listActive");
    let divTag = productTitles[i].querySelector("div");
    if (!divTag) {
      divTag = document.createElement("div");
      productTitles[i].appendChild(divTag);
    }
    productTitles.forEach((otherElement) => {
      if (otherElement !== productTitles[i]) {
        let otherDivTag = otherElement.querySelector("div");
        if (otherDivTag) {
          otherElement.removeChild(otherDivTag);
        }
      }
    });
    divTag.classList.add("divCheck");
    // line fill under product end
    mainCarImg.src = slidesSrc[i];
    mainCarHeader.textContent = slidesHeader[i];
    mainCarBtn.textContent = slidesButton[i];
    currentIndex = i;
    mainCarImg.alt = slidesAlt[i];
  });
  mainCarImg.classList.add("zoomOut");
}
// TRILOGY SLIDER //////////////////////////////////////////////////
let thumbnail = document.querySelectorAll(".sliderCard");
let slider = document.getElementById("slider");
let leftButton = document.getElementById("leftBtn");
let rightButton = document.getElementById("rightBtn");
console.log(leftButton);

leftButton.addEventListener("click", function () {
  slider.scrollLeft -= 125;
});

rightButton.addEventListener("click", function () {
  slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
  if (slider.scrollLeft > maxScrollLeft - 1) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}

let play = setInterval(autoPlay, 100);

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 100));
  });
}

// clusore ///////////////////////////////////////////////////////////////////////////////
let closureNote = document.querySelector(".closureNote");
let closureToggle = document.querySelector(".plusClosure");
closureToggle.addEventListener("click", () => {
  closureNote.classList.toggle("showClosure");
  closureToggle.classList.toggle("bx-plus");
  closureToggle.classList.toggle("bx-minus");
});

// HISTORY BATCH /////////////////////////////////////////////////////////////////////////
let henryHistory = document.getElementById("henry");
let henrySpan = document.getElementById("henrySpan");
let carHistory = document.getElementById("car");
let carSpan = document.getElementById("carSpan");
let factoryHistory = document.getElementById("factory");
let factorySpan = document.getElementById("factorySpan");
let pavilonHistory = document.getElementById("pavilon");
let pavilonSpan = document.getElementById("pavilonSpan");
let setStyleHistory = document.querySelectorAll(".setStyle");
henrySpan.addEventListener("mouseover", () => {
  let pTag = document.querySelector(".historyContent");
  if (!pTag) {
    pTag = document.createElement("p");
    henryHistory.appendChild(pTag);
    pTag.classList.add("historyContent");
    pTag.innerText =
      "Henry Ford's first attempt at a car manufacturing company and was established on November 3, 1901";
  }
});
carSpan.addEventListener("mouseover", () => {
  let pTag = document.querySelector(".historyContent");
  if (!pTag) {
    pTag = document.createElement("p");
    carHistory.appendChild(pTag);
    pTag.classList.add("historyContent");
    pTag.innerText =
      "Ford introduced the mass-produced Model T, which totaled millions sold over nearly 20 years. In 1927";
  }
});
factorySpan.addEventListener("mouseover", () => {
  let pTag = document.querySelector(".historyContent");
  if (!pTag) {
    pTag = document.createElement("p");
    factoryHistory.appendChild(pTag);
    pTag.classList.add("historyContent");
    pTag.innerText =
      "B-24 Liberator bombers being mass-produced at Ford's Willow Run assembly plant in 1944";
  }
});
pavilonSpan.addEventListener("mouseover", () => {
  let pTag = document.querySelector(".historyContent");
  if (!pTag) {
    pTag = document.createElement("p");
    pavilonHistory.appendChild(pTag);
    pTag.classList.add("historyContent");
    pTag.innerText =
      "The Ford Mustang was introduced on April 17, 1964, during the 1964 New York World's Fair";
  }
});
setStyleHistory.forEach((element) => {
  element.addEventListener("mouseleave", () => {
    setTimeout(() => {
      element.querySelector("p").remove();
      // element.style.hover.transform = "scale(1)";
    }, 1000);
  });
});
console.log(setStyleHistory);
// SCROLL TO TOP BUTTON ///////////////////////////////////////////////////////////////////
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// BURGER MENU /////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});

//FOOTER UNDER 768 ////////////////////////////////////////////////////////////////
let eachFooterLinkItem = document.querySelectorAll(".listItem");
let eachFooterLinkItemUl = document.querySelectorAll(".listItem ul");
console.log(eachFooterLinkItemUl);
eachFooterLinkItem.forEach((element, index) => {
  let iTag = document.createElement("i");
  iTag.classList.add("fa-plus", "fa-light");
  element.firstElementChild.appendChild(iTag);
  element.addEventListener("click", () => {
    if (eachFooterLinkItemUl[index].style.display != "flex") {
      eachFooterLinkItemUl[index].style.display = "flex";
      iTag.classList.remove("fa-plus");
      iTag.classList.add("fa-minus");
    } else if (eachFooterLinkItemUl[index].style.display != "none") {
      eachFooterLinkItemUl[index].style.display = "none";
      iTag.classList.add("fa-plus");
      iTag.classList.remove("fa-minus");
    }
  });
});
