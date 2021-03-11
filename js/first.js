
var calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(){

  var burgerName = document.getElementById('burgername').value;

  if (burgerName.length < 1) {

    alert('Insert hamburger name');

  }else {
    var totalPrice = 6;
    var checkboxs = document.getElementsByClassName('ingredient');

      for (var i = 0; i < checkboxs.length; i++) {

        var checkboxElem = checkboxs[i]
        var flag = checkboxElem.checked;
        var priceElem = parseInt(checkboxElem.dataset.price);

        if (flag) {

          totalPrice += priceElem;
        }

      }
      console.log(priceElem);
  }





})
