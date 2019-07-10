let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://myarqma.com/api/',
	mainnetExplorerUrl: "https://blocks.arqma.com/",
	mainnetExplorerUrlHash: "https://blocks.arqma.com/tx/{ID}",
	mainnetExplorerUrlBlock: "https://blocks.arqma.com/block/{ID}",
	testnetExplorerUrl: "",
	testnetExplorerUrlHash: "",
	testnetExplorerUrlBlock: "",
	testnet: false,
	coinUnitPlaces: 9,
	txMinConfirms: 4,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 18, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 11466,
	integratedAddressPrefix: 1141703,
	addressPrefixTestnet: 21450,
	integratedAddressPrefixTestnet: 20554,
	subAddressPrefix: 26695,
	subAddressPrefixTestnet: 21066,
	feePerKB: new JSBigInt('10000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('10000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 6, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'ARQ',
	openAliasPrefix: "arq",
	coinName: 'Arqma',
	coinUriPrefix: 'arqma:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'ar46iCiw5uB7SjnYhL5EJLP1LpqGkZbCcWhWgdbLL1c4DicNuYi3ZeRJPi8FFmEhYnagbxRyaQKyTYBA95JqmPcr1XZytK9o3'
	]
};