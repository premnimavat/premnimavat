document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('responseMessage').innerText = data;
        document.getElementById('contactForm').reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
<br><br>
