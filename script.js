window.onload = () => {
  setupHtmlElements();
};

const setupHtmlElements = () => {
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = async () => {
  const currencyElement = document.getElementById('currency-input');
  const currencyValue = currencyElement.value;

  const object = await fetchCurrency(currencyValue);
  
  clearList();

  handleBaseCurrency(object.base);
  handleRates(object.rates);

  cleanCurrencyInput();
}

const clearList = () => {
  const currencyList = document.getElementById('currency-list');
  currencyList.innerHTML = "";
};

const cleanCurrencyInput = () => {
  const currencyElement = document.getElementById('currency-input');
  currencyElement.value = "";
};

const handleBaseCurrency = (base) => {
  const baseElement = document.getElementById('base');
  
  baseElement.innerHTML = `Valores referentes à 1 <em>${base}</em>`;
};

const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  
  ratesEntries.forEach((entry) => {
    const [ currency, rate ] = entry;
    renderRate(currency, rate);
  });
};

const renderRate = (currency, rate) => {
  const currencyList = document.getElementById('currency-list');
  const fixedRate = rate.toFixed(2);

  const li = document.createElement('li');
  
  li.innerHTML = `<strong><em>${currency}:</strong></em> ${fixedRate}`

  currencyList.appendChild(li);
}