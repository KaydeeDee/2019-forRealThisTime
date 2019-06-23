"use strict";

// const lightbulbBottomSVG = document.querySelector('.lightbulb-bottom');
// const test = lightbulbBottomSVG.getTotalLength();
$(function () {
  $("#fontButton").click(function () {
    $("#body").toggleClass("dxyFont");
    $(this).text(function (_, oldText) {
      return oldText === 'Click here to return to original font' ? 'Click here to use the OpenDyslexic font' : 'Click here to return to the original font';
    });
  });
});