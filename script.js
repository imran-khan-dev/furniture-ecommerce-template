function checkScreenSize() {
    const warningMessage = document.getElementById('screen-size-warning');

    if (window.innerWidth < 1450) {
        warningMessage.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // prevent scrolling
    } else {
        warningMessage.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}

// Run the check when the page loads
window.onload = checkScreenSize;

// Run the check whenever the window is resized
window.onresize = checkScreenSize;


// Slide Function for Feaure Prodcut

let currentFeatureSlide = 0;

function showFeatureSlide(index) {
    const featureSlider = document.querySelector('.feature-product-slider');
    const featureSlides = Array.from(featureSlider.children);
    const totalFeatureSlides = featureSlides.length;
    const featureSlidesToShow = 4;

    // Ensure the index stays within valid boundaries
    if (index < 0) {
        currentFeatureSlide = 0;
    } else if (index >= totalFeatureSlides - featureSlidesToShow) {
        currentFeatureSlide = 0;
    } else {
        currentFeatureSlide = index;
    }

    const featureSlideWidth = featureSlides[0].offsetWidth + 24; // 24 is the margin-right to the width
    featureSlider.style.transform = `translateX(-${currentFeatureSlide * featureSlideWidth}px)`;
}

function nextFeatureSlide() {
    showFeatureSlide(currentFeatureSlide + 1);
}

function prevFeatureSlide() {
    showFeatureSlide(currentFeatureSlide - 1);
}


// Slide Function for Recently Added Product

let currentRecentProduct = 0;

function showRecentProduct(index) {
    const recentProductSlider = document.querySelector('.recently-product-slider');
    const recentProductSlides = Array.from(recentProductSlider.children);
    const totalRecentProductSlides = recentProductSlides.length;
    const recentProductToShow = 4;

    // Ensure the index stays within valid boundaries
    if (index < 0) {
        currentRecentProduct = 0;
    } else if (index >= totalRecentProductSlides - recentProductToShow) {
        currentRecentProduct = 0;
    } else {
        currentRecentProduct = index;
    }

    const recentProductSlideWidth = recentProductSlides[0].offsetWidth + 24; // 24 is the margin-right to the width
    recentProductSlider.style.transform = `translateX(-${currentRecentProduct * recentProductSlideWidth}px)`;
}

function nextRecentProductSlide() {
    showRecentProduct(currentRecentProduct + 1);
}

function prevRecentProductSlide() {
    showRecentProduct(currentRecentProduct - 1);
}


// Slide Function for Testimonials

let currentTestimonialSlide = 0;

function showTestimonialSlide(index) {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialSlides = Array.from(testimonialSlider.children);
    const totalTestimonialSlides = testimonialSlides.length;
    const testimonialSlidesToShow = 2;

    // Check if the last set of slides is fully shown and Set boundaries
    if (index < 0) {
        currentTestimonialSlide = 0;
    } else if (index > totalTestimonialSlides - testimonialSlidesToShow) {
        currentTestimonialSlide = 0;
    } else {
        currentTestimonialSlide = index;
    }

    const testimonialSlideWidth = testimonialSlides[0].offsetWidth + 24; // 24 is the margin-right to the width
    testimonialSlider.style.transform = `translateX(-${currentTestimonialSlide * testimonialSlideWidth}px)`;
}

function nextTestimonialSlide() {
    showTestimonialSlide(currentTestimonialSlide + 1);
}

function prevTestimonialSlide() {
    showTestimonialSlide(currentTestimonialSlide - 1);
}

// Testimonial Slides Height Adjustment
window.onload = function () {
    setEqualHeight();
};

window.onresize = function () {
    setEqualHeight();
};

function setEqualHeight() {
    const testimonialsTextHeight = document.querySelectorAll('.testimonial-text-style');
    let maxHeight = 0;

    // Reset height to auto for all testimonials before calculating
    testimonialsTextHeight.forEach(testimonial => {
        testimonial.style.height = 'auto';
    });

    // Find the maximum height
    testimonialsTextHeight.forEach(testimonial => {
        const height = testimonial.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Set all testimonials to the maximum height
    testimonialsTextHeight.forEach(testimonial => {
        testimonial.style.height = maxHeight + 'px';
    });
}


// Slide Function for Header

let currentHeaderSlide = 0;

function showHeaderSlide(index) {
    const headerSlider = document.querySelector('.header-slider');
    const headerSlides = Array.from(headerSlider.children);
    const dots = document.querySelectorAll('.dot');
    const totalHeaderSlides = headerSlides.length;

    if (index >= totalHeaderSlides) {
        currentHeaderSlide = 0;
    } else if (index < 0) {
        currentHeaderSlide = totalHeaderSlides - 1;
    } else {
        currentHeaderSlide = index;
    }

    const headerSlideWidth = headerSlides[0].offsetWidth + 15; // 15 is the margin-right to the width
    headerSlider.style.transform = `translateX(-${currentHeaderSlide * headerSlideWidth}px)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentHeaderSlide].classList.add('active');
}

function nextHeaderSlide() {
    showHeaderSlide(currentHeaderSlide + 1);
}

function prevHeaderSlide() {
    showHeaderSlide(currentHeaderSlide - 1);
}

// Initialize the first dot as active
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.dot')[currentHeaderSlide].classList.add('active');
});


// Slide Function for Top Category Section

let currentCategory = 0;

function showCategories(index) {
    const categorySlider = document.querySelector('.category-item-slider');
    const categorySlides = Array.from(categorySlider.children);
    const totalCategorySlides = categorySlides.length;
    const categorySlidesToShow = 3;

    // Check if the last set of slides is fully shown
    if (index < 0) {
        currentCategory = 0;
    } else if (index > totalCategorySlides - categorySlidesToShow) {
        currentCategory = 0;
    } else {
        currentCategory = index;
    }

    const categorySlideWidth = categorySlides[0].offsetWidth + 24; // 24 is the margin-right to the width
    categorySlider.style.transform = `translateX(-${currentCategory * categorySlideWidth}px)`;
}

function nextCategory() {
    showCategories(currentCategory + 1);
}

function prevCategory() {
    showCategories(currentCategory - 1);
}


// Our Products functionality
const getElement = (selector) => document.querySelector(selector);

const productNav = document.querySelectorAll(".products-btn");
const allProdcutBtn = getElement('.all-default');

// Function to hide all products while changing button click
const hideAllProduct = document.querySelectorAll('.dynamicHidden');

function hideAll() {
    hideAllProduct.forEach(function (product) {
        product.classList.remove('show');
        product.classList.add('hidden');
    });
}

function showProduct(element) {
    element.classList.remove('hidden');
    setTimeout(() => {
        element.classList.add('show');
    }, 10);
}

productNav.forEach(function (prodcutBtn) {
    allProdcutBtn.classList.add('custom-underline');
    allProdcutBtn.classList.add('text-secondary');
    showProduct(getElement('.all-products'));

    prodcutBtn.addEventListener("click", function () {
        productNav.forEach(function (btn) {
            btn.classList.remove('custom-underline');
            btn.classList.remove('text-secondary');
        });
        allProdcutBtn.classList.remove('custom-underline');
        allProdcutBtn.classList.remove('text-secondary');

        prodcutBtn.classList.add('custom-underline');
        prodcutBtn.classList.add('text-secondary');

        hideAll();

        if (prodcutBtn.getAttribute('data-value') === '1') {
            showProduct(getElement('.all-products'));
        } else if (prodcutBtn.getAttribute('data-value') === '2') {
            showProduct(getElement('.newest-products'));
        } else if (prodcutBtn.getAttribute('data-value') === '3') {
            showProduct(getElement('.trending-products'));
        } else if (prodcutBtn.getAttribute('data-value') === '4') {
            showProduct(getElement('.best-sellers-products'));
        } else {
            showProduct(getElement('.featured-products'));
        }
    });
});

