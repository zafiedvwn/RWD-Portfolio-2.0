function myFunction(x) {
    x.classList.toggle("change");
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShow, 5000);
}

function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/JtPxXcTnKUKHO0AG/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("I've received your message :)")
        },
        error: function(){
            alert("Oh no, there's something wrong. Please try again :(")
        }
    });
}
