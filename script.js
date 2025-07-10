document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    // Select tab content item
    function selectItem(e) {
        // Remove all show and border classes
        removeBorder();
        removeShow();
        // Add border to current tab
        this.classList.add('tab-border');
        // Grab content item from DOM
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        // Add show class
        tabContentItem.classList.add('show');
    }

    // Remove bottom borders from all tab items
    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    // Remove show class from all content items
    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('show');
        });
    }

    // Listen for tab click
    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });

    // Carousel functionality
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Counter
    let counter = 0;
    const size = carouselImages[0].clientWidth + 10; // 10px for margin

    // Set initial position
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Button listeners
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length / 2 - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Reset transition when reaching end
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImages[counter].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

    // Responsive adjustments
    window.addEventListener('resize', () => {
        const newSize = carouselImages[0].clientWidth + 10;
        carouselSlide.style.transition = "none";
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});