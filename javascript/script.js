window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // 
      navbar.style.backgroundColor = "#ffff"; 
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });
  