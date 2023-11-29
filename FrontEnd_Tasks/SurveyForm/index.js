function submitForm() 
{
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var dob = document.getElementById('dob').value;
        var country = document.getElementById('country').value;
        var gender = getSelectedCheckboxes('gender');
        var profession = document.getElementById('profession').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('mobile').value;

        
        if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
            alert('Please fill in all fields.');
            return;
        }

        
        var popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(', ')}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
            <button onclick="closeFunction()">Close</button>
        `;

        document.getElementById('popup').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';

        
    }

    function getSelectedCheckboxes(name) {
        var checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        var values = Array.from(checkboxes).map(checkbox => checkbox.value);
        return values;
    }

    var closeFunction = (event)=> 
    {
        resetForm();
    };
    function resetForm() 
    {
        document.getElementById('surveyForm').reset();
        var popup = document.getElementById('popup');
        popup.style.display='none';
    }

    
