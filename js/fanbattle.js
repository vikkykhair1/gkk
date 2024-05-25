$('.how-to').owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: false,
    stagePadding: 60,
    autoplay: false,
    responsive: {
        0: {
            items: 2.5,
            stagePadding: 20,
            margin: 20
            
        },
        1000: {
            items: 4
        }
    }
})