

const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = form.elements.name.value;
    alert(`Form submitted with name: ${name}`);
});

