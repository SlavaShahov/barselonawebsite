
function toggleWindow() {
  const menu = document.querySelector(".burger__container");
  const closeBtn = document.querySelector(".burger__btn");
  const openBtn = document.querySelector(".first__menu");
  const burgerButtons = document.querySelectorAll(".burger__item");
  burgerButtons.forEach((el) => {
    el.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
  openBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

function historyHandler() {
  const photos = document.querySelectorAll(".history__fotoplayer");
  const modal = document.querySelector(".modal__container");
  const modalImg = document.querySelector(".modal__wrap img");
  const modalTitle = document.querySelector(".modal__title");
  const modalDesc = document.querySelector(".modal__desc");
  const data = [
    { title: "Кройф", desc: "Кройф текст" },
    { title: "Рональдиньо", desc: "Рональдиньо текст" },
    { title: "Месси", desc: "Месси текст" },
  ];

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__container")) {
      modal.classList.remove("active");
    }
  });
  photos.forEach((el) => {
    el.addEventListener("click", () => {
      const imgUrl = el.querySelector("img");
      modalImg.src = imgUrl.src;
      modalTitle.textContent = data[el.id].title;
      modalDesc.textContent = data[el.id].desc;
      modal.classList.add("active");
    });
  });
}

historyHandler();

toggleWindow();


function sliderHandler() {
  const buttons = document.querySelectorAll(".swiper__btn-item");
  const swiperOverflow = document.querySelector(".slider__overflow");
  let counter = 0;
  console.log(buttons);
  buttons[0].addEventListener("click", () => {
  if (counter !== -1) {
  counter--;
  swiperOverflow.style.left = `-${counter}00%`;
  }
  if (counter == -1 ){
  counter=1;
  swiperOverflow.style.left = `-${counter}00%`;
  }
  });
  buttons[1].addEventListener("click", () => {
  if (counter !== 2) {
  counter++;
  swiperOverflow.style.left = `-${counter}00%`;
  }
  if (counter == 2 ){
    counter=0;
    swiperOverflow.style.left = `-${counter}00%`;
    }
  });
  }
  
  sliderHandler();