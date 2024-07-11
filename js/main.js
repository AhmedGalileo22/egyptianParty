/// <reference types="../@types/jquery" />

$(".sidebaropen").on("click", function () {
  $(".sidebaropen").animate({ marginLeft: "200px" });
  $(".side-nav").animate({ width: "200px" });
});

$(".fa-x").on("click", function () {
  $(".side-nav").animate({ width: "0px" });
  $(".sidebaropen").animate({ marginLeft: "0px" });
});

$(".side-nav a[href]").on("click", function (e) {
  let hrefPath = $(e.target).attr("href");
  let scrollPosition = $(hrefPath).offset().top;
  $("html ,body").animate({ scrollTop: scrollPosition }, 300);
});



$(".bt").on("click", function (e) {
    var targetP = $(e.target).next("p");
    $(targetP).slideToggle(500);
    $(e.target).siblings("p").not($(e.target).next("p")).slideUp(500);
    
});



function timeCount(){
  let partytDate = new Date("2024-07-20 22:00:00").getTime()/1000;
 let now = new Date().getTime()/1000
 let displayedTime = partytDate-now
 let days = Math.floor (displayedTime/(3600*24))
 let hours = Math.floor ((displayedTime-(days*(3600*24)))/3600)
 let minutes = Math.floor((displayedTime-(days*(3600*24))-(hours*3600))/60)
 let seconds = Math.floor((displayedTime-(days*(3600*24))-(hours*3600)-(minutes*60)))
 console.log(days,hours,minutes,seconds);
 $('#Day').text(days+'d')
 $('#Hour').text(hours+'h')
 $('#Min').text(minutes+'m')
 $('#sec').text(seconds+'s')
}
setInterval(timeCount,1000)



$('#limitChar').on('keyup', function () {
    let charval = $('#limitChar').val().length;
    if(charval<=100){
        $('.conter').html(`${100 - charval} `);
    }
    else {
        $('.conter').html(`Not allowed`);
    }
});
