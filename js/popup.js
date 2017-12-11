$(document).ready(function(){

      $.ajax({
          url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,LTC&tsyms=USD,GBP",
          data: {
              txtsearch: $('#appendedInputButton').val()
          },
          type: "GET",
          dataType: "JSON",
          success: function (data) {
            console.log(data)
            var coinPrice = data
          },
          error: function (xhr, status) {
              alert("Sorry, there was a problem loading the latest prices! Please try again");
          },
      });

});
