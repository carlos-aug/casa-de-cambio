// const fetch = require('node-fetch');

const BASE_URL = 'https://api.exchangerate.host';
const LATEST_ENDPOINT = '/latest';

const buildUrlBasedOnCurrency = (currency) => {
  return `${BASE_URL}${LATEST_ENDPOINT}/?base=${currency}`;
}

const fetchCurrency = async (currency) => {
  const endpoint = buildUrlBasedOnCurrency(currency);

  try {
    const response = await fetch(endpoint);
    const json = await response.json();

    return json
  } catch (error) {
    throw error;
  }

}
