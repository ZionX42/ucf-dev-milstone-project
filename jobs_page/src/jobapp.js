//This is the main job search JS file that will run the search results
import {JobSearch} from './JobSearch';

const JobSearch = new JobSearch('#search-form', '.result-container');
jobSearch.setCountryCode();
jobSearch.configureFormListener();