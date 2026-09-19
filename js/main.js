lucide.createIcons();

// =========================
// GALERÍA COMPLETA
// =========================

const openGallery = document.getElementById("openGallery");
const closeGallery = document.getElementById("closeGallery");
const galleryModal = document.getElementById("galleryModal");

openGallery.addEventListener("click", () => {

    galleryModal.classList.add("active");

    document.body.style.overflow = "hidden";

});

closeGallery.addEventListener("click", () => {

    galleryModal.classList.remove("active");

    document.body.style.overflow = "";

});

// Cerrar haciendo clic fuera del contenido
galleryModal.addEventListener("click", (e) => {

    if (e.target === galleryModal) {

        galleryModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        galleryModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});

// =========================
// LIGHTBOX
// =========================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

const galleryImages = document.querySelectorAll(".gallery-grid img");

let currentImage = 0;

// Abrir imagen
galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentImage = index;

        showImage();

        lightbox.classList.add("active");

    });

});

// Mostrar imagen actual
function showImage(){

    lightboxImage.src = galleryImages[currentImage].src;

}

// Cerrar
closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Cerrar dando clic al fondo
lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

// Siguiente
nextImage.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage();

});

// Anterior
prevImage.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage();

});

// Teclado
document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextImage.click();

    }

    if(e.key==="ArrowLeft"){

        prevImage.click();

    }

});