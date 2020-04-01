// =============== SEND FUNCTION!!! =============================

function poruci() {
  const data = Array.prototype.slice.call(document.getElementsByClassName("thumbs")).map(function(thumb) {
    return {
      user: "",
      size: "",
      paper: "",
      copies: 1,
      name: "",
      file: ""
    };
  });
  console.log(data);
}

// ================= Check image dimension and display quality slider =======================
function checkQuality() {
  const progress = document.getElementsByClassName("thumbs");
  const danger = 0.6;
  const size = [1000, 1200, 1500, 1800, 2400, 3000];

  for (let i = 0; i < progress.length; i++) {
    const width = progress[i].querySelector(".upload-image").naturalWidth;
    const height = progress[i].querySelector(".upload-image").naturalHeight;
    const progressLine = progress[i].querySelector(".progress-bar");
    const dimension = progress[i].querySelector("select.sizeSelect").value;
    if (dimension == "9x13") {
      if (width < size[0] * danger || height < size[0] * danger) {
        progressLine.className = "progress-bar bg-danger";
        progressLine.style = "width:50%;";
      } else if (width < size[0] || height < size[0]) {
        progressLine.className = "progress-bar bg-warning";
        progressLine.style = "width:75%;";
      } else {
        progressLine.className = "progress-bar bg-success";
        progressLine.style = "width:100%;";
      }
    } else if (dimension == "10x15") {
      if (width < size[1] * danger || height < size[1] * danger) {
        progressLine.className = "progress-bar bg-danger";
        progressLine.style = "width:50%;";
      } else if (width < size[1] || height < size[1]) {
        progressLine.className = "progress-bar bg-warning";
        progressLine.style = "width:75%;";
      } else {
        progressLine.className = "progress-bar bg-success";
        progressLine.style = "width:100%;";
      }
    } else if (dimension == "13x18") {
      if (width < size[2] * danger || height < size[2] * danger) {
        progressLine.className = "progress-bar bg-danger";
        progressLine.style = "width:50%;";
      } else if (width < size[2] || height < size[2]) {
        progressLine.className = "progress-bar bg-warning";
        progressLine.style = "width:75%;";
      } else {
        progressLine.className = "progress-bar bg-success";
        progressLine.style = "width:100%;";
      }
    } else if (dimension == "15x21") {
      if (width < size[3] * danger || height < size[3] * danger) {
        progressLine.className = "progress-bar bg-danger";
        progressLine.style = "width:50%;";
      } else if (width < size[3] || height < size[3]) {
        progressLine.className = "progress-bar bg-warning";
        progressLine.style = "width:75%;";
      } else {
        progressLine.className = "progress-bar bg-success";
        progressLine.style = "width:100%;";
      }
    } else if (dimension == "20x30") {
      if (width < size[4] * danger || height < size[4] * danger) {
        progressLine.className = "progress-bar bg-danger";
        progressLine.style = "width:50%;";
      } else if (width < size[4] || height < size[4]) {
        progressLine.className = "progress-bar bg-warning";
        progressLine.style = "width:75%;";
      } else {
        progressLine.className = "progress-bar bg-success";
        progressLine.style = "width:100%;";
      }
    } else if (dimension == "25x38") {
      if (width < size[5] * danger || height < size[5] * danger) {
        progressLine.className = "progress-bar bg-danger";
        progressLine.style = "width:50%;";
      } else if (width < size[5] || height < size[5]) {
        progressLine.className = "progress-bar bg-warning";
        progressLine.style = "width:75%;";
      } else {
        progressLine.className = "progress-bar bg-success";
        progressLine.style = "width:100%;";
      }
    }
  }
}

// End image quality check

//====================== Calculation ==========================

function cenaPoDimenziji(size) {
  switch (size) {
    case "9x13":
      return 10;
    case "10x15":
      return 15;
    case "13x18":
      return 20;
    case "15x21":
      return 25;
    case "20x30":
      return 30;
    case "25x38":
      return 35;
  }
}

function kalkulacija() {
  let cena = 0;
  let izrada = 0;
  let dostava = 300;

  const thumbs = Array.prototype.slice.call(document.getElementsByClassName("thumbs"));
  for (let i = 0; i < thumbs.length; i++) {
    cena += cenaPoDimenziji(thumbs[i].querySelector("select.sizeSelect").value) * thumbs[i].querySelector("input").value;
    izrada += 1 * thumbs[i].querySelector("input").value;
  }

  if (cena >= 1000) {
    dostava = 0;
  } else if (cena == 0) {
    dostava = 0;
  } else {
    dostava = 300;
  }

  const ukupno = cena + dostava;

  document.getElementById("cena").innerHTML = cena;
  document.getElementById("dodatih").innerHTML = thumbs.length;
  document.getElementById("dostava").innerHTML = dostava;
  document.getElementById("zaIzradu").innerHTML = izrada;
  document.getElementById("ukupno").innerHTML = ukupno;
}

//End calculation

// ====================== Create listener for div change - runs on every "thumbs" DOM change ===========================

const target = document.querySelector("#thumbnails");
// create an observer instance
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (document.getElementById("thumbnails").hasChildNodes()) {
      // Enable delete all button and purchase button
      document.getElementById("obrisiSve").disabled = false;
      document.getElementById("kupovina").disabled = false;

      // remova sample text
      const sample = document.getElementById("sample");
      sample.className = "row hidden";

      // Show pricing
      const cenovnik = document.getElementById("cenovnik");
      cenovnik.className = "container cenovnik";

      // CHECK ASPECT RATIO AND ADJUST ORIENTATION
      const nizSlika = document.getElementsByClassName("upload-image");
      for (let i = 0; i < nizSlika.length; i++) {
        if (nizSlika[i].naturalWidth > nizSlika[i].naturalHeight) {
          nizSlika[i].parentElement.classList.add("landscape");
        }
      }

      // DELETE BUTTON FUNCTION
      const deleteButtonList = document.getElementsByClassName("deleteImg");
      for (let i = 0; i < deleteButtonList.length; i++) {
        deleteButtonList[i].addEventListener(
          "click",
          function(e) {
            e.currentTarget.parentNode.parentNode.parentNode.remove();
          },
          false
        );
      }
    } else {
      // Disable delete all button
      document.getElementById("obrisiSve").disabled = true;
      document.getElementById("kupovina").disabled = true;
      const cenovnik = document.getElementById("cenovnik");
      cenovnik.className = "container cenovnik hidden";
      const sample = document.getElementById("sample");
      sample.className = "row";
    }

    // Calculate
    kalkulacija();

    //CHECK QUALITY
    checkQuality();
  });
});

// configuration of the observer:
const config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

// NICE SELECT OPTIONS STYLING
$(document).ready(function() {
  $("select").niceSelect();
});

//  ADD CLICK TO UPLOAD
$("#dodaj").on("click", function() {
  $("#files").trigger("click");
});

// CONFIRM DELETE DIALOG POPUP

$(".confirm").confirm({
  text: "Da li sigurno želite da obrišete slike?",
  title: "",
  confirm: function(button) {
    $("#thumbnails").html("");
  },
  cancel: function(button) {
    // nothing to do
  },
  confirmButton: "Da",
  cancelButton: "Ne",
  post: true,
  confirmButtonClass: "btn btn-teal btn-marketing rounded-pill",
  cancelButtonClass: "btn btn-teal btn-marketing rounded-pill btn-outline",
  dialogClass: "modal-dialog"
});

// IMAGE UPLOAD PREVIEW

function previewImages() {
  const preview = document.querySelector("#thumbnails");

  if (this.files) {
    [].forEach.call(this.files, readAndPreview);
  }

  document.querySelector("#files").value = null;

  function readAndPreview(file) {
    // Check file name and file size
    if (!/\.(jpeg|jpg|png)$/i.test(file.name)) {
      return alert(file.name + " nije odgovarajuci fajl.");
    } else if (file.size > 5242880) {
      return alert("Slika " + file.name + " je veća od 5MB!");
    } else if (file.naturalHeight < 1000 || file.naturalWidth < 1000) {
      return alert("Minimalna dimenzija slike je 1000x1000");
    }

    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        // GENERATE IMAGE ELEMENT
        const mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "col-lg-4 col-md-6 thumbs lift");
        const imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "img-div");
        const imgDetails = document.createElement("div");
        imgDetails.setAttribute("class", "imgDetails");
        const imgSelect = document.createElement("div");
        imgSelect.setAttribute("class", "imgSelect");
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "deleteImg");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        const imageName = document.createElement("p");
        imageName.setAttribute("class", "imgName");
        imageName.textContent = file.name;

        // select dimension
        const selectFieldSize = document.createElement("select");
        selectFieldSize.setAttribute("class", "sizeSelect");
        selectFieldSize.addEventListener("change", kalkulacija);
        selectFieldSize.addEventListener("change", checkQuality);
        const size1 = document.createElement("option");
        size1.text = "9x13";
        size1.value = "9x13";
        selectFieldSize.add(size1);
        const size2 = document.createElement("option");
        size2.text = "10x15";
        size2.value = "10x15";
        selectFieldSize.add(size2);
        const size3 = document.createElement("option");
        size3.text = "13x18";
        size3.value = "13x18";
        selectFieldSize.add(size3);
        const size4 = document.createElement("option");
        size4.text = "15x21";
        size4.value = "15x21";
        selectFieldSize.add(size4);
        const size5 = document.createElement("option");
        size5.text = "20x30";
        size5.value = "20x30";
        selectFieldSize.add(size5);
        const size6 = document.createElement("option");
        size6.text = "25x38";
        size6.value = "25x38";
        selectFieldSize.add(size6);
        selectFieldSize.value = document.getElementById("dimenzija").options[document.getElementById("dimenzija").selectedIndex].value;

        // select paper
        const selectFieldPaper = document.createElement("select");
        selectFieldPaper.setAttribute("class", "paperSelect");
        const paper1 = document.createElement("option");
        paper1.text = "Mat";
        paper1.value = "Mat";
        selectFieldPaper.add(paper1);
        const paper2 = document.createElement("option");
        paper2.text = "Sjajan";
        paper2.value = "Sjajan";
        selectFieldPaper.add(paper2);
        selectFieldPaper.value = document.getElementById("papir").options[document.getElementById("papir").selectedIndex].value;

        const qtyInput = document.createElement("input");
        qtyInput.setAttribute("type", "number");
        qtyInput.setAttribute("class", "qtyField");
        qtyInput.setAttribute("min", "1");
        qtyInput.setAttribute("max", "500");
        qtyInput.addEventListener("change", kalkulacija);
        qtyInput.value = document.getElementById("kolicina").value;
        const qualityDiv = document.createElement("div");
        qualityDiv.setAttribute("class", "qualityText");
        qualityDiv.innerHTML = "Kvalitet fotografije";
        const progressBarContainer = document.createElement("div");
        progressBarContainer.setAttribute("class", "progress");
        const progressBar = document.createElement("div");
        progressBar.setAttribute("class", "progress-bar");
        progressBarContainer.appendChild(progressBar);
        const image = new Image();
        image.setAttribute("class", "upload-image");
        image.title = file.name;
        image.src = this.result;
        preview.appendChild(mainDiv);
        mainDiv.appendChild(imgDiv);
        mainDiv.appendChild(imgDetails);
        imgDiv.append(image);
        imgDetails.appendChild(imageName);
        imgDetails.appendChild(imgSelect);
        imgSelect.appendChild(selectFieldSize);
        imgSelect.appendChild(selectFieldPaper);
        imgSelect.appendChild(qtyInput);
        imgSelect.appendChild(deleteButton);
        imgDetails.appendChild(qualityDiv);
        imgDetails.appendChild(progressBarContainer);
        $("select").niceSelect();

        Array.prototype.slice.call(mainDiv.querySelectorAll(".nice-select li.option")).forEach(function(li) {
          li.addEventListener("click", function() {
            setTimeout(kalkulacija, 0);
            setTimeout(checkQuality, 0);
          });
        });
        checkQuality();
        kalkulacija();
      },
      false
    );

    reader.readAsDataURL(file);
  }
}

document.querySelector("#files").addEventListener("change", previewImages, false);
