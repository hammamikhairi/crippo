fetch("https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "API_KEY"
	}
}).then(res => res.json())
.then(data => 	console.log(data) )
.catch(err => {
	console.error(err);
});