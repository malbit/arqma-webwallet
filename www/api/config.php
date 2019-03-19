<?php

$testnet = false;
$cacheLocation = $testnet ? __DIR__.'/cache-testnet' : __DIR__.'/cache';
$daemonAddress = 'localhost';
$rpcPort = $testnet ? 29994 : 19994;
$coinSymbol = 'arq';
