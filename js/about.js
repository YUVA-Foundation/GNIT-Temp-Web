$('.dc').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:3000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:3
        },
        1025:{
            items:4
        }
    }
})

$('.awards').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1025:{
            items:2
        }
    }
})