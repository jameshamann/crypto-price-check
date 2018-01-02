$(document).ready(function(){

      $.ajax({
          url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,LTC,XRP,BCH&tsyms=USD,GBP",
          data: {
              txtsearch: $('#appendedInputButton').val()
          },
          type: "GET",
          dataType: "JSON",
          success: function (data) {
            console.log(data.BTC.GBP)
            var coinPrice = data
            document.getElementById("bitcoin").innerHTML="£"+data.BTC.GBP;
            document.getElementById("ethereum").innerHTML="£"+data.ETH.GBP;
            document.getElementById("litecoin").innerHTML="£"+data.LTC.GBP;
            document.getElementById("ripple").innerHTML="£"+data.XRP.GBP;
            document.getElementById("btcash").innerHTML="£"+data.BCH.GBP;

          },
          error: function (xhr, status) {
              alert("Sorry, there was a problem loading the latest prices! Please try again");
          },
      });

});
