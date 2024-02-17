Shery.imageEffect("#back", {
    style: 5,
    config: {
        a: { value: 0.5, range: [0, 30] },
        b: { value: -0.98, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 2.059912852038785 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 2.27, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.03, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1000 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0, range: [0, 2] },
        noise_scale: { value: 74.38, range: [0, 100] },
    },

    // config: {
    //     a: { value: 2, range: [0, 30] },
    //     b: { value: -0.98, range: [-1, 1] },
    //     zindex: { value: -9996999, range: [-9999999, 9999999] },
    //     aspect: { value: 2.059912852038785 },
    //     gooey: { value: true },
    //     infiniteGooey: { value: true },
    //     growSize: { value: 4, range: [1, 15] },
    //     durationOut: { value: 1, range: [0.1, 5] },
    //     durationIn: { value: 1, range: [0.1, 5] },
    //     displaceAmount: { value: 0.5 },
    //     masker: { value: true },
    //     maskVal: { value: 1, range: [1, 5] },
    //     scrollType: { value: 0 },
    //     geoVertex: { range: [1, 64], value: 1 },
    //     noEffectGooey: { value: true },
    //     onMouse: { value: 1 },
    //     noise_speed: { value: 0.2, range: [0, 10] },
    //     metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    //     discard_threshold: { value: 0.5, range: [0, 1] },
    //     antialias_threshold: { value: 0, range: [0, 0.1] },
    //     noise_height: { value: 0.31, range: [0, 2] },
    //     noise_scale: { value: 9.92, range: [0, 100] },
    // },
    gooey: true,
});

// Slides start

document.addEventListener("DOMContentLoaded", function () {

    new Glide(".glide", {
        type: "carousel",
        perView: 1,
        focusAt: "center",
        breakpoints: {
            768: {
                perView: 2,
            },
        },
    }).mount();

    // Dummy data for 18 cards
    const cardsData = [
        {
            image: "assets/SliderAssets/image-1.jpg",
            heading: "Drawing Room",
            description:
                "Transform your living space with our exquisite drawing room interior design. Elevate the ambiance with carefully curated elements that blend modern elegance with timeless charm. Our skilled designers craft personalized solutions, harmonizing colors",
        },
        {
            image: "assets/SliderAssets/image-2.webp",
            heading: "Wallscaping",
            description:
                "Elevating interiors through creative wall design, combining colors and textures for a stylish and personalized touch.",
        },
        {
            image: "assets/SliderAssets/image-3.jpeg",
            heading: "Washroom Designs",
            description:
                "Transform your washroom into a sanctuary of style and functionality with our carefully curated designs. Discover spaces where every detail is thoughtfully crafted, offering both elegance and practicality.",
        },
        {
            image: "assets/SliderAssets/image-4.jpeg",
            heading: "Roman Design",
            description:
                "Elevate your space with the timeless allure of Roman design, where classical elegance meets contemporary living. Immerse yourself in a realm of opulence and sophistication that stands the test of time.",
        },
        {
            image: "assets/SliderAssets/image-5.jpeg",
            heading: "Rooms",
            description:
                "Transform your rooms into personalized sanctuaries, blending comfort with style. Our designs seamlessly fuse functionality and aesthetics, creating spaces that resonate with your unique lifestyle and preferences.",
        },
        {
            image: "assets/SliderAssets/image-6.jpeg",
            heading: "Homes",
            description:
                "Elevate your home interiors with our expert touch, where every detail is meticulously crafted to reflect your taste and personality. Our designs bring harmony, sophistication, and functionality, creating homes that embody both comfort and elegance.            ",
        },
        {
            image: "assets/SliderAssets/image-7.webp",
            heading: "Kitchen",
            description:
                "Transform your kitchen into a culinary haven with our innovative designs. Blending style and functionality, we create spaces that inspire creativity and make every cooking experience a joy. Welcome to a kitchen where aesthetics meet efficiency seamlessly.            ",
        },
        {
            image: "assets/SliderAssets/image-8.jpeg",
            heading: "Dining Nook",
            description:
                "Create an intimate dining nook that exudes warmth and style. Our designs turn every meal into a delightful experience, combining comfort and aesthetics for a space that feels inviting and chic.",
        },
        {
            image: "assets/SliderAssets/image-9.webp",
            heading: "Premium Designs",
            description:
                "Experience luxury at its finest with our premium interior designs.Immerse yourself in sophisticated elegance and unparalleled craftsmanship, curated to transform your space into a haven of opulence. ",
        },
        {
            image: "assets/SliderAssets/image-10.jpeg",
            heading: "Drawing Room",
            description:
                "Elevate your Drawing Room with our curated designs, blending style and comfort seamlessly. Transform your space into a haven of sophistication, where every detail whispers elegance. ",
        },
        {
            image: "assets/SliderAssets/image-11.webp",
            heading: "Workplace",
            description:
                "Transform your workspace into a haven of productivity and inspiration. Our designs marry functionality with elegance, creating an environment that fosters creativity and enhances your professional journey.",
        },
        {
            image: "assets/SliderAssets/image-12.jpeg",
            heading: "Timeless Elegance",
            description:
                "Experience opulence with our Roman-inspired interior designs, blending classical aesthetics with modern comfort for a truly lavish living space",
        },
        // ... Repeat for the remaining cards
    ];

    const glideContainer = document.querySelector(".glide__slides");

    cardsData.forEach((card) => {
        const slideElement = document.createElement("li");
        slideElement.classList.add("glide__slide");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.heading}" class="card-image">
            <div class="card-content">
                <h2 class="card-heading">${card.heading}</h2>
                <p class="card-description">${card.description}</p>
            </div>
        `;

        slideElement.appendChild(cardElement);
        glideContainer.appendChild(slideElement);
    });

    new Glide(".glide", {
        type: "carousel",
        perView: 4,
        focusAt: "center",
        autoplay: 3000,
        breakpoints: {
            768: {
                perView: 2,
            },
        },
    }).mount();
});
// Slides ends
new Glide(".glide", {
    type: "carousel",
    perView: 1,
    focusAt: "center",
    breakpoints: {
        768: {
            perView: 2,
        },
    },
}).mount();


const currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = new Date().getFullYear();

// init Masonry
var grid = document.querySelector(".grid");

var msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    layoutMode: "fitRows", // Use fitRows for no gaps
});

imagesLoaded(grid).on("progress", function () {
    // layout Masonry after each image loads
    msnry.layout();
});

// Masonry ends

// FAQ's start

function toggleAnswer(id) {
    var question = document.querySelector(
        ".faq-item:nth-child(" + id + ") .question"
    );
    var answer = document.querySelector(
        ".faq-item:nth-child(" + id + ") .answer"
    );

    question.classList.toggle("open");
    answer.classList.toggle("open");
}

// FAQ's ends
