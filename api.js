//export const key = process.env.REACT_APP_API_KEY;
export const key = '2e483bfda5mshdb59dafdf59818fp1f6fb5jsndce66f23746a'
export const host = '&x-rapidapi-host=apidojo-yahoo-finance-v1.p.rapidapi.com';
export const KEY_URL = `region=US&rapidapi-key=`;
export const TRENDING_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?'
export const NEWS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?'

export  const movers = {
	method: 'GET',
	url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
	params: {region: 'US'},
	headers: {
	  'rapidapi-key': `${key}`,
	  'x-rapidapi-host': `${host}`
	}
      };

export  const news = {
	method: 'GET',
	url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
	params: {region: 'US',category: 'generalnews'},
	headers: {
	  'rapidapi-key': `${key}`,
	  'x-rapidapi-host': `${host}`
	}
      };