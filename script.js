// let selectedDesign = "";

// document.querySelectorAll(".design-option").forEach((item) => {
//   item.addEventListener("click", function () {
//     document
//       .querySelectorAll(".design-option")
//       .forEach((img) => img.classList.remove("selected"));
//     this.classList.add("selected");
//     selectedDesign = this.getAttribute("data-design");
//   });
// });

// document.getElementById("generate-card").addEventListener("click", function () {
//   const name = document.getElementById("name").value;
//   if (!selectedDesign || !name) {
//     alert("Please select a design and enter your name.");
//     return;
//   }

//   const preview = document.getElementById("card-preview");
//   // Here you would replace with actual logic to overlay text on the image
//   preview.innerHTML = `<img src="${selectedDesign}.jpg" alt="Selected Design"><h2 style="position: absolute; margin-top: -80px; width: 100%; text-align: center; color: white;">${name}</h2>`;
// });

// document.querySelectorAll(".design-option").forEach((item) => {
//   item.addEventListener("click", function () {
//     const selectedDesign = this.getAttribute("data-design");
//     window.location.href = `customize.html?design=${selectedDesign}`;
//   });
// });

document.querySelectorAll(".card").forEach((item) => {
  item.addEventListener("click", function () {
    const selectedDesign = this.getAttribute("data-design");
    // Redirect to the customization page with the selected design as a URL parameter
    window.location.href = `customize.html?design=${selectedDesign}`;
  });
});
