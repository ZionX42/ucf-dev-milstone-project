
// Selector to know where the data is coming from
class JobSearch {
  constructor(
    searchFormSelector,
    resultsContainerSelector,
    loadingElementSelector
  ) {
    this.searchForm = document.querySelector(searchFormSelector);
    this.resultsContainer = document.querySelector(resultsContainerSelector);
    this.loadingElement = document.querySelector(loadingElementSelector);
  }

  // Geolocation
  setCountryCode() {
    this.countryCode = 'gb';
    this.setCurrencySymbol();

    fetch('http://ip-api.com/json')
      .then(results => results.json())
      .then(results => {
        this.countryCode = results.countryCode.toLowerCase();
        this.setCurrencySymbol();
      });
}
// To display the correct currency symbol since Adzuna doesn't provide it
setCurrencySymbol() {
  this.currencySymbol = getCurrencySymbol(this.countryCode);
}


}