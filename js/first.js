
var calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(){
  var checkboxs = document.getElementsByClassName('ingredient');
    for (var i = 0; i < checkboxs.length; i++) {
      var checkboxElem = checkboxs[i]
      var priceElem = parseInt(checkboxElem.dataset.value);
      console.log(checkboxElem, priceElem);
    }


})
