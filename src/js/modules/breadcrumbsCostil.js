export default () => {
  const breadcrumbs = Array.from(document.querySelectorAll(".breadcrumbs__item"));

  if (breadcrumbs.length > 3) {
    breadcrumbs[2].innerHTML = "<span class='breadcrumbs__dots'></span>"
  }
};
