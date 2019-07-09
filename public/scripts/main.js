"use strict";

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
  $("#hamContainer").click(function () {
    $(this).toggleClass("open");
    $(".hamMenu").toggleClass("active");
    $(".hamMenu").toggleClass("inActive");
    $(".open ul li a").click(function () {
      $("#hamContainer").removeClass("open");
    });
  });
});