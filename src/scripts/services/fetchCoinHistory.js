fetch("https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "77e15e2766msh05722b4eeec1f67p1cfb0ejsn6ec5168282ec"
	}
}).then(res => res.json())
.then(data => 	console.log(data) )
.catch(err => {
	console.error(err);
});