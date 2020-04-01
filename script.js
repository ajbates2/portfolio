let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("top-nav").style.top = "0";
  } else {
    document.getElementById("top-nav").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}

$('#nav-links').on('click', 'a', function(event) {
  event.preventDefault();
  let id = $(this).attr('href').substr(1);
  let element = document.getElementById(`${id}`);
   element.scrollIntoView({behavior: "smooth"});
})

$(document).ready(function() {
    $('#top-nav').on('click', function(event) {
      $('#hamburger').toggle('fast');
      $('#nav-links').slideToggle('fast');
    });
});

$('.grid-header-info').on('click', 'a', function(event) {
  event.preventDefault();
  let id = $(this).attr('href').substr(1);
  let element = document.getElementById(`${id}`);
   element.scrollIntoView({behavior: "smooth"});
})