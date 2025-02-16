
// COUNTERS
// Get allValues using querySelectorAll
let allValues = document.querySelectorAll(".value");

// Start the forEach loop for displaying the values
allValues.forEach((singleValue) => {
  let startValue = 0;
  let endValue = parseInt(singleValue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  // Counter for increaing the values & display
  let counter = setInterval(function () {
    startValue += 1;
    singleValue.textContent = startValue;
    // Clearing the interval
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// BURGER MENU
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  burger.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      burger.classList.toggle("open");
  });

  document.querySelectorAll(".mobile-menu a").forEach(item => {
      item.addEventListener("click", function () {
          mobileMenu.classList.remove("active");
          burger.classList.remove("open");
      });
  });
});


