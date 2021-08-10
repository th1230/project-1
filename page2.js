window.onload = () => {
  let toggle = document.querySelector(".toggle");
  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("active")) {
      toggle.classList.add("close");
      setTimeout(() => {
        toggle.classList.remove("close");
        toggle.classList.remove("active");
      }, 300);
    } else {
      toggle.classList.add("active");
    }
  });

  let nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (scrollY > 10) {
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.541)";
    } else {
      nav.removeAttribute("style");
    }
  });

  //section-3 anime

  let section3 = document.querySelector(".section-3");
  let cards = document.querySelectorAll(".cd");

  section3.addEventListener("click", (e) => {
    let haveopen = null;
    cards.forEach((i) => {
      if (i.firstChild.textContent !== e.target.firstChild.textContent) {
        i.classList.add("close");
      }
      if (i.classList.contains("open")) {
        haveopen = i;
      }
    });

    if (e.target.classList.contains("open")) {
      e.target.classList.add("close");
      e.target.classList.remove("open");
      e.target.childNodes[3].classList.remove("dis-flex");
    } else {
      if (haveopen !== null) {
        haveopen.classList.remove("open");
        haveopen.childNodes[3].classList.remove("dis-flex");
        e.target.classList.remove("close");
        e.target.classList.add("open");
        e.target.childNodes[3].classList.add("dis-flex");
      } else {
        e.target.classList.remove("close");
        e.target.classList.add("open");
        e.target.childNodes[3].classList.add("dis-flex");
      }
    }
  });

  //section-5 anime

  let setItemPercentValue = {
    expresso: {
      expressoOrder: 2,
      water: 0,
      milk: 0,
      milkFroth: 0,
      chocolate: 0,
      freshCream: 0,
      nothing: 4,
    },

    macchiato: {
      expressoOrder: 2,
      water: 0,
      milk: 0,
      milkFroth: 2,
      chocolate: 0,
      freshCream: 0,
      nothing: 2,
    },

    americano: {
      expressoOrder: 2,
      water: 4,
      milk: 0,
      milkFroth: 0,
      chocolate: 0,
      freshCream: 0,
      nothing: 0,
    },

    flatwhite: {
      expressoOrder: 2,
      water: 0,
      milk: 2,
      milkFroth: 0,
      chocolate: 0,
      freshCream: 0,
      nothing: 2,
    },

    latte: {
      expressoOrder: 2,
      water: 0,
      milk: 2,
      milkFroth: 2,
      chocolate: 0,
      freshCream: 0,
      nothing: 0,
    },

    canpanna: {
      expressoOrder: 2,
      water: 0,
      milk: 0,
      milkFroth: 0,
      chocolate: 0,
      freshCream: 1,
      nothing: 3,
    },

    cafebreve: {
      expressoOrder: 2,
      water: 0,
      milk: 0,
      milkFroth: 0,
      chocolate: 0,
      freshCream: 1,
      nothing: 3,
    },

    cappuccino: {
      expressoOrder: 2,
      water: 0,
      milk: 1.5,
      milkFroth: 2.5,
      chocolate: 0,
      freshCream: 0,
      nothing: 0,
    },

    mocha: {
      expressoOrder: 2,
      water: 0,
      milk: 2,
      milkFroth: 0,
      chocolate: 0.5,
      freshCream: 1.5,
      nothing: 0,
    },
  };

  let allItem = document.querySelectorAll(".oneItem");
  let itemContainer = document.querySelector(".items");

  let perbox = document.querySelector(".percentbox");

  allItem.forEach((i) => {
    event.preventDefault();
  });

  itemContainer.addEventListener("click", (e) => {
    for (let i in setItemPercentValue) {
      if (e.target.textContent == i) {
        perbox.childNodes[1].style.flexGrow =
          setItemPercentValue[i].expressoOrder;

        perbox.childNodes[3].style.flexGrow = setItemPercentValue[i].water;

        perbox.childNodes[5].style.flexGrow = setItemPercentValue[i].milk;

        perbox.childNodes[7].style.flexGrow = setItemPercentValue[i].milkFroth;

        perbox.childNodes[9].style.flexGrow = setItemPercentValue[i].chocolate;

        perbox.childNodes[11].style.flexGrow =
          setItemPercentValue[i].freshCream;

        document.documentElement.style.setProperty(
          "--order",
          setItemPercentValue[i].nothing
        );
      }
    }
  });

  //scrollanimecontrol

  let target = document.querySelectorAll("[data-anime]");
  const animeationClass = "animate";

  animateScroll();
  function animateScroll() {
    // console.log(target[2].getBoundingClientRect());
    target.forEach((item) => {
      if (item.getBoundingClientRect().top <= window.innerHeight / 1.5) {
        item.classList.add(animeationClass);
      } else {
        item.classList.remove(animeationClass);
      }
    });
  }

  window.addEventListener("scroll", () => {
    animateScroll();
  });
};
