// CENOVNIK responsive fix
function addClassToCenovnik(cenovnikWidth) {
  if (cenovnikWidth.matches) {
    // If media query matches
    document.getElementById("cenovnik").classList.add("py-10");
    document.getElementById("cenovnikMargin").classList.remove("my-10");
    document.getElementById("cenovnikMargin").classList.add("mb-10");
    document.getElementById("sectionCenovnik").classList.remove("pt-10");
  } else {
    document.getElementById("cenovnik").classList.remove("py-10");
    document.getElementById("cenovnikMargin").classList.add("my-10");
    document.getElementById("cenovnikMargin").classList.remove("mb-10");
    document.getElementById("sectionCenovnik").classList.add("pt-10");
  }
}

const cenovnikWidth = window.matchMedia("(max-width: 768px)");
addClassToCenovnik(cenovnikWidth); // Call listener function at run time
cenovnikWidth.addListener(addClassToCenovnik); // Attach listener function on state changes

// Zasto Bas Mi responsive fix
function pullTitleUp(zastoWidth) {
  if (zastoWidth.matches) {
    // If media query matches
    document.getElementById("zastoCenter").prepend(document.getElementById("zastoBasMi"));
    document.getElementById("zastoCenter").classList.remove("align-items-center");
    document.getElementById("zastoBasMi").classList.add("text-center");
    document.getElementById("zastoImg").classList.add("col-md-6");
    document.getElementById("zastoImg").classList.remove("col-md-9");
    document.getElementById("zastoImg").classList.remove("col-lg-6");
    document.getElementById("zastoImg").classList.add("order-md-0");
    document.getElementById("zastoRight").classList.add("order-md-1");
    document.getElementById("zastoRight").classList.add("col-md-6");
    document.getElementsByClassName("zastoQuestion")[0].classList.add("col-md-12");
    document.getElementsByClassName("zastoQuestion")[0].classList.remove("col-md-6");
    document.getElementsByClassName("zastoQuestion")[1].classList.add("col-md-12");
    document.getElementsByClassName("zastoQuestion")[1].classList.remove("col-md-6");
    document.getElementsByClassName("zastoQuestion")[2].classList.add("col-md-12");
    document.getElementsByClassName("zastoQuestion")[2].classList.remove("col-md-6");
    document.getElementsByClassName("zastoQuestion")[3].classList.add("col-md-12");
    document.getElementsByClassName("zastoQuestion")[3].classList.remove("col-md-6");
  } else {
    document.getElementById("zastoRight").prepend(document.getElementById("zastoBasMi"));
    document.getElementById("zastoCenter").classList.add("align-items-center");
    document.getElementById("zastoBasMi").classList.remove("text-center");
    document.getElementById("zastoImg").classList.remove("col-md-6");
    document.getElementById("zastoImg").classList.add("col-md-9");
    document.getElementById("zastoImg").classList.add("col-lg-6");
    document.getElementById("zastoImg").classList.remove("order-md-0");
    document.getElementById("zastoRight").classList.remove("order-md-1");
    document.getElementById("zastoRight").classList.remove("col-md-6");
    document.getElementsByClassName("zastoQuestion")[0].classList.remove("col-md-12");
    document.getElementsByClassName("zastoQuestion")[0].classList.add("col-md-6");
    document.getElementsByClassName("zastoQuestion")[1].classList.remove("col-md-12");
    document.getElementsByClassName("zastoQuestion")[1].classList.add("col-md-6");
    document.getElementsByClassName("zastoQuestion")[2].classList.remove("col-md-12");
    document.getElementsByClassName("zastoQuestion")[2].classList.add("col-md-6");
    document.getElementsByClassName("zastoQuestion")[3].classList.remove("col-md-12");
    document.getElementsByClassName("zastoQuestion")[3].classList.add("col-md-6");
  }
}

const zastoWidth = window.matchMedia("(max-width: 992px)");
pullTitleUp(zastoWidth); // Call listener function at run time
zastoWidth.addListener(pullTitleUp); // Attach listener function on state changes
