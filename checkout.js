document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");
  
    checkoutForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const city = document.getElementById("city").value;
      const country = document.getElementById("country").value;
      const zip = document.getElementById("zip").value;
  
      const orderInfo = {
        name: name,
        email: email,
        address: address,
        city: city,
        country: country,
        zip: zip,
      };
  
      // In a real application, you would send the orderInfo to your server here.
  
      // Display a thank you message
      const main = document.querySelector("main");
      main.innerHTML = `<h2>Thank you for your order, ${name}!</h2><p>Your order will be shipped to the following address:</p><address>${address}<br>${city}, ${country}<br>${zip}</address>`;
    });
  });
  