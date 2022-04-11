import "./import/modules";
import "./import/components";
import Web3 from "./import/web3.min"
window.Web3 = Web3;

let web3;

const USDT_ADDRESS = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const NCT_SELL_ADDRESS = "0x0a543229696054f8bf7e3113b284aea5807e12dd";
const NCT_ADDRESS = "0x75e35522ec4fd6d815191c2a4134477a33cfd829";
const ABI_TOKEN = JSON.parse(`[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CHILD_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEPOSITOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROOT_CHAIN_ID_BYTES","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"}],"name":"changeName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes","name":"depositData","type":"bytes"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint8","name":"decimals_","type":"uint8"},{"internalType":"address","name":"childChainManager","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);
const ABI_SELLER = JSON.parse(`[{"inputs":[{"internalType":"address","name":"_tokenSell","type":"address"},{"internalType":"address","name":"_tokenBuy","type":"address"},{"internalType":"address","name":"_seller","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_amountSell","type":"uint256"}],"name":"getAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountSell","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"_amountBuy","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenBuy","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenSell","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`);
const price = 0.15;
const gasMaxForSwap = 350000;

function round(n, p) {
    const d = 10**p;
    return Math.floor(n * d) / d;
}

window.updateUSDTAmount = async function() {
    const amount =  document.querySelector('input[name="nct"]').value * price;
    const min = document.querySelector('input[name="nct"]').min;
    if (amount < min){
        document.querySelector('input[name="usdt"]').value = document.querySelector('input[name="usdt"]').min;
        document.querySelector('.exchanger button').disabled = true;
    }
    else{
        document.querySelector('input[name="usdt"]').value = round(amount , 2);
        document.querySelector('.exchanger button').disabled = false;
    }
}

window.updateNCTAmount = async function() {
    const amount =  document.querySelector('input[name="usdt"]').value / price;
    const min = document.querySelector('input[name="usdt"]').min;
    document.querySelector('input[name="nct"]').value = round(amount , 2);
    if (amount < min){
        document.querySelector('input[name="nct"]').value = document.querySelector('input[name="nct"]').min;
        document.querySelector('.exchanger button').disabled = true;
    }
    else{
        document.querySelector('input[name="nct"]').value = round(amount , 2);
        document.querySelector('.exchanger button').disabled = false;
    }    
}

function hex(n) {
    return '0x' + n.toString(16);
}

window.addTokenToMetaMask = async function () {
    await ethereum.request({method: "wallet_watchAsset",
        params: {
        type: 'ERC20',
            options: {
                address: NCT_ADDRESS,
                symbol: 'NCT',
                decimals: 18,
                image: 'https://foo.io/token-image.svg',
        }
    }});
}

async function switchToPolygonChain() {
    const chain_id = (await web3.eth.getChainId()) * 1;
    if (chain_id !== 137) {
        const params = [ {
            chainId: '0x89',
                chainName: 'Matic Mainnet',
                nativeCurrency: {
                name: 'MATIC',
                    symbol: 'MATIC',
                    decimals: 18
            },
            rpcUrls: ['https://polygon-rpc.com/'],
                blockExplorerUrls: ['https://polygonscan.com/']
        }];
        await window.ethereum.request({ method: 'wallet_addEthereumChain', params });
    }
}

window.connectWallet = async function() {
    if (typeof window['ethereum'] !== 'undefined') {
        web3 = new Web3(Web3.givenProvider);

        await switchToPolygonChain();

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0].toLowerCase();
        document.querySelector('.userAddress').innerHTML = walletAddress.substr(0, 4) + '...' + walletAddress.substr(walletAddress.length-4);
        const nctToken = new web3.eth.Contract(ABI_TOKEN, NCT_ADDRESS);
        const nctAmount = (await nctToken.methods.balanceOf(accounts[0]).call()) * 1;
        document.querySelector('.userBalance').innerHTML = round(nctAmount / 1e18, 2);
        document.querySelector('button.login').classList.add("off");
        document.querySelector('.user.user__info').classList.remove("off");
    }
}

window.logout = function() {
    document.querySelector('button.login').classList.remove("off");
    document.querySelector('.user.user__info').classList.add("off");
}

window.buyNCT = async function() {
    await connectWallet();
    await updateUSDTAmount();
    if (web3 === null){
        return;
    }
    else {
        const nctSell = new web3.eth.Contract(ABI_SELLER, NCT_SELL_ADDRESS);
        // const requiredUSDTAmount = Math.round(document.querySelector('input[name="usdt"]').value * 1e6);
        const requiredNCTAmount = Math.floor(round(document.querySelector('input[name="nct"]').value, 2) * 1e18);
        const requiredUSDTAmount = (await nctSell.methods.getAmounts( hex(requiredNCTAmount)).call()) * 1;
        document.querySelector('input[name="usdt"]').value = round(requiredUSDTAmount/1e6 , 2);
        console.log("requiredUSDTAmount", requiredUSDTAmount);
    
        const usdt = new web3.eth.Contract(ABI_TOKEN, USDT_ADDRESS);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userUSDTAmount = (await usdt.methods.balanceOf(accounts[0]).call()) * 1;
        if (userUSDTAmount < requiredUSDTAmount) {
            alert(`Not enough USDT on ${accounts[0]} wallet! You have ${round(userUSDTAmount / 1e6, 2)}, required ${round(requiredUSDTAmount / 1e6, 2)}`);
            return;
        }
        const approvedAmount = await usdt.methods.allowance(accounts[0], NCT_SELL_ADDRESS).call();
        console.log("approvedAmount", approvedAmount);
        console.log("requiredUSDTAmount", requiredUSDTAmount);
        if  (approvedAmount < requiredUSDTAmount) {
    
            await new Promise((success) => {
                usdt.methods.approve(NCT_SELL_ADDRESS, requiredUSDTAmount).send({from: accounts[0]}).on('transactionHash', async function (hash) {
                    await new Promise((success) => {
                        nctSell.methods.swap(hex(requiredNCTAmount)).send({from: accounts[0], gas: gasMaxForSwap}).on('transactionHash', function (hash) {
                            //
                        }).on('receipt', function (receipt) {
                            success();
                        });
                    });
                }).on('receipt', function (receipt) {
                    success();
                });
            });
        } else {
            await new Promise((success) => {
                nctSell.methods.swap(hex(requiredNCTAmount)).send({from: accounts[0], gas: gasMaxForSwap}).on('transactionHash', function (hash) {
                    //
                }).on('receipt', function (receipt) {
                    success();
                });
            });
        }
    }
}

if (window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length > 0) {
            window.connectWallet();
        }
    });

    window.ethereum.on('chainChanged', (_chainId) => {
        window.location.reload();
    });
}

