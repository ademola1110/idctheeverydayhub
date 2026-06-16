// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

// Gallery Lightbox

const previews = document.querySelectorAll(".preview");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeBtn");

previews.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");

    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  lightbox.classList.add("hidden");
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
};
