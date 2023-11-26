// Function to find the input checkbox inside an element with a specific title
function findInputIdByLabel(labelText: string, classes:string): HTMLInputElement | null {
    const labels = document.querySelectorAll(classes);
  
    for (const label of labels) {
      if (label.textContent === labelText) {
        const input = label.nextElementSibling as HTMLInputElement;
        if (input && input.tagName === 'INPUT' && input.type === 'checkbox') {
          return input;
        }
      }
    }
  
    return null;
  }

// Function to get the input element by ID
function getInputById(inputId: string): HTMLInputElement | null {
    const inputElement = document.getElementById(inputId) as HTMLInputElement | null;
    return inputElement;
  }


// Function to check the checkbox when the page loads
function checkCheckboxOnPageLoad() {
    // Function to repeatedly check for the checkbox element
    const checkForCheckbox = () => {
        const checkboxFinalPrice = findInputIdByLabel("Τελική τιμή", '.personalization-settings .toggle-switch-label') as HTMLInputElement;
        const availabilityButton = getInputById("availability-now");
  
        // Check the checkbox if it exists
        if (checkboxFinalPrice && !checkboxFinalPrice.checked) {
            checkboxFinalPrice.click();;
        } else {
           // If the elements are not found, retry after a short delay
           setTimeout(checkForCheckbox, 1000); // Adjust the delay as needed
        }

        if (availabilityButton && !availabilityButton.checked) {
          availabilityButton.click();
        } else {
          // If the elements are not found, retry after a short delay
          setTimeout(checkForCheckbox, 1000); // Adjust the delay as needed
        }
      };
  
      // Start checking for the checkbox
      checkForCheckbox();
    }
  
    // Run the function when the content script is injected into the page
    checkCheckboxOnPageLoad();
