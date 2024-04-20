function updateTotal() {
    let totalPrecio = 0;
    const quantityInputs = document.querySelectorAll('input[name="quantity"]');
    
    quantityInputs.forEach(input => {
      const productId = input.dataset.productId;
      const productPrice = parseFloat(input.parentElement.previousElementSibling.textContent.replace('$', ''));
      const quantity = parseInt(input.value);
      totalPrecio += productPrice * quantity;
    });


    document.querySelector('.total p').textContent = `Total: $${totalPrecio.toFixed(2)}`;
  }


