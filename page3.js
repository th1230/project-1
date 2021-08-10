window.onload = () => {
  let toggle = document.querySelector(".toggle");
  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("active")) {
      toggle.classList.add("close");
      setTimeout(() => {
        console.log("asd");
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

  let target = document.querySelectorAll("[data-anime]");
  const animeationClass = "animate";

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
