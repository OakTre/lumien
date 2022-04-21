export default () => {

  const pageHeader = document.querySelector(".header");
  if (!pageHeader) return;

  window.addEventListener("scroll", ()=>{
    let scrollDistance = window.scrollY;

    if (scrollDistance >= pageHeader.offsetHeight) {
      pageHeader.classList.add("is-fixed");
    } else {
      pageHeader.classList.remove("is-fixed");
    }
  });

  if (window.scrollY >= pageHeader.offsetHeight) {
    pageHeader.classList.add("is-fixed");
  }
};
