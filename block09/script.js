<script>
document.addEventListener "DOMContentLoaded", function() {
const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEachlink  {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        })
    }
</script>