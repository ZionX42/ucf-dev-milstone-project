class JobSearch {

    constructor(searchFormSelector, resultsContainerSelector, loadingElementSelector) {
      this.searchForm = document.querySelector(searchFormSelector);
      this.resultsContainer = document.querySelector(resultsContainerSelector);
      this.loadingElement = document.querySelector(loadingElementSelector);
    }
}