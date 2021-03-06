let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: "/api/",
	mainnetExplorerUrl: "https://blocks.arqma.com/",
	mainnetExplorerUrlHash: "https://blocks.arqma.com/tx/{ID}",
	mainnetExplorerUrlBlock: "https://blocks.arqma.com/block/{ID}",
	testnetExplorerUrl: "https://blocks.arqma.com/",
	testnetExplorerUrlHash: "https://blocks.arqma.com/tx/{ID}",
	testnetExplorerUrlBlock: "https://blocks.arqma.com/block/{ID}",
	testnet: false,
	coinUnitPlaces: 9,
	txMinConfirms: 4,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 18, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 0x2cca,
	integratedAddressPrefix: 0x116bc7,
	addressPrefixTestnet: 0x53ca,
	integratedAddressPrefixTestnet: 0x504a,
	subAddressPrefix: 0x6847,
	subAddressPrefixTestnet: 0x524a,
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
