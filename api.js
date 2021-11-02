//export const key = process.env.REACT_APP_API_KEY;
export const key = 'a58e8b547bmshc997baefe2bfbb9p18bfc7jsn1e90b70d7c29'
export const host = '&x-rapidapi-host=yh-finance.p.rapidapi.com';
export const KEY_URL = `&rapidapi-key=`;
export const Region = `region=`
export const TRENDING_URL = 'https://yh-finance.p.rapidapi.com/market/get-trending-tickers?'
export const NEWS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?'
export const RECOMMEND_URL = 'https://yh-finance.p.rapidapi.com/stock/v2/get-recommendations?'
export const Profile = 'https://yh-finance.p.rapidapi.com/stock/v2/get-profile?'

export const news_key = '2e483bfda5mshdb59dafdf59818fp1f6fb5jsndce66f23746a'
export const news_host = '&apidojo-yahoo-finance-v1.p.rapidapi.com'


export const news = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
  params: {category: 'generalnews', region: 'US'},
  headers: {
    'x-rapidapi-key': '2e483bfda5mshdb59dafdf59818fp1f6fb5jsndce66f23746a',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};
