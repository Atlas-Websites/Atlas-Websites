



//   $(window).bind("load", function () {
// // Get the height of the header
// var headerHeight = $("#the-header").height();


// $.address.change(function(evt){
//     var target = "#" + evt["pathNames"][0]; //Get the target from the event data

//     // If there's been some content requested go to it…else go to the top
//     if(evt["pathNames"][0]){
//         var scrollToPosition = $(target).offset().top - headerHeight;
//         $('html').animate({ 'scrollTop': scrollToPosition }, 600);
//     }else{
//         $('html').animate({ 'scrollTop': '0' }, 600);
//     }

//     return false;
// });

// // Attach the click event
// $('a').bind("click", function(e) {
//     // Change the location
//     $.address.value($(this).attr("href"));

//     return false;
// });

//   });




window.addEventListener('load', function () {


  $("#show-me-how").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
    }, 100);
});

});

window.addEventListener('load', function () {


  $("#bottom-of-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-form").offset().top
    }, 100);
});

});

window.addEventListener('load', function () {


  $("#pricing-two").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-form").offset().top
    }, 100);
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
 

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


function sent(){

  var nameCheck = true;
  var emailCheck = true;
  var textCheck = true;




  var name = document.getElementById("name").value;
  name = name.replace(/[^a-zA-Z ]/g, "");
  if (name === "") {
    console.log("Name is bad")
    nameCheck = false;
}
 

  
  var email = document.getElementById("email").value;
  if (email === "" || validateEmail(email) == false) {
    console.log("email is bad")
    emailCheck = false;
}

var text = document.getElementById("question").value;
text = text.replace(/[^a-zA-Z ]/g, "");
if (text === "" ) {
  console.log("text is bad")
  textCheck = false;
}


  // document.getElementById("myForm").submit();

  if (textCheck == true && nameCheck == true & emailCheck == true){
    // document.getElementById("hidden-thankyou").classList.remove("hide");
    // document.getElementById("send-button").classList.add("hide");
  }

}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  /* do what you want with the form */
  document.getElementById("myForm").submit();
  document.getElementById("hidden-thankyou").classList.remove("hide");
  document.getElementById("send-button").classList.add("hide");
  // You must return false to prevent the default form behavior
  return false;
}


window.addEventListener('load', function () {
var form = document.getElementById('myForm');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
});