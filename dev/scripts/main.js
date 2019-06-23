// const lightbulbBottomSVG = document.querySelector('.lightbulb-bottom');
// const test = lightbulbBottomSVG.getTotalLength();

$(function (){
    $("#fontButton").click(function() {
        $("#header").toggleClass("dxyFont"); 
        $("#body").toggleClass("dxyFont");
        $(this).text(function (_, oldText) {
            return oldText === 'Click here to return to original font' ? 'Click here to use Dxy Font' : 'Click here to return to original font';
        });
    })
});


