"use strict";

// const lightbulbBottomSVG = document.querySelector('.lightbulb-bottom');
// const test = lightbulbBottomSVG.getTotalLength();
$(function () {
  // const lightbulbBottomSVG = document.querySelector('.lightbulb-bottom');
  // const test = lightbulbBottomSVG.getTotalLength();
  // console.log(test);
  $("#fontButton").click(function () {
    $("#body").toggleClass("dxyFont");
    $(this).text(function (_, oldText) {
      return oldText === 'Return to original font' ? 'Switch to the OpenDyslexic font' : 'Return to original font';
    });
  });
  $("#hamMenu").click(function () {
    $(this).toggleClass("open");
    $(".hamMenu .hamInner").toggleClass("clicked").fadeIn();
    $("open ul li a").click(function () {
      $("#hamMenu").removeClass("open");
    });
  });
});