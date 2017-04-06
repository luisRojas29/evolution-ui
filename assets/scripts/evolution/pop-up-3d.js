export default function() {

  /* 3D POP UP COMPONENT */
  var appr = document.getElementsByClassName("evo_c-pop-up-3d__trigger")[0];
  var pop_bck = document.getElementsByClassName("evo_c-pop-up-3d")[0];
  var pop_txt = document.getElementsByClassName("evo_c-pop-over3d__paragraph")[0];
  var pop_title_bck = document.getElementsByClassName("evo_c-pop-up-3d__info-title")[0];
  var pop_title_txt = document.getElementsByClassName("evo_c-pop-up-3d__info-title-text")[0];
  var cls = document.getElementsByClassName("evo_c-pop-up-3d-close")[0];
  var loc = appr.getBoundingClientRect();

  appr.addEventListener("click", function (e) {

    pop_title_txt.removeEventListener("transitionend", removeTrans);

    if (loc.top < pop_bck.offsetHeight) {
      pop_bck.style.top = "30px";
      pop_bck.classList.add("evo_c-pop-up-3d__tip--top");
    } else if (screen.height - loc.top < pop_bck.offsetHeight) {
      pop_bck.style.top = "-210px";
      pop_bck.classList.add("evo_c-pop-up-3d__tip--bottom");
    }

    setTimeout(function () {
      pop_bck.classList.add("evo_c-pop-up-3d-show");
      pop_txt.classList.add("evo_c-pop-up-3d-show");
      pop_title_bck.classList.add("evo_c-pop-up-3d-show");
      pop_title_txt.classList.add("evo_c-pop-up-3d-show");
    }, 500);

  });

  cls.addEventListener("click", function (e) {

    setTimeout(function () {
      pop_bck.classList.add("evo_c-pop-up-3d-hide");
      pop_txt.classList.add("evo_c-pop-up-3d-hide");
      pop_title_bck.classList.add("evo_c-pop-up-3d-hide");
      pop_title_txt.classList.add("evo_c-pop-up-3d-hide");
    }, 500);

    pop_title_txt.addEventListener("transitionend", removeTrans);

    e.stopPropagation();
  });

  function removeTrans(e) {
    if (e.propertyName !== 'transform') return;

    pop_bck.classList.remove("evo_c-pop-up-3d-show");
    pop_txt.classList.remove("evo_c-pop-up-3d-show");
    pop_title_bck.classList.remove("evo_c-pop-up-3d-show");
    pop_title_txt.classList.remove("evo_c-pop-up-3d-show");
    pop_bck.classList.remove("evo_c-pop-up-3d-hide");
    pop_txt.classList.remove("evo_c-pop-up-3d-hide");
    pop_title_bck.classList.remove("evo_c-pop-up-3d-hide");
    pop_title_txt.classList.remove("evo_c-pop-up-3d-hide");
  }
}
