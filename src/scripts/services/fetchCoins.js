const fetchCoins = () => {
	fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "coinranking1.p.rapidapi.com",
			"x-rapidapi-key": "API_KEY"
		}
	})
}
