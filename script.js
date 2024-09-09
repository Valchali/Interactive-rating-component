// Global variable to store the selected rating
let selectedRating = 0;

// Function to handle rating button clicks
function selectRating(rating) {
  selectedRating = rating;
  console.log("Rating selected: " + selectedRating);
}

// Function to store the rating in localStorage when Submit is clicked
function submitRating() {
  if (selectedRating > 0) {
    // Store the selected rating in localStorage
    localStorage.setItem('rating', selectedRating);
    console.log("Rating saved to localStorage: " + selectedRating);
    // Redirect to the second page (desktop.html)
    window.location.href = './desktop.html';
  } else {
    alert("Please select a rating before submitting!");
  }
}

// Function to load and display the rating from localStorage on the thank-you page
function displayRating() {
  // Get the rating from localStorage
  const rating = localStorage.getItem('rating');
  
  // Check if a rating is available
  if (rating) {
    // Display the rating in the p element with the class 'field'
    document.querySelector('.field').textContent = `You selected ${rating} out of 5`;
  } else {
    document.querySelector('.field').textContent = `No rating selected`;
  }
}

// This function ensures that the correct JavaScript runs on each page
function initializePage() {
  if (document.body.classList.contains('rating-page')) {
    // On the rating page, nothing special is needed as functions are triggered by button clicks
    console.log("Rating page loaded.");
  } else if (document.body.classList.contains('thank-you-page')) {
    // On the thank-you page, display the rating
    displayRating();
  }
}

// Call initializePage when the page loads
window.onload = initializePage;
