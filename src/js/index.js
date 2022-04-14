import "./import/modules";
import "./import/components";
import Web3 from "./import/web3.min";
window.Web3 = Web3;

let web3;

const USDT_ADDRESS = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const NCT_SELL_ADDRESS = "0x96eb85e181175e3f1624842be13a214679c97db1";
const NCT_ADDRESS = "0x75e35522ec4fd6d815191c2a4134477a33cfd829";
const ABI_TOKEN =
  JSON.parse(`[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},
{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},
{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},
{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},
{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);
const ABI_SELLER = JSON.parse(
  `[{"inputs":[{"internalType":"address","name":"_tokenSell","type":"address"},{"internalType":"address","name":"_tokenBuy","type":"address"},{"internalType":"address","name":"_seller","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountBuy","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountSell","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"Ref","type":"event"},{"inputs":[{"internalType":"uint256","name":"_amountSell","type":"uint256"}],"name":"getAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxAmount","type":"uint256"}],"name":"setMaxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMinAmount","type":"uint256"}],"name":"setMinAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountSell","type":"uint256"},{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"swap","outputs":[{"internalType":"uint256","name":"_amountBuy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenBuy","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSell","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`
);
const price = 0.15;
const gasMaxForSwap = 450000;
const gasBoost = 1.15; // 1.15 == 15%

function round(n, p) {
  const d = 10 ** p;
  return Math.floor(n * d) / d;
}

async function getGasPrice() {
  if (gasBoost > 5) throw new Error(`gas boost`);
  const basePrice =  await web3.eth.getGasPrice();
  return Math.floor(basePrice * gasBoost);
}

let minUSDT = 7500,
  minNCT = 50000;

const endSaleTime = '2022.04.18';
let saleHint = document.querySelector('.exchanger .hint');
let saleTextHidden = document.querySelector('.exchanger .sale-text');
// let saleTimerBlock = document.querySelector('.exchanger .sale-text .number');

window.onload = function(){
  if (getTimeRemaining(endSaleTime).total > 0){
    minUSDT = 500;
    minNCT = 3333;
    saleHint.classList.add('sale');
    saleTextHidden.classList.add('active');
  }
}

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// 

function initializeClock(timer, endtime) {
  let clock = document.getElementById(timer);

  function updateClock() {
    var t = getTimeRemaining(endtime);

    let daysSpan = t.days;
    let hoursSpan = ('0' + t.hours).slice(-2);
    let minutesSpan = ('0' + t.minutes).slice(-2);
    let secondsSpan = ('0' + t.seconds).slice(-2);
    clock.innerHTML = ' ' + daysSpan + 'd  ' + hoursSpan +':'+minutesSpan+':'+secondsSpan;

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

initializeClock('timer', endSaleTime);
// 


window.updateUSDTAmount = async function () {
  const amount = document.querySelector('input[name="nct"]').value * price;
  if (amount < minUSDT) {
    document.querySelector(".exchanger button").disabled = true;
  } else {
    document.querySelector(".exchanger button").disabled = false;
  }
  document.querySelector('input[name="usdt"]').value = round(amount, 2);
};

window.updateNCTAmount = async function () {
  const amount = document.querySelector('input[name="usdt"]').value / price;
  const min = document.querySelector('input[name="nct"]').minNCT;
  document.querySelector('input[name="nct"]').value = round(amount, 2);
  if (amount < minNCT) {
    document.querySelector(".exchanger button").disabled = true;
  } else {
    document.querySelector(".exchanger button").disabled = false;
  }
  document.querySelector('input[name="nct"]').value = round(amount, 2);
};

function hex(n) {
  return "0x" + n.toString(16);
}

window.addTokenToMetaMask = async function () {
  await ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: NCT_ADDRESS,
        symbol: "NCT",
        decimals: 18,
        image: "https://foo.io/token-image.svg",
      },
    },
  });
};

async function switchToPolygonChain() {
  const chain_id = (await web3.eth.getChainId()) * 1;
  if (chain_id !== 137) {
    const params = [
      {
        chainId: "0x89",
        chainName: "Matic Mainnet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"],
      },
    ];
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params,
    });
  }
}

// let conectWalletBtns = document.querySelectorAll('.button_play .login.user');

async function refreshInfo(userAddress) {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  if (!(accounts.length > 0)) return;

  const walletAddress = accounts[0].toLowerCase();
  document.querySelector(".userAddress").innerHTML =
      walletAddress.substr(0, 4) +
      "..." +
      walletAddress.substr(walletAddress.length - 4);

  const nctToken = new web3.eth.Contract(ABI_TOKEN, NCT_ADDRESS);
  const nctAmount =
      (await nctToken.methods.balanceOf(walletAddress).call()) * 1;
  document.querySelectorAll(".userBalance").forEach(x => x.innerHTML = round(
      nctAmount / 1e18,
      2
  ));
}

window.connectWallet = async function () {
  if (typeof window["ethereum"] !== "undefined") {
    web3 = new Web3(Web3.givenProvider);

    await switchToPolygonChain();

    await refreshInfo();

    document.querySelectorAll(".button_play .login.user").forEach(x => x.classList.add('off'));
    document.querySelectorAll(".button_play .user.user__info").forEach(x => x.classList.remove('off'));
  }
  else
  {
      alert('Your browser dont support Metamask, pls use browser supported browser ( Chrome, Firefox, Brave, Edge)')
  }
};

window.logout = function () {
  document.querySelectorAll("button.login").forEach(x => x.classList.remove("off"));
  document.querySelectorAll(".user.user__info").forEach(x => x.classList.add("off"));

  // document.querySelectorAll("button.login")[1].classList.remove("off");
  // document.querySelectorAll(".user.user__info")[1].classList.add("off");
};

window.buyNCT = async function () {
  await connectWallet();
  await updateUSDTAmount();
  if (web3 === null) {
    return;
  } else {
    const nctSell = new web3.eth.Contract(ABI_SELLER, NCT_SELL_ADDRESS);
    // const requiredUSDTAmount = Math.round(document.querySelector('input[name="usdt"]').value * 1e6);
    const requiredNCTAmount = Math.floor(
      round(document.querySelector('input[name="nct"]').value, 2) * 1e18
    );
    const requiredUSDTAmount =
      (await nctSell.methods.getAmounts(hex(requiredNCTAmount)).call()) * 1;
    document.querySelector('input[name="usdt"]').value = round(
      requiredUSDTAmount / 1e6,
      2
    );
    console.log("requiredUSDTAmount", requiredUSDTAmount);

    const usdt = new web3.eth.Contract(ABI_TOKEN, USDT_ADDRESS);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const userUSDTAmount =
      (await usdt.methods.balanceOf(accounts[0]).call()) * 1;
    if (userUSDTAmount < requiredUSDTAmount) {
      alert(
        `Not enough USDT on ${accounts[0]} wallet! You have ${round(
          userUSDTAmount / 1e6,
          2
        )}, required ${round(requiredUSDTAmount / 1e6, 2)}`
      );
      return;
    }
    const approvedAmount = await usdt.methods
      .allowance(accounts[0], NCT_SELL_ADDRESS)
      .call();
    console.log("approvedAmount", approvedAmount);
    console.log("requiredUSDTAmount", requiredUSDTAmount);

    const gasPrice = await getGasPrice();
    // click id
    let id = "0x00000000000000000000000000000000";
    try
    {
      if (sessionStorage && sessionStorage['rtkclickid']) id = '0x' + sessionStorage['rtkclickid'];
    }catch (e) {
      console.error(e);
    }

    if (approvedAmount < requiredUSDTAmount) {
      await new Promise((success) => {
        usdt.methods
          .approve(NCT_SELL_ADDRESS, requiredUSDTAmount)
          .send({ from: accounts[0], gasPrice: gasPrice })
          .on("transactionHash", async function (hash) {
            await new Promise((success) => {
              nctSell.methods
                .swap(hex(requiredNCTAmount), id)
                .send({ from: accounts[0], gas: gasMaxForSwap, gasPrice: gasPrice })
                .on("transactionHash", function (hash) {
                  //
                })
                .on("receipt", function (receipt) {
                  success();
                });
            });
          })
          .on("receipt", function (receipt) {
            success();
          });
      });
    } else {
      await new Promise((success) => {
        nctSell.methods
          .swap(hex(requiredNCTAmount), id)
          .send({ from: accounts[0], gas: gasMaxForSwap, gasPrice: gasPrice })
          .on("transactionHash", function (hash) {
            //
          })
          .on("receipt", function (receipt) {
            success();
          });
      });

      await refreshInfo();
    }
  }
};

if (window.ethereum) {
  window.ethereum.on("accountsChanged", function (accounts) {
    if (accounts.length > 0) {
      window.connectWallet();
    }
  });

  window.ethereum.on("chainChanged", (_chainId) => {
    window.location.reload();
  });
}
