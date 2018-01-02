$(document).ready(function(){

      $.ajax({
          url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,LTC,XRP,BCH,IOT&tsyms=USD,GBP,EUR",
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
            document.getElementById("bitcoineur").innerHTML="€"+data.BTC.EUR;
            document.getElementById("ethereumgbp").innerHTML="£"+data.ETH.GBP;
            document.getElementById("ethereumusd").innerHTML="$"+data.ETH.USD;
            document.getElementById("ethereumeur").innerHTML="€"+data.ETH.EUR;
            document.getElementById("litecoingbp").innerHTML="£"+data.LTC.GBP;
            document.getElementById("litecoinusd").innerHTML="$"+data.LTC.USD;
            document.getElementById("litecoineur").innerHTML="€"+data.LTC.EUR;
            document.getElementById("ripplegbp").innerHTML="£"+data.XRP.GBP;
            document.getElementById("rippleusd").innerHTML="$"+data.XRP.USD;
            document.getElementById("rippleeur").innerHTML="€"+data.XRP.EUR;
            document.getElementById("btcashgbp").innerHTML="£"+data.BCH.GBP;
            document.getElementById("btcashusd").innerHTML="$"+data.BCH.USD;
            document.getElementById("btcasheur").innerHTML="€"+data.BCH.EUR;
            document.getElementById("iotgbp").innerHTML="£"+data.IOT.GBP;
            document.getElementById("iotusd").innerHTML="$"+data.IOT.USD;
            document.getElementById("ioteur").innerHTML="€"+data.IOT.EUR;



          },
          error: function (xhr, status) {
              alert("Sorry, there was a problem loading the latest prices! Please try again");
          },
      });

});
