document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('review-form');
    const reviewNameInput = document.getElementById('review-name');
    const reviewTextInput = document.getElementById('review-text');
    const reviewsList = document.getElementById('reviews-list');
  
    reviewForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const reviewName = reviewNameInput.value.trim();
      const reviewText = reviewTextInput.value.trim();
  
      if (reviewName && reviewText) {
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `<strong>${reviewName}</strong>: ${reviewText}`;
        reviewsList.appendChild(reviewItem);
  
        // Clear input fields after successful submission
        reviewNameInput.value = '';
        reviewTextInput.value = '';
      }
    });
  });
  