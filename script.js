
/*Project Details */
/*project details page*/
let currentIndex = 0;

function showSlide(index) {
    const projectSlider = document.querySelector('.project-slider');
    const projectSlides = document.querySelectorAll('.project-slide');
    if (index >= projectSlides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = projectSlides.length - 1;
    } else {
        currentIndex = index;
    }
    projectSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById('project-next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

document.getElementById('project-prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});
//image counter//
$(document).ready(function(){
    $('.counter-number').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },

        {
            duration: 2000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }

        });
    });
});


//gallery filter
// gallery filter starts **gallery section (homepage)**
$(document).ready(function(){
    $(".list").click(function(){
        const value=$(this).attr("data-filter");
        if(value == "all"){
            $(".gal-photo").show("1000")
        }
        else{
            $(".gal-photo").not("." + value).hide("1000")
            $(".gal-photo").filter("." + value).show("1000")
        }
    })
    //Active class on buttons
    $(".list").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
   }) 
// gallery filter ends **gallery section (homepage)**
//homepage testimonial slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
}
