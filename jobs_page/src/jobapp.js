//This is the main job search JS file that will run the search results
import {JobSearch} from './jobseach';

const JobSearch = new JobSearch('#search-form', '.result-container', '.loading-element');
jobSearch.setCountryCode();
jobSearch.configureFormListener();