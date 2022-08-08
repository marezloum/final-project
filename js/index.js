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
loginModal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__content")) {
    loginModal.classList.remove("show");
  }
});

uploadModal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal__content")) {
    uploadModal.classList.remove("show");
  }
});

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

const playIcon = document.querySelector(".playControl");
const videoPlayer = document.querySelector(".videoplayer video");

playIcon?.addEventListener("click", function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playIcon.classList.add("play");
  } else {
    videoPlayer.pause();
    playIcon.classList.remove("play");
  }
});

function submitComment(e) {
  const name = document.getElementById("name");
  const comment = document.getElementById("comment");
  const commentsList = document.getElementById("comments__list");
  const commentForm = document.getElementById("commentForm");
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="comment">
    <div class="comment__pic">
      <img src="img/profile-icon-9.png" alt="comment" />
    </div>
    <div class="comment__text">
      <h5><a href="#">${name.value}</a></h5>
      <span class="comment__date"
        >Posted on 18:20 December 12, 2016</span
      >
      <p>
      ${comment.value}
      </p>
      <a href="#" class="comment__reply">Reply</a>
    </div>
  </div>
  `;
  commentsList.append(li);
  commentForm.reset();
}
