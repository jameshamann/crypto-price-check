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
            document.getElementById("bitcoingbp").innerHTML="£"+data.BTC.GBP;
            document.getElementById("bitcoinusd").innerHTML="$"+data.BTC.USD;
            document.getElementById("ethereumgbp").innerHTML="£"+data.ETH.GBP;
            document.getElementById("ethereumusd").innerHTML="$"+data.ETH.USD;
            document.getElementById("litecoingbp").innerHTML="£"+data.LTC.GBP;
            document.getElementById("litecoinusd").innerHTML="$"+data.LTC.USD;
            document.getElementById("ripplegbp").innerHTML="£"+data.XRP.GBP;
            document.getElementById("rippleusd").innerHTML="$"+data.XRP.USD;
            document.getElementById("btcashgbp").innerHTML="£"+data.BCH.GBP;
            document.getElementById("btcashusd").innerHTML="$"+data.BCH.USD;
          },
          error: function (xhr, status) {
              alert("Sorry, there was a problem loading the latest prices! Please try again");
          },
      });

});
