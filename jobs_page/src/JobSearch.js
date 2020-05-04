import { jobTemplate } from "./templates";
import { extractFormData, getCurrencySymbol } from "./currency";


// Selector to know where the data is coming from
export class JobSearch {
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
    this.countryCode = "gb";
    this.setCurrencySymbol();

    fetch("http://ip-api.com/json")
      .then((results) => results.json())
      .then((results) => {
        this.countryCode = results.countryCode.toLowerCase();
        this.setCurrencySymbol();
      });
  }
  // To display the correct currency symbol since Adzuna doesn't provide it
  setCurrencySymbol() {
    this.currencySymbol = getCurrencySymbol(this.countryCode);
  }

  // Event listener when form is submitted

  configureFormListener() {
    this.searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.startLoading();
      this.resultsContainer.innerHTML = "";
      const { search, location } = extractFormData(this.searchForm);

      fetch(
        `http://localhost:3000/?search=${search}&location=${location}&country=${this.countryCode}`
      )
        .then((response) => response.json())
        .then(({ results }) => {
          this.stopLoading();
          return results
            .map((job) => jobTemplate(job, this.currencySymbol))
            .join("");
        })
        .then((jobs) => (this.resultsContainer.innerHTML = jobs))
        .catch(() => this.stopLoading());
    });
  }
}
