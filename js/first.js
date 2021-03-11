
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
  }

  var couponInsert = document.getElementById('coupon').value;
  var arrCoupon = ['mcdonald', 'fiveguys', 'burgerking'];

  for (var i = 0; i < arrCoupon.length; i++) {
    var couponOk = arrCoupon[i];

    if (couponInsert == couponOk) {
      totalPrice = (totalPrice / 100 * 80).toFixed(2);

    }

  }

  document.getElementById('price').innerHTML = totalPrice;

})
