// Slide Show Scripts

var slideIndex=0;
var $slides = $('.slides');
var $dot = $('.dot');
var timer = null;

showSlides();

$('.slideshow-next').click(function(){
    clearTimeout(timer);
    showSlides();
});

$('.slideshow-prev').click(function(){
    clearTimeout(timer);
    prevSlide();
});

$('.dot').click(function(){
    if ($(this).hasClass('dot-1')){
        // First Image
        clearTimeout(timer);
        slideIndex = 0;
        showSlides();
    
    }else if($(this).hasClass('dot-2')){
        // Second Image
        clearTimeout(timer);
        slideIndex = 1;
        showSlides()

    }else if($(this).hasClass('dot-3')){
        // Third Image
        clearTimeout(timer);
        slideIndex = 2;
        showSlides()

    }else{
        // Fourth Image
        clearTimeout(timer);
        slideIndex = 3;
        showSlides();
    }
});

function showSlides(){
    for (i=0; i<$slides.length; i++){
        $slides[i].style.display="none";
        $('.dot').eq(i).css('background-color', 'white')
    }

    if(slideIndex === $slides.length){
        slideIndex = 0;
    }  
    $slides.eq(slideIndex).fadeIn(1000);
    $('.dot').eq(slideIndex).css('background-color', '#660000');
    slideIndex++;
    timer = setTimeout(showSlides, 5000);
};

function prevSlide(){
    slideIndex = slideIndex - 2;
    for (i=0; i<$slides.length; i++){
        $slides[i].style.display="none";
        $('.dot').eq(i).css('background-color', 'white')
    }

    if(slideIndex < 0){
        slideIndex = $slides.length - 1;
    }  
    $slides.eq(slideIndex).fadeIn(1000);
    $('.dot').eq(slideIndex).css('background-color', '#660000');
    slideIndex++;
    timer = setTimeout(showSlides, 5000);
};