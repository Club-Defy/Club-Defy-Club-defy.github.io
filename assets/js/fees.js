let visible = ["BTC", "ETH", "BNB", "SOL", "MATIC", "DOGE", "TRX", "XRP", "XLM", "LTC", "USDT", "USDC", "BUSD"];
let main = ["BTC", "ETH", "BNB", "SOL", "MATIC", "DOGE", "TRX", "XRP", "XLM", "LTC", "USDT", "USDC", "BUSD"];
let feesList = {
    "BTC": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/BTC.svg",
        token: "BTC",
        coinName: "Bitcoin",
        alertUser: true,
        alertMessage: "",
        network: [
            {

                withdrawalFees: 0.0012,
                name: "Bitcoin network",
                minWithdraw: 0.0000049,
                minDeposit: 0.0002,
                depositFee: "Free",
                noOfBlockConfirmations: 2
            }
        ]
    },
    "ETH": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/ETH.svg",
        token: "ETH",
        coinName: "Ethereum",
        alertUser: false,
        network: [
            {

                name: "Ethereum (ERC20)",
                withdrawalFees: 0.01,
                minWithdraw: 0.16,
                minDeposit: 0.00002,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "BNB": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/BNB.svg",
        token: "BNB",
        coinName: "Binance",
        alertUser: false,
        network: [
            {

                name: "Binance smart chain (BEP20)",
                withdrawalFees: 0.001,
                minWithdraw: 0.16,
                minDeposit: 0.00002,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "SOL": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/SOL.svg",
        token: "SOL",
        coinName: "Solana",
        alertUser: false,
        network: [
            {

                name: "Solana network",
                withdrawalFees: 0.005,
                minWithdraw: 0.02,
                minDeposit: 0.002,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "MATIC": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/MATIC.svg",
        token: "MATIC",
        coinName: "Polygon",
        alertUser: false,
        network: [
            {

                name: "Polygon network",
                withdrawalFees: 0.1,
                minWithdraw: 10,
                minDeposit: 0.2,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "DOGE": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/DOGE.svg",
        token: "DOGE",
        coinName: "Doge",
        alertUser: true,
        alertMessage: "",
        network: [
            {

                withdrawalFees: 1,
                name: "Doge Network",
                minWithdraw: 10,
                minDeposit: 2,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "TRX": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/TRX.svg",
        token: "TRX",
        coinName: "Tron",
        alertUser: false,
        network: [
            {

                name: "TRC-20",
                withdrawalFees: 1,
                minWithdraw: 2,
                minDeposit: 2,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "XRP": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/XRP.svg",
        token: "XRP",
        coinName: "Ripple",
        alertUser: false,
        network: [
            {

                name: "Ripple Network",
                withdrawalFees: 0.1,
                minWithdraw: 1,
                minDeposit: 0.5,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "XLM": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/XLM.svg",
        token: "XLM",
        coinName: "Steller",
        alertUser: false,
        network: [
            {

                name: "Steller Network",
                withdrawalFees: 0.1,
                minWithdraw: 2,
                minDeposit: 1,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "LTC": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/LTC.svg",
        token: "LTC",
        coinName: "Litecoin",
        alertUser: false,
        network: [
            {

                name: "Litecoin Network",
                withdrawalFees: 0.01,
                minWithdraw: 0.01,
                minDeposit: 0.002,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "USDT": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/USDT.svg",
        token: "USDT",
        coinName: "Tether",
        alertUser: false,
        network: [
            {

                name: "Ethereum (ERC20)",
                withdrawalFees: 2,
                minWithdraw: 25,
                minDeposit: 10,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "USDC": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/USDC.svg",
        token: "USDC",
        coinName: "United States dollar",
        alertUser: false,
        network: [
            {

                name: "Binance smart chain (BEP20)",
                withdrawalFees: 0.3,
                minWithdraw: 25,
                minDeposit: 1,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    },
    "BUSD": {
        imageLink: "https://walrusappassets.s3.ap-south-1.amazonaws.com/cryptoicons/BUSD.svg",
        token: "BUSD",
        coinName: "Binance USD",
        alertUser: false,
        network: [
            {

                name: "Binance smart chain (BEP20)",
                withdrawalFees: 0.3,
                minWithdraw: 25,
                minDeposit: 1,
                depositFee: "Free",
                noOfBlockConfirmations: 3
            }
        ]
    }
}

function populateFees(visible, feesList) {
    let listContainer = document.getElementById("feeDisplayed");
    listContainer.innerHTML = "";
    visible.forEach(coinCode => {
        let tokenInfo = feesList[coinCode];
        if(tokenInfo === undefined || tokenInfo === null) return;
        let noOfNetworks = tokenInfo.network.length
        let iterator = 0;
        let row = document.createElement("tr");
        row.className = "feesRow";

        let img = document.createElement("img");
        img.className = "tokenImg";
        img.src = tokenInfo.imageLink;
        img.alt = "Coin image";

        let token = document.createElement("span")
        token.className = "tokenText"
        token.style.marginLeft = "5px";
        token.innerText = coinCode

        let coin = document.createElement("td");
        coin.classList.add("feesCell");
        coin.classList.add("tokenAlign");
        coin.style.width = "12%";
        coin.appendChild(img);
        coin.appendChild(token);
        row.appendChild(coin);

        let coinName = document.createElement("td");
        coinName.className = "feesCell";
        coinName.style.width = "12%";
        coinName.innerText = tokenInfo.coinName;
        row.appendChild(coinName);

        let infoImg = document.createElement("img");
        infoImg.src = "assets/images/info.png";
        infoImg.alt = "info";
        infoImg.className = "infoAlert";

        let infoMessage = document.createElement("span");
        infoMessage.className = "tooltiptext";
        infoMessage.innerText = tokenInfo.alertMessage;

        let infoAlert = document.createElement("div");
        infoAlert.className = "tooltip";
        infoAlert.appendChild(infoImg);
        infoAlert.appendChild(infoMessage);

        let coinNetwork = document.createElement("td");
        coinNetwork.className = "feesCell";
        coinNetwork.style.width = "14.5%";
        coinNetwork.innerHTML = "";
        while (iterator < noOfNetworks) {
            coinNetwork.innerHTML += tokenInfo.network[iterator].name + "<br>";
            iterator++;
        }
        iterator = 0;
        row.appendChild(coinNetwork);
        
        let minWithdraw = document.createElement("td");
        minWithdraw.className = "feesCell";
        minWithdraw.style.width = "12.5%";
        minWithdraw.innerHTML = "";
        while (iterator < noOfNetworks) {
            minWithdraw.innerHTML += tokenInfo.network[iterator].minWithdraw + "<br>";
            iterator++;
        }
        iterator = 0;
        row.appendChild(minWithdraw);

        let withdraw = document.createElement("td");
        withdraw.className = "feesCell";
        withdraw.style.width = "12.5%";
        withdraw.style.display = "inline-block";
        withdraw.innerHTML = ""
        while (iterator < noOfNetworks) {
            withdraw.innerHTML += tokenInfo.network[iterator].withdrawalFees + " " + coinCode;
            if (tokenInfo.alertUser) withdraw.appendChild(infoAlert);
            withdraw.innerHTML += "<br>"
            iterator++
        }
        iterator = 0;
        row.appendChild(withdraw);

        let minDeposit = document.createElement("td");
        minDeposit.className = "feesCell";
        minDeposit.style.width = "12%";
        minDeposit.innerHTML = "";
        while (iterator < noOfNetworks) {
            minDeposit.innerHTML += tokenInfo.network[iterator].minDeposit + "<br>";
            iterator++;
        }
        iterator = 0;
        row.appendChild(minDeposit);

        let depositFee = document.createElement("td");
        depositFee.className = "feesCell";
        depositFee.style.width = "12%";
        depositFee.innerHTML = "";
        while (iterator < noOfNetworks) {
            depositFee.innerHTML += "Free" + "<br>";
            iterator++;
        }
        iterator = 0;
        row.appendChild(depositFee);

        let blocks = document.createElement("td");
        blocks.className = "feesCell";
        blocks.style.width = "12.5%";
        blocks.innerHTML = "";
        while (iterator < noOfNetworks) {
            blocks.innerHTML += tokenInfo.network[iterator].noOfBlockConfirmations + "<br>";
            iterator++;
        }
        row.appendChild(blocks);

        listContainer.appendChild(row);
    });
}

function sideMenu() {
    $('.navBarBox').click(function () {
        $('.sidemenu').addClass('sidemenuActive');
    });
    $('.sidemenuColse').click(function () {
        $('.sidemenu').removeClass('sidemenuActive');
    })
}


function spotActive() {
    $('#spot').addClass('btnFeesActive');
    $('#withdraw').removeClass('btnFeesActive');
    $('#deposit').removeClass('btnFeesActive');
    document.getElementById('spotInfo').style.display = "block";
    document.getElementById('withdrawInfo').style.display = "none";
    document.getElementById('depositInfo').style.display = "none";
    document.styleSheets[6].addRule("#banner:before", "height: 20%")
}

function withdrawActive() {
    $('#spot').removeClass('btnFeesActive');
    $('#withdraw').addClass('btnFeesActive');
    $('#deposit').removeClass('btnFeesActive');
    document.getElementById('spotInfo').style.display = "none";
    document.getElementById('withdrawInfo').style.display = "block";
    document.getElementById('depositInfo').style.display = "none";
    document.styleSheets[6].addRule("#banner:before", "height: 15%")
    getData()
}

function depositActive() {
    $('#spot').removeClass('btnFeesActive');
    $('#withdraw').removeClass('btnFeesActive');
    $('#deposit').addClass('btnFeesActive');
    document.getElementById('spotInfo').style.display = "none";
    document.getElementById('withdrawInfo').style.display = "none";
    document.getElementById('depositInfo').style.display = "block";
    document.styleSheets[6].addRule("#banner:before", "height: 20%")
}

function filterData(input) {
    if (input) {
        let inputClose = document.getElementById("inputClose");
        inputClose.innerText = "X";
        inputClose.addEventListener('click', clear)
    } else document.getElementById("inputClose").innerText = "";
    let tokenFilter = visible.filter((token) => token.startsWith(input));
    for(var token in feesList) {
        let coinName = feesList[token].coinName.toUpperCase();
        if (coinName.startsWith(input) && tokenFilter.indexOf(token) < 0) {
            tokenFilter.push(token)
        }
    }
    populateFees(tokenFilter, feesList)
}

function filterCoins(event) {
    let input = event.target.value.toUpperCase();
    filterData(input)
}

function clear() {
    document.getElementById("inputValue").value = "";
    filterData("");
    visible = main.slice();
}

function getData() {
    fetch("https://mb.clubdefy.io/adm/v1/crypto/withdraw/fee")
        .then(res => res.json())
        .then(res => {
            let metaData = res.data
            visible = Object.keys(metaData)
            main = Object.keys(metaData)
            feesList = metaData
            populateFees(Object.keys(metaData), metaData)
        }).catch(err => {
            console.log(err)
        })
}

sideMenu()