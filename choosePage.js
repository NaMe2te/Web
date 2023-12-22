document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a[href='" + window.location.pathname + "']");
  
    links.forEach(function(link) {
        link.classList.add("choose-page");
    });
});