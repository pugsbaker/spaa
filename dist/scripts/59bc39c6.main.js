"use strict";!function(){$(document).ready(function(){var a=this;$.getJSON("data/data.json",function(b){a.data=b}),$.get("templates/main.mustache",function(b){var c=Mustache.render(b,a.data);$("#target").html(c),$(".background").first().addClass("active")}),setInterval(function(){a.changeSlide()},25e3),this.changeSlide=function(){var a=$(".background.active"),b=$(".background").last().hasClass("active");a.removeClass("active"),b?$(".background").first().addClass("active"):a.next().addClass("active")}})}();