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

$(document).ready(function() {
    $('#top-nav').on('click', '#hamburger', function(event) {
      $('#nav-links').slideToggle('fast');
      $('#hamburger').hide();
    });
    $('#top-nav').on('click', '#nav-links', function(event) {
      $('#hamburger').slideToggle('fast');
      $('#nav-links').hide();
    })
  })

  $('#nav-links').on('click', 'a', function(event) {
    event.preventDefault();
    let id = $(this).attr('href').substr(1);
    let element = document.getElementById(`${id}`);
    element.scrollIntoView({behavior: "smooth"});
  })