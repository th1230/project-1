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

  let leftbutton = document.querySelector(".prev");
  let rightbutton = document.querySelector(".next");
  let imgContainer = document.querySelector(".container");
  let slider = document.querySelector(".slider");

  let titletext = [
    "Brazil-巴西",
    "Vietnam-越南",
    "Indonesia-印尼",
    "Colombia-哥倫比亞",
    "India-印度",
    "Ethiopia-衣索比亞",
  ];
  let contenttext = [
    "比起其他中南美洲的咖啡豆，巴西咖啡豆的種植海拔相對較低，因此風味也比較獨特，酸度低並帶有巧克力及堅果的香氣，酸苦平衡佳且風味醇厚。",
    "越南是咖啡輸出的主要國家之一，主要盛產羅布斯塔咖啡豆，咖啡風味相對苦澀，通常會加入煉乳飲用，屬於越南咖啡的特殊喝法。",
    "印尼咖啡具有獨特的木質香氣，風味醇厚、酸味明亮，常見的曼特寧、黃金曼特寧是印尼咖啡的代表作。",
    "水果香氣濃郁、咖啡酸度高並帶有清香是哥倫比亞咖啡豆的特色，有些甚至帶有堅果的香氣，堆疊出多層次的口感，喝起來香醇順口。",
    "印度咖啡最著名的是風漬處理法製成的咖啡豆，咖啡酸味低、缺少層次感，但風味濃郁，獨特的風味使其獲得兩極的評價。",
    "衣索比亞咖啡在精品咖啡界擁有一定的地位，常見的耶加雪菲就是衣索比亞咖啡的代表之一，酸質明亮、花香濃郁以及餘韻飽滿綿長的特色，是很多咖啡愛好者的首選。",
  ];

  let bgcolor = [
    "#3d596fa9",
    "#e7d740a9",
    "#49eaf0a9",
    "#f79321a9",
    "#ffcd83a9",
    "#dd5a26a9",
  ];

  let introduce = document.querySelector(".introduce");

  let sliderWidth = imgContainer.offsetWidth / 6;
  let n = 0;
  leftbutton.addEventListener("click", () => {
    n = n - 1;
    if (n < 0) {
      n = 5;
    }
    introduce.childNodes[1].childNodes[3].textContent = titletext[n];
    introduce.childNodes[3].textContent = contenttext[n];
    introduce.style.backgroundColor = bgcolor[n];
    imgContainer.style.transform = `translateX(${-n * sliderWidth}px)`;
  });

  rightbutton.addEventListener("click", () => {
    n = n + 1;
    if (n > 5) {
      n = 0;
    }
    introduce.childNodes[1].childNodes[3].textContent = titletext[n];
    introduce.childNodes[3].textContent = contenttext[n];
    introduce.style.backgroundColor = bgcolor[n];
    imgContainer.style.transform = `translateX(${-n * sliderWidth}px)`;
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
