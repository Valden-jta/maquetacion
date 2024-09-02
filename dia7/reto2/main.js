let precioTotal = 0;
modal = $('.modal-body');

jQuery(() => {
    $('.card').each((_, card) => {
        $(card).find('.botonCarrito').on('click', function() {
            let prenda = $(this).closest('.card').find('.card-title').text();
            let precio = $(this).closest('.card').find('.precio').text();

            console.log('resumen: ' + prenda + ', ' + precio);
            modal.prepend('<p>PRENDA: ' + prenda + ', ' + precio + '</p>');
            precioTotal += parseFloat(precio.replace(' €', ''));
            console.log('importe total: ' + precioTotal);
            $('#precioTotal').html(precioTotal.toFixed(2));   //toFixed -> decimales
        });
    });



});



// document.querySelectorAll('.card').forEach((card, index) => {
//     card.querySelector('.botonCarrito').addEventListener('click', () => {
//       let prenda = card.querySelector('.card-title').textContent;
//       let importe = card.querySelector('.precio').textContent;
  
//       modal.innerHTML += `<p>PRENDA: ${prenda}, ${importe}</p>`;
//       precioTotal += precios[index];
//       document.getElementById('precioTotal').innerHTML = precioTotal;
//       console.log('Precio total:', precioTotal);
//     });
//   });
