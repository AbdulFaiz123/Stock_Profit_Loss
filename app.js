var initialPrice = document.querySelector("#initial-stock");

var stocksQuantity = document.querySelector("#stocks-quantity");

var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");

var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {

    var ip = Number(initialPrice.value);
    var sq = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    if (ip==0 && sq ==0 && curr == 0){
        alert("Please input a value ");
    }
    else{
        calculateProfitAndLoss(ip,sq,curr);
    }
  
}



function calculateProfitAndLoss(inital,quantity,current){
    if(inital>current){
        //loss
        var loss = (inital - current) * quantity;

        var lossPercentage = (loss/inital) * 100;
        // loss.style.color = 'red';
       

        showOutput(`Hey the loss ${loss.toFixed(2)} and the percent ${lossPercentage.toFixed(2)}%`);
     
    }
    else if(current>inital){
        //profit

        var profit = (current-inital)*quantity;

        var profitPercent = (profit/inital) * 100;

        showOutput(`Hey the profit ${profit.toFixed(2)} and the percent ${profitPercent.toFixed(2)}%`);
    }
    else{
        //rest logic
       showOutput(`no pain no gain and no gain no pain`);
    }
}

function showOutput(message){
  
    outputBox.innerHTML = message;
   
}

