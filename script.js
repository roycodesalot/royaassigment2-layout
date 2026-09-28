/*--
  Name: Roy Aguilar
  Date: 09.16.2026
  CSC 372-01

  This is the scirpt.js page for my portfolio of web development work. It includes links to
  side projects I have done during CSC 372, including an AboutMe page, a blog template, and
  a crytogram generator. 
*/

// Wrap everything in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    // Select your elements from the DOM
    const eventcard = document.querySelectorAll(".event-card");
    const sumcontainer = document.getElementById("saved-event");

    // Set up the initial "No saved events" message
    let newElement = document.createElement("p");
    newElement.textContent = "No Events Have Been Saved.";
    sumcontainer.appendChild(newElement);

    // Helper function to toggle empty message visibility
    function Helper() {
        let count = sumcontainer.querySelectorAll(".saved-item").length;

        if (count === 0) {
            newElement.style.display = "block";
        } else {
            newElement.style.display = "none";
        }
    }

    // Loop through each event card
    eventcard.forEach(function (card) {
        // Create a <button> element
        const btn = document.createElement("button");
        btn.textContent = "Save Event";

        // Append the button to the current 'card'
        card.appendChild(btn);

        // State variables to track save state and store <li> element
        let isSaved = false;
        let summaryItem = null;

        // Click event listener
        btn.addEventListener("click", function () {
            if (isSaved === false) {
                // Add highlight class to card
                card.classList.add("highlight");

                // Change btn text to "Remove Event"
                btn.textContent = "Remove Event";

                // Extract text details from card
                let title = card.querySelector("h3").textContent;
                let date = card.querySelector(".event-meta").textContent;
                let location = card.querySelector(".location").textContent;

                // Create a <li> element, set textContent, and append to sumcontainer
                summaryItem = document.createElement("li");
                summaryItem.classList.add("saved-item");
                summaryItem.textContent = title + " | " + date + " | " + location;
                sumcontainer.appendChild(summaryItem);

                // Update state
                isSaved = true;
            } else {
                // Remove highlight class from card
                card.classList.remove("highlight");

                // Change btn text back to "Save Event"
                btn.textContent = "Save Event";

                // Remove summaryItem from DOM
                summaryItem.remove();

                // Reset state variables
                summaryItem = null;
                isSaved = false;
            }

            Helper();
        });
    });
});