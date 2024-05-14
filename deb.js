<script>
    function scrollToFooter() {
        // Wait for 3 seconds before scrolling to the footer
        setTimeout(function() {
            document.querySelector('#footer').scrollIntoView({
                behavior: 'smooth'
            });
        }, 3000)
    }
</script>



document.addEventListener("DOMContentLoaded", function() {
  const cartIcon = document.getElementById("cart-icon");
  const cartButtons = document.getElementById("cart-buttons");
  
  cartIcon.addEventListener("click", function() {
      if (cartButtons.style.display === "none") {
          cartButtons.style.display = "block";
      } else {
          cartButtons.style.display = "none";
      }
  });
});

