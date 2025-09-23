document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".molecules");

  // Your images from assets/images folder
  const images = [
    "assets/images/chemical_image1.svg",
    "assets/images/chemical_image2.png",
    "assets/images/chemical_image3.png",
    
    "assets/images/chemical_image5.png",
    "assets/images/chemical_image6.png"
  ];

  function spawnMolecule() {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];

    // Random horizontal position
    img.style.left = Math.random() * 100 + "vw";

    // Random size
    img.style.width = (Math.random() * 50 + 30) + "px";

    // Random animation duration
    const duration = Math.random() * 10 + 15; // 15–25s
    img.style.animationDuration = duration + "s";

    container.appendChild(img);

    // Remove after animation completes
    setTimeout(() => {
      img.remove();
    }, duration * 1000);
  }

  // Keep spawning new molecules every 2.5 seconds
  setInterval(spawnMolecule, 1000);
});



document.addEventListener("scroll", () => {
  const scrollBar = document.querySelector(".scroll-bar");
  
  // Calculate scroll progress
  const scrollTop = window.scrollY; 
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  // Update bar height
  scrollBar.style.height = scrollPercent + "vh";
});

