function handleButtonClick() {
    alert('Your interest in volunteering has filled us with gratitude for the impact being made! Please press "Close" and fill out the form listed below.');
}

document.addEventListener('DOMContentLoaded', function () {
    var volunteerButton = document.getElementById('volunteerButton');
    var formContainer = document.getElementById('volunteerFormContainer');

    volunteerButton.addEventListener('click', function () {
        var form = document.createElement('form');
        form.id = 'volunteerForm';

        var nameLabel = document.createElement('label');
        nameLabel.textContent = 'Name:';
        form.appendChild(nameLabel);

        var nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'name';
        nameInput.name = 'name';
        form.appendChild(nameInput);

          form.appendChild(document.createElement('br'));

          var emailLabel = document.createElement('label');
          emailLabel.textContent = 'Email:';
          form.appendChild(emailLabel);
  
          var emailInput = document.createElement('input');
          emailInput.type = 'email';
          emailInput.id = 'email';
          emailInput.name = 'email';
          form.appendChild(emailInput);
  
          form.appendChild(document.createElement('br'));
          
        var messageLabel = document.createElement('label');
        messageLabel.textContent = 'Message:';
        form.appendChild(messageLabel);

        var messageTextarea = document.createElement('textarea');
        messageTextarea.id = 'message';
        messageTextarea.name = 'message';
        form.appendChild(messageTextarea);

         form.appendChild(document.createElement('br'));

        var submitButton = document.createElement('button');
        submitButton.type = 'button'; 
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', submitForm);
        form.appendChild(submitButton);

        formContainer.innerHTML = '';
        formContainer.appendChild(form);
    });
});

function submitForm() {
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
    var messageValue = document.getElementById('message').value;

    alert('Form submitted!\nName: ' + nameValue + '\nEmail: ' + emailValue + '\nMessage: ' + messageValue);
}

var imageIndex = 0;

function showNextImage() {
}

document.addEventListener('DOMContentLoaded', function () {

    var currentSlideIndex = 0;
    var slides = document.getElementById('imageSlideshow').getElementsByTagName('img');
    var totalSlides = slides.length;

    showSlide(currentSlideIndex);

    function showSlide(index) {
        if (index < 0) {
            currentSlideIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlideIndex = 0;
        } else {
            currentSlideIndex = index;
        }

        for (var i = 0; i < totalSlides; i++) {
            slides[i].style.display = 'none';
        }

        slides[currentSlideIndex].style.display = 'block';
    }

    function showNextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlideIndex - 1);
    }

    var nextButton = document.getElementById('nextButton');
    var prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPreviousSlide);
});