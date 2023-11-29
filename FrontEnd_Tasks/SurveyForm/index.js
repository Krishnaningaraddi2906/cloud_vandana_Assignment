function submitForm() {
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var dob = document.getElementById('dob').value;
        var country = document.getElementById('country').value;
        var gender = getSelectedCheckboxes('gender');
        var profession = document.getElementById('profession').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;

        // Validate all fields
        if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
            alert('Please fill in all fields.');
            return;
        }

        // Display the values in a popup
        var popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(', ')}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
            <button ${onclick={resetForm}}>Close</button>
        `;

        document.getElementById('popup').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';

        // Reset the form
        resetForm();
    }

    function getSelectedCheckboxes(name) {
        var checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        var values = Array.from(checkboxes).map(checkbox => checkbox.value);
        return values;
    }

    function resetForm() {
        document.getElementById('surveyForm').reset();
    }

    // Close the popup on clicking outside it
    window.onclick = function (event) {
        var popup = document.getElementById('popup');
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };