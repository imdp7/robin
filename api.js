//export const key = process.env.REACT_APP_API_KEY;
export const key = '2faebb8aaemsh1895bffa2d9ccb2p18752ejsnceb474c3f5fb'
export const host = '&x-rapidapi-host=yh-finance.p.rapidapi.com'
export const KEY_URL = `&rapidapi-key=`
export const Region = `region=`
export const TRENDING_URL =
    'https://yh-finance.p.rapidapi.com/market/get-trending-tickers?'
export const NEWS_URL =
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?'
export const RECOMMEND_URL =
    'https://yh-finance.p.rapidapi.com/stock/v2/get-recommendations?'
export const Profile = 'https://yh-finance.p.rapidapi.com/stock/v2/get-profile?'

export const news_key = 'f53dc66b50msh0675c5b70ce3b02p14aa61jsn41c6f5243910'
export const news_host = '&apidojo-yahoo-finance-v1.p.rapidapi.com'

export const news = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
    params: { category: 'generalnews', region: 'US' },
    headers: {
        'x-rapidapi-key': 'f53dc66b50msh0675c5b70ce3b02p14aa61jsn41c6f5243910',
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    },
}
