// function isElementInViewport(elem) {
//     var $elem = $(elem);

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('.bar .level');

//     // If the animation has already been started
//     if ($elem.hasClass('start')) return;

//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('start');
//     }
// }

// // Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });

// Scroll to specific values
// scrollTo is the same

// window.scroll({
//     top: 2500, 
//     left: 0, 
//     behavior: 'smooth'
//   });
  
//   // Scroll certain amounts from current position 
//   window.scrollBy({ 
//     top: 100, // could be negative value
//     left: 0, 
//     behavior: 'smooth' 
//   });
  
//   // Scroll to a certain element
//   document.querySelector('.hello').scrollIntoView({ 
//     behavior: 'smooth' 
//   });

  


  // JS QUERYS


//   // Are we on mobile??
//   $(document).ready(function() {
//     // run test on initial page load
    

//     checkSize();
   

//     // run test on resize of the window
//     $(window).resize(checkSize);
// });

// //Function to the css rule
// function checkSize(){

//     // Checks if we're on mobile size
//     if ($(".nav-text").css("display") == "inline-block" ){
//       console.log("We're on mobile")


//       // Check if it's in the old place.
//       if ( $(".left-box-element").parents("#left-box-container").length == 1 ){
//         console.log("Mobile & Element in old place")
//         $('#left-box-element').prependTo('.right-block-container');
//         $("#left-box-element").removeClass("mobile-leftside");
//         $("#left-box-element").addClass("desktop-rightside");
//       }
//     }

//     // We're not on mobile size
    
//     else  {
//       console.log("Not on mobile");

//       if ($("#left-box-element").hasClass("mobile-leftside") && !$("#left-box-element").hasClass("desktop-rightside")){

//         if ($("#left-box-element").hasClass("mobile-leftside")){
//           console.log("mobile to desk")
//           $('#left-box-element').prependTo('.left-box-container');
//           $("#left-box-element").removeClass("mobile-leftside");
//           $("#left-box-element").addClass("desktop-rightside");
//           }

//       }

      
      
//     }
// }




// $(window).on('resize', function(){
//   var win = $(this);
//   if (win.width() >= 766) {
//       $('#moveableFilter').prependTo('.left-bar');
//   } else if (win.width() < 767) {
//       $('#moveableFilter').prependTo('.mobile-top-bar');
//   }
// });


// const mediaQuery = window.matchMedia('(max-width: 768px)')

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     // Then log the following message to the console
//     $('#left-box-element').prependTo('left-box-container');
//   }
//   else {
//     $('#left-box-element').prependTo('.right-block-container');
//   }
// }

// Register event listener
// mediaQuery.addListener(handleTabletChange)

// // Initial check
// handleTabletChange(mediaQuery)

  // $(window).on('size', function(){
  //   var win = $(this);
  //   if (win.width() >= 768) {
  //       $('#left-box-element').prependTo('left-box-container');
  //   } else if (win.width() < 768) {
  //       $('#left-box-element').prependTo('.right-block-container');
  //   }
  // })



  $(window).bind("load", function () {
// Get the height of the header
var headerHeight = $("#the-header").height();


$.address.change(function(evt){
    var target = "#" + evt["pathNames"][0]; //Get the target from the event data

    // If there's been some content requested go to it…else go to the top
    if(evt["pathNames"][0]){
        var scrollToPosition = $(target).offset().top - headerHeight;
        $('html').animate({ 'scrollTop': scrollToPosition }, 600);
    }else{
        $('html').animate({ 'scrollTop': '0' }, 600);
    }

    return false;
});

// Attach the click event
$('a').bind("click", function(e) {
    // Change the location
    $.address.value($(this).attr("href"));

    return false;
});

  });

function removeClasses(){
  $("#home-text").removeClass("active-nav-text");
  $("#about-us-text").removeClass("active-nav-text");
  $("#service-text").removeClass("active-nav-text");
  $("#websites-text").removeClass("active-nav-text");
  $("#contact-text").removeClass("active-nav-text");
}


// About
$(window).scroll(function() {
  var top_of_element = $("#bottom-of-about").offset().top;
  var bottom_of_element = $("#bottom-of-about").offset().top + $("#bottom-of-about").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    // need to add a check first
    removeClasses();
    $("#about-us-text").addClass("active-nav-text");
    

  } else {
      // the element is not visible, do something else
  }
});

// Home
$(window).scroll(function() {
  var top_of_element = $("#home-page").offset().top;
  var bottom_of_element = $("#home-page").offset().top + $("#home-page").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    // need to add a check first
    removeClasses()
    $("#home-text").addClass("active-nav-text");
    

  } else {
      // the element is not visible, do something else
  }
});

// services 

$(window).scroll(function() {
  var top_of_element = $("#web-create").offset().top;
  var bottom_of_element = $("#web-create").offset().top + $("#web-create").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    // need to add a check first
    removeClasses()
    $("#service-text").addClass("active-nav-text");
    

  } else {
      // the element is not visible, do something else
  }
});

// websites 

$(window).scroll(function() {
  var top_of_element = $("#websites").offset().top;
  var bottom_of_element = $("#websites").offset().top + $("#websites").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    // need to add a check first
    removeClasses()
    $("#websites-text").addClass("active-nav-text");
    

  } else {
      // the element is not visible, do something else
  }
});


// Contact Text
$(window).scroll(function() {
  var top_of_element = $("#contact").offset().top;
  var bottom_of_element = $("#contact").offset().top + $("#contact").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
    // need to add a check first
    removeClasses()
    $("#contact-text").addClass("active-nav-text");
    

  } else {
      // the element is not visible, do something else
  }
});
 

