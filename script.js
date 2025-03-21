// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize EmailJS with your User ID
(function () {
  emailjs.init("3z96EtlDfgAyz-7XL"); // Your User ID
})();

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_62d64ah", "template_ct4b4cu", formData) // Your Service ID and Template ID
    .then(
      function (response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Clear the form
      },
      function (error) {
        alert('Failed to send message. Please try again.');
      }
    );
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open lightbox when a certificate image is clicked
document.querySelectorAll(".certificate-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form data
  const formData = {
    from_name: document.getElementById('name').value, // Sender's name
    from_email: document.getElementById('email').value, // Sender's email
    phone: document.getElementById('phone').value, // Sender's phone (optional)
    message: document.getElementById('message').value, // Sender's message
  };

  // Send email using EmailJS
  emailjs
    .send("service_62d64ah", "template_ct4b4cu", formData) // Your Service ID and Template ID
    .then(
      function (response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Clear the form
      },
      function (error) {
        alert('Failed to send message. Please try again.');
      }
    );
});
