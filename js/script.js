/*Search md*/

let openSearch = document.querySelector(".header__search-open");
let closeSearch = document.querySelector(".header__search-close");
let nav = document.querySelector(".nav");
let showSearch = document.querySelector(".nav-input");
let searchStyle = document.querySelector(".navbar-expand-xl");
openSearch.addEventListener("click", () => searchOn());
closeSearch.addEventListener("click", () => searchOff());
function searchOn () {
  showSearch.style.display = "block";
  openSearch.style.display = "none";
  closeSearch.style.display = "block";
  searchStyle.style.margin = "6px 0";
}
function searchOff () {
  showSearch.style.display = "none";
  openSearch.style.display = "block";
  closeSearch.style.display = "none";
  searchStyle.style.margin = "0";
}
/*Navigation lg*/

let collaps = document.getElementById("navbar");
let opens = document.querySelector(".nav-open");
let closes = document.querySelector(".nav-close");

collaps.addEventListener("show.bs.collapse", function open() {
  opens.style.display = "none";
  closes.style.display = "block";
  nav.style.padding = "16px 0 26px 0";
});
collaps.addEventListener("hidden.bs.collapse", function close() {
  opens.style.display = "block";
  closes.style.display = "none";
  searchStyle.style.padding = "0";
});

/*Chek boxes*/
document.getElementById("flexCheck1").addEventListener("change", function (e) {
  if (this.checked) {
    document.getElementById("formCheck1").innerHTML = 'Checkbox Active';
  } else {
    document.getElementById("formCheck1").innerHTML = 'Checkbox';
  }
}
);
document.getElementById("flexCheck2").addEventListener("change", function (e) {
  if (this.checked) {
    document.getElementById("formCheck2").innerHTML = 'Checkbox Active';
  } else {
    document.getElementById("formCheck2").innerHTML = 'Checkbox';
  }
}
);
/*Radio boxes*/
document.getElementById("flexRadio1").addEventListener("change", function (e) {
  if (this.checked) {
    document.getElementById("formRadio1").innerHTML = 'Radio Active';
    document.getElementById("formRadio2").innerHTML = 'Radio';
  } 
}
);
document.getElementById("flexRadio2").addEventListener("change", function (e) {
  if (this.checked) {
    document.getElementById("formRadio2").innerHTML = 'Radio Active';
    document.getElementById("formRadio1").innerHTML = 'Radio';
  }
}
);
/*Switch boxes*/
document.getElementById("flexSwitch1").addEventListener("change", function (e) {
  if (this.checked) {
    document.getElementById("formSwitch1").innerHTML = 'Switcher ON';
  } else {
    document.getElementById("formSwitch1").innerHTML = 'Switcher OFF';
  }
}
);
document.getElementById("flexSwitch2").addEventListener("change", function (e) {
  if (this.checked) {
    document.getElementById("formSwitch2").innerHTML = 'Switcher ON';
  } else {
    document.getElementById("formSwitch2").innerHTML = 'Switcher OFF';
  }
}
);

/*"Header-scroll"*/

window.onscroll = function () { scrollHeader() };
let header = document.querySelector(".header");
let sticky = header.offsetTop;
let sticky1 = nav.offsetTop;
function scrollHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    nav.classList.add("sticky1");

  } else {
    header.classList.remove("sticky");
    nav.classList.remove("sticky1");
  }
}

/*Slider*/

let slideIndex = 1;
const timeSlide = 7000;
let timer = setInterval(() => { showNextSlide(1) }, timeSlide);
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prew");
let playButton = document.querySelector(".play");
nextButton.addEventListener("click", () => showNextSlide(1));
prevButton.addEventListener("click", () => showNextSlide(-1));
let stop = false;
playButton.addEventListener("click", () => {
  if (stop) {
    timer = setInterval(() => { showNextSlide(1) }, timeSlide);
    stop = false;
  } else {
    clearInterval(timer);
    stop = true;
  }
  console.log("stop", stop);
}
);
const slides = document.querySelectorAll(".images");
const control = document.querySelectorAll("img.control");
const st = document.querySelector(".slidertrans");
for (let i=0; i<control.length; i++) {
  control[i].addEventListener("click", () => setSlide(i+1));
}
function setSlide(inds) {
  slideIndex = inds;
  console.log("set", slideIndex);
  setTimeout(showSlide, 600);
  transparent();
}
showSlide(slideIndex);
function showNextSlide(index) {
  slideIndex = slideIndex + index;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else {
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
  }
  setTimeout(showSlide, 600);
  transparent();
};
function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    control[i].style.borderWidth = "0px";
    slides[slideIndex - 1].style.display = "flex";
    control[slideIndex - 1].style.borderWidth = "2px";
  }
};
function transparent() {
  let op = 1;
  function setop() {
    op = 0;
    st.style.opacity = op;
  }
  times = setTimeout(setop, 600);
  st.style.opacity = op;
};

/*Accordeon collapsed*/

const showFutor1 = document.querySelector("#collapseOne");
const showFutor2 = document.querySelector("#collapseTwo");
const showFutor3 = document.querySelector("#collapseThree");
let col1 = document.getElementById("1");
let col2 = document.getElementById("2");
let col3 = document.getElementById("3");
let windowInnerWidth = document.documentElement.clientWidth;
console.log(windowInnerWidth);
se
window.addEventListener("resize", function () {
  windowInnerWidth = this.innerWidth;
  console.log(windowInnerWidth);
  setShow(windowInnerWidth);
}, false);
function setShow () {
  if (windowInnerWidth >= 768) {
      showFutor1.classList.add('show');
      col1.classList.remove('collapsed');
      showFutor2.classList.add('show');
      col2.classList.remove('collapsed');
      showFutor3.classList.add('show');
      col3.classList.remove('collapsed');
    } else {
      showFutor1.classList.remove('show');
      col1.classList.add('collapsed');
      showFutor2.classList.remove('show');
      col2.classList.add('collapsed');
      showFutor3.classList.remove('show');
      col3.classList.add('collapsed');      
    }
};

/*Maps*/
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.94633157944934, lng: -80.14333381635346 },
    zoom: 15,
    disableDefaultUI: true,
    scrollwheel: false,
    styles =[
      {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#9ea3a9"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#9ea3a9"
          },
          {
            "weight": "0.50"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#f2f7fd"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#f2f7fd"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "weight": "1.27"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#0049b0"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#6d848a"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]

  });
}
