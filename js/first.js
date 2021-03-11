

var calculateBtn = document.getElementById('calculate');

// evento al click del bottone calculate

calculateBtn.addEventListener('click', function(){

  var burgerName = document.getElementById('burgername').value;
// se utente non inserisce il nome hamburger
  if (burgerName.length < 1) {

    alert('Insert hamburger name');
// se utente inserisce nome hamburger
  }else {
    var totalPrice = 6;

    var checkboxs = document.getElementsByClassName('ingredient');
// ciclo per trovare elemento flaggato nella lista ingredienti
      for (var i = 0; i < checkboxs.length; i++) {

        var checkboxElem = checkboxs[i];
// se è flaggato il prezzo totale verrà incrementato di ogni ingrediente
        if (checkboxElem.checked) {
          totalPrice += parseInt(checkboxElem.dataset.price);
        }

      }
  }
// array e ciclo per verificare se coupon inserito è valido
  var couponInsert = document.getElementById('coupon').value;
  var arrCoupon = ['mcdonald', 'fiveguys', 'burgerking'];

  for (var i = 0; i < arrCoupon.length; i++) {

    if (couponInsert == arrCoupon[i]) {
      totalPrice = (totalPrice / 100 * 80).toFixed(2);

    }

  }
  console.log(totalPrice);
  document.getElementById('price').innerHTML = totalPrice;

});

// creazione evento al click su tutto il li non solo su checkbox
var listClick = document.getElementsByTagName('li');

  for (var i = 0; i < listClick.length; i++) {


    listClick[i].addEventListener('click', function(){

        var clickedLi = this;
        var clickedLiChildrens = clickedLi.children;
        var clickedCheckbox = clickedLiChildrens[2];

        clickedCheckbox.checked = !clickedCheckbox.checked;
    });

  }
