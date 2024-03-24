document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          typeText("With an anticipated increase in rainfall by x% and y%, our AI analyses suggest implementing green roofing and porous pavements to enhance natural water absorption, thus mitigating the risk of urban flooding. Additionally, the construction of elevated platforms and barriers is recommended to protect critical infrastructure from water damage. These measures, backed by AI-driven simulations, aim to equip urban areas with resilient structures capable of adapting to and withstanding the challenges posed by intensified precipitation patterns. ", entry.target.querySelector("#typedText"));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(document.getElementById("aiInference"));
  });
  
function typeText(text, element) {
    const words = text.split(" ");
    let i = 0;
    function typing() {
      if (i < words.length) {
        // Add the current word and a space, unless it's the last word.
        element.innerHTML += words[i] + (i < words.length - 1 ? ' ' : '');
        i++;
        setTimeout(typing, 200); // Increase timeout to slow down for word-by-word typing.
      }
    }
    typing();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".slider img");
    const explanations = [
      "Weather risks",
      "Wind map explanation",
      "Rain map explanation",
      "Rain map prediction in 2035",
      "Hot weather explanation 🧯",
      "Hot weather prediction explanation 🔥"
    ];
  
    // Initialize the first image and explanation
    images[currentImageIndex].classList.add("active");
    document.getElementById("imageExplanation").innerText = explanations[currentImageIndex];
  
    document.getElementById("next").addEventListener("click", function() {
      changeImage(1);
    });
  
    document.getElementById("prev").addEventListener("click", function() {
      changeImage(-1);
    });
  
    function changeImage(step) {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + step + images.length) % images.length;
      images[currentImageIndex].classList.add("active");
      document.getElementById("imageExplanation").innerText = explanations[currentImageIndex];
    }
  
    // AI Inference Simulation as before
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          typeText("Simulating AI inference...", entry.target.querySelector("#typedText"));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(document.getElementById("aiInference"));
  });
  
  function typeText(text, element) {
    const words = text.split(" ");
    let i = 0;
    function typing() {
      if (i < words.length) {
        element.innerHTML += words[i] + (i < words.length - 1 ? ' ' : '');
        i++;
        setTimeout(typing, 500);
      }
    }
    typing();
  }
  