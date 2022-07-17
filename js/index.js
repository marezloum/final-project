// const toggleListHome = document.querySelector(".toggle__list-home");
// const toggleListHomeAncher = document.querySelector(".toggle__list-home>a");
// const toggleListHomeArrow = document.querySelector(".toggle__list-home>.arrow");
// toggleListHomeAncher.addEventListener("click", () => {
//   toggleListHome.classList.toggle("show");
// });
// toggleListHomeArrow.addEventListener("click", () => {
//   toggleListHome.classList.toggle("show");
// });

// const toggleListPages = document.querySelector(".toggle__list-pages");
// const toggleListPagesAncher = document.querySelector(".toggle__list-pages>a");
// const toggleListPagesArrow = document.querySelector(
//   ".toggle__list-pages>.arrow"
// );
// toggleListPagesAncher.addEventListener("click", () => {
//   toggleListPages.classList.toggle("show");
// });
// toggleListPagesArrow.addEventListener("click", () => {
//   toggleListPages.classList.toggle("show");
// });

// const toggleListPagesBlog = document.querySelector(".toggle__list-pages-blog");
// const toggleListPagesBlogAncher = document.querySelector(
//   ".toggle__list-pages-blog>a"
// );
// const toggleListPagesBlogArrow = document.querySelector(
//   ".toggle__list-pages-blog>.arrow"
// );
// toggleListPagesBlogAncher.addEventListener("click", () => {
//   toggleListPagesBlog.classList.toggle("show");
// });
// toggleListPagesBlogArrow.addEventListener("click", () => {
//   toggleListPagesBlog.classList.toggle("show");
// });

// const toggleListPagesVideos = document.querySelector(
//   ".toggle__list-pages-videos"
// );
// const toggleListPagesVideosAncher = document.querySelector(
//   ".toggle__list-pages-videos>a"
// );
// const toggleListPagesVideosArrow = document.querySelector(
//   ".toggle__list-pages-videos>.arrow"
// );
// toggleListPagesVideosAncher.addEventListener("click", () => {
//   toggleListPagesVideos.classList.toggle("show");
// });
// toggleListPagesVideosArrow.addEventListener("click", () => {
//   toggleListPagesVideos.classList.toggle("show");
// });

// const toggleListMega = document.querySelector(".toggle__list-mega");
// const toggleListMegaAncher = document.querySelector(".toggle__list-mega>a");
// const toggleListMegaArrow = document.querySelector(".toggle__list-mega>.arrow");
// toggleListMegaAncher.addEventListener("click", () => {
//   toggleListMega.classList.toggle("show");
// });
// toggleListMegaArrow.addEventListener("click", () => {
//   toggleListMega.classList.toggle("show");
// });

const toggleAbles = document.querySelectorAll(".toggle__list-toggle");
toggleAbles.forEach((toggleList) => {
  const anchor = toggleList.querySelector("a");
  const arrow = toggleList.querySelector(".arrow");
  if (anchor) {
    anchor.addEventListener("click", () => {
      toggleList.classList.toggle("show");
    });
  }
  if (arrow) {
    arrow.addEventListener("click", () => {
      toggleList.classList.toggle("show");
    });
  }
});

const symbol = document.querySelector(".toggle__symbol");
symbol.addEventListener("click", () => {
  const toggleMenu = document.querySelector(".toggle-menu");
  toggleMenu.classList.toggle("show");
});

const uploadModal = document.querySelector(".modal__upload-window");
const loginModal = document.querySelector(".modal__login-window");

const uploadButton = document.querySelector(".upload__opt");
uploadButton.addEventListener("click", () => {
  uploadModal.classList.toggle("show");
});

const closeButtonLoginModal = document.querySelector(
  ".modal__login-window .modal__header-title-btn"
);
closeButtonLoginModal.addEventListener("click", () => {
  loginModal.classList.remove("show");
});

const closeButtonUploadModal = document.querySelector(
  ".modal__upload-window .modal__header-title-btn"
);
closeButtonUploadModal.addEventListener("click", () => {
  uploadModal.classList.remove("show");
});

const loginButton = document.querySelector(".login_opt");
loginButton.addEventListener("click", () => {
  loginModal.classList.toggle("show");
});
