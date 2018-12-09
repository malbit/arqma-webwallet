<?php

$testnet = false;
$cacheLocation = __DIR__.'/'.($testnet ? 'cache-testnet' : 'cache');
$daemonAddress = 'http://127.0.0.1';
$rpcPort = $testnet ? 29994 : 19994;
$coinSymbol = 'ARQ';
