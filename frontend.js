//  "Buy now" button placed next to "Add to card" 
//  button in product archive pages with ajax add to cart enabled.
//  It provides user a shortcut by redirecting to checkout 
//  immediately after the product has been added to cart.

function buyNow() {
  $(' [jsHandle="buynow"] ').on( 'click', function() {  // finds buttons with jsHandle="buynow" attribute
    $(this).closest('li').find( ".button" ).trigger( "click" ); // trigger click on add to cart button
    $( document.body ).on( 'added_to_cart', function() { // WAIT UNTI
      location.href = "/checkout" ;   });
    });
  });
 }

    
