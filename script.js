$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('a').on('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
   
});


document.getElementById("facebook-link").addEventListener("click", function() {
  window.open("https://www.facebook.com", "_blank");
});

document.getElementById("twitter-link").addEventListener("click", function() {
  window.open("https://www.twitter.com", "_blank");
});

document.getElementById("instagram-link").addEventListener("click", function() {
  window.open("https://www.instagram.com", "_blank");
});

document.getElementById("linkedin-link").addEventListener("click", function() {
  window.open("https://www.linkedin.com", "_blank");
});
