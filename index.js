document.addEventListener("DOMContentLoaded", function () {
  // Отварање на Signup (Login со Invite код)
  document.getElementById("signupBtn").addEventListener("click", function () {
    document.getElementById("signupModal").classList.remove("hidden");
  });

  // Затворање на Signup Modal
  document
    .getElementById("closeModalBtn")
    .addEventListener("click", function () {
      document.getElementById("signupModal").classList.add("hidden");
      document.getElementById("errorMessage").classList.add("hidden"); // Скриј ја грешката при затворање
    });

  // Валидација на INVITE код
  document
    .getElementById("signupSubmit")
    .addEventListener("click", function () {
      const inviteCode = document.getElementById("inviteCode").value;
      const validCode = "INV2025REDPY"; // Валиден код (можеш да го смениш)

      if (inviteCode !== validCode) {
        document.getElementById("errorMessage").classList.remove("hidden"); // Прикажи "Access Denied!"
      } else {
        alert("✅ Signup Successful! You Can Now Login to Your Account");
        document.getElementById("signupModal").classList.add("hidden");
      }
    });

  // Отварање на Login (Sign in)
  document.getElementById("signinBtn").addEventListener("click", function () {
    document.getElementById("loginForm").classList.remove("hidden");
  });
  // Затворање на Login Form
  document
    .getElementById("closeLoginBtn")
    .addEventListener("click", function () {
      document.getElementById("loginForm").classList.add("hidden");
    });
});

document.addEventListener("alpine:init", () => {
  Alpine.data("faq", () => ({
    openFaq: null,
    toggle(id) {
      this.openFaq = this.openFaq === id ? null : id;
    },
    isOpen(id) {
      return this.openFaq === id;
    },
  }));
});

// QR Code generation
const qrCodeContainer = document.getElementById("qr-code");

const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  data: "https://www.example.com/payment-usdt", // Replace with your actual USDT wallet address or payment link
  image: "https://www.example.com/your-logo.png", // Replace with your logo if needed
  dotsOptions: {
    color: "#000",
    type: "rounded",
  },
  cornersSquareOptions: {
    type: "extra-rounded",
  },
  cornersDotOptions: {
    type: "square",
  },
});

qrCode.append(qrCodeContainer);

// Modal show and hide functionality
const payBtn = document.getElementById("payBtn");
const paymentModal = document.getElementById("paymentModal");

payBtn.addEventListener("click", () => {
  // Show modal and simulate loading
  paymentModal.style.display = "flex";

  // Simulate a payment process (you can replace this with actual logic)
  setTimeout(() => {
    paymentModal.style.display = "none";
    alert("Payment completed successfully!"); // You can replace this with an actual success message or redirect
  }, 5000); // Simulate 5 seconds loading
});
