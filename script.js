// AI Travel Agent - Main Script

document.addEventListener("DOMContentLoaded", function () {
  // ===== WELCOME SCREEN (index.html) =====
  const beginButton = document.querySelector(".begin-button");

  if (beginButton) {
    beginButton.addEventListener("click", function () {
      console.log("Let's Begin button clicked!");
      // Navigate to form page
      window.location.href = "form.html";
    });
  }

  // ===== FORM SCREEN (form.html) =====
  // Travellers counter
  const minusButton = document.querySelector(".counter-button.minus");
  const plusButton = document.querySelector(".counter-button.plus");
  const travellersCount = document.getElementById("travellers-count");

  if (minusButton && plusButton && travellersCount) {
    let count = parseInt(travellersCount.textContent);

    minusButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (count > 1) {
        count--;
        travellersCount.textContent = count;
      }
    });

    plusButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (count < 20) {
        count++;
        travellersCount.textContent = count;
      }
    });
  }

  // Form submission
  const submitButton = document.querySelector(".submit-button");

  if (submitButton) {
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        travellers: document.getElementById("travellers-count")?.textContent,
        from: document.getElementById("flying-from")?.value,
        to: document.getElementById("flying-to")?.value,
        fromDate: document.getElementById("from-date")?.value,
        toDate: document.getElementById("to-date")?.value,
        budget: document.getElementById("budget")?.value,
      };

      // Validate form
      if (
        !formData.from ||
        !formData.to ||
        !formData.fromDate ||
        !formData.toDate
      ) {
        alert("Please fill in all required fields");
        return;
      }

      // Store data in sessionStorage
      sessionStorage.setItem("tripData", JSON.stringify(formData));

      // Navigate to results
      console.log("Planning trip with data:", formData);
      window.location.href = "results.html";
    });
  }

  // ===== RESULTS SCREEN (results.html) =====
  // Load trip data on results page
  if (document.querySelector(".results-screen")) {
    const tripData = JSON.parse(sessionStorage.getItem("tripData"));

    if (tripData) {
      // Format dates
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear().toString().slice(-2);

        const suffix = (day) => {
          if (day > 3 && day < 21) return "th";
          switch (day % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th";
          }
        };

        return `${day}${suffix(day)} ${month} ${year}`;
      };

      // Update date displays
      const startDateDisplay = document.getElementById("start-date-display");
      const endDateDisplay = document.getElementById("end-date-display");
      const routeDisplay = document.getElementById("route-display");

      if (startDateDisplay && tripData.fromDate) {
        startDateDisplay.textContent = `→ ${formatDate(tripData.fromDate)}`;
      }

      if (endDateDisplay && tripData.toDate) {
        endDateDisplay.textContent = `${formatDate(tripData.toDate)} ←`;
      }

      if (routeDisplay && tripData.from && tripData.to) {
        routeDisplay.textContent = `${tripData.from} → ${tripData.to}`;
      }

      // Fetch AI recommendations from the serverless function
      fetchRecommendations(tripData);
    }

    // Book button handlers
    const bookButtons = document.querySelectorAll(".book-button");
    bookButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const section = index === 0 ? "flight" : "hotel";
        console.log(`Booking ${section}...`);
        
        // Change button text and style to indicate booked
        const buttonText = button.querySelector(".button-text");
        if (buttonText.textContent === "Book") {
          buttonText.textContent = "Booked ✓";
          button.classList.add("booked");
          button.disabled = true;
        }
      });
    });
  }

  console.log("AI Travel Agent initialized");
});

// Function to fetch AI recommendations
async function fetchRecommendations(tripData) {
  const weatherText = document.querySelector('[data-node-id="13:130"]');
  const flightsText = document.querySelector('[data-node-id="13:156"]');
  const hotelText = document.querySelector('[data-node-id="13:163"]');

  // Show loading state
  if (weatherText) weatherText.innerHTML = "<p>Loading recommendations...</p>";

  try {
    // Call the serverless API function
    const response = await fetch("/.netlify/functions/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: tripData.from,
        to: tripData.to,
        fromDate: tripData.fromDate,
        toDate: tripData.toDate,
        budget: tripData.budget,
        travellers: tripData.travellers,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recommendations");
    }

    const recommendations = await response.json();

    // Update the UI with recommendations
    if (weatherText && recommendations.weather) {
      weatherText.innerHTML = `<p>${recommendations.weather}</p>`;
    }

    if (flightsText && recommendations.flights) {
      flightsText.innerHTML = `<p>${recommendations.flights}</p>`;
    }

    if (hotelText && recommendations.hotel) {
      hotelText.innerHTML = `<p>${recommendations.hotel}</p>`;
    }

    console.log("Recommendations loaded:", recommendations);
  } catch (error) {
    console.error("Error fetching recommendations:", error);

    // Show error messages
    if (weatherText)
      weatherText.innerHTML =
        "<p>Unable to load weather recommendations. Please try again.</p>";
    if (flightsText)
      flightsText.innerHTML =
        "<p>Unable to load flight recommendations. Please try again.</p>";
    if (hotelText)
      hotelText.innerHTML =
        "<p>Unable to load hotel recommendations. Please try again.</p>";
  }

  // ===== START AGAIN BUTTON =====
  const startAgainButton = document.getElementById("start-again-btn");

  if (startAgainButton) {
    startAgainButton.addEventListener("click", function () {
      console.log("Start Again button clicked!");
      // Navigate back to welcome screen
      window.location.href = "index.html";
    });
  }
}
