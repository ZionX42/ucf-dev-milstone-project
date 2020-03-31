<div style="text-align:center;">
<img src="assets/images/logo.png"></img><br>
</div>

# Super Capable

## Site Overview - The Story

There comes a time when you feel like your job is a bit stagnant, not being able to progress, doing the same thing day in day out. You professional life is boring, you need a change. 

But how can you when you are, what many might consider, too old to change your career! 

This website is built for the overlooked minorities who are also majority of the working population. The over 40s that want to career change. The website will have curated articles, advice, and support for that ones who need it.

## UX

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

The idea to take advantage of the "Lazy coder" approach and use pre-coded core bootstrap template, snippets and libraries where possible. They will be then redesigned to fit my visual and CX (Customer Experience) requirements.

Although the project only requires HTML & CSS, I wanted to challenge myself and use bootstrap to learn how to code with it. 

Once the visitor lands on the page they are greeted with a jumbotron image and a H1 text catching their attention for what the website is all about. 

The Navbar will have three sections. About, interviews, resources, and connect with us page. 

The website will have 5 pages & sections that will include the following:
	• Home:
	• Support: A curated resources of the information that to support the SC initiative.
	• Interviews: 
	• About:
	• Connect: The contact us section of the Home page.
	• Social Media Section:

## Wireframe

As a recommendation for wireframing I got to use [Balsamiq] (https://balsamiq.com/) that helped me with better visualise the main structure of the website for different devices.

### Desktop

<div style="text-align:center;">
<img src="Project Docs/Wireframes/project_docs/wireframes/wireframe-desktop.png"></img><br>
</div>

### Tablet

<div style="text-align:center;">
<img src="project_docs/wireframes/wireframe-tablet.png"></img><br>
</div>

### Mobile

<div style="text-align:center;">
<img src="project_docs/wireframes/wireframe-phone.png"></img><br>
</div>


## Footer

You probably heard this many times through a friend or personally that you are too late to change. You will not learn new things, will never accept told off by others lot younger than you. I know I have been there many time, yet it didn't stop me. It made me more determined to prove others wrong. 

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure: As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.


## Features

The Carousel Slider

Sliding images to provide the visitor with impactful images and catch phrases. This is to prompt them to scroll and decrease the bounce rate of the visitors.

### Welcome

A brief introduction and further explanation to what the website is all about.

### Support

Videos that provide the visitor with valuable relevant information to help them with their career changes.

### Interviews

The most powerful part of the website as it will showcase real life story of people who successfully changed careers. The main purpose of this section is to motivate and comfort the person who is, in many cases, panicing about their career povit.

### About

A bit of an introduction of the people behind the project and how they can connect with us.


## Future Features

### Blog Section

In time there will be more contributors to the website with blog posts. They will cover persoanl experiences, guidlines, reviews of pbest practices and important annoucements.

### Podcast

A podcast focusing on the career opportunities, interviewing successful career pivoters and corporations on how they see career shifting fits their businesses.

### Misc
* Darken Carousel images to make the titles more visible.
* Add "back to top" scroll up button for faster scroller function.


## Technologies Used

* Bootstrap:(https://getbootstrap.com/) - I used bootstrap 4 for to challenge myself and learn how to use it better.
* Gitpod: (https://gitpod.io/) the IDE for coding and edit the website. It has a great commit ability as well.
* Font Awesome:(https://fontawesome.com/) - Used for the scial media icons and for the Support section.
* GitHub: (https://github.com/) I wanted to have a centralised repository location and it is the most popular.
* Google Fonts:(https://fonts.google.com/) I used Montserrat fonts and San Serif as back up.
* HTML & CSS: Used to design the website and styling.

## Testing

I frequently used the Chrome developer tools to test the website. It also helped me with finding where the UX faults are.

Another tool I used at the end of the project was Unicorn Revealer. Great to pinpoint any overflows.

Other tools to validate the HTML & CSS were: 

* https://jigsaw.w3.org/css-validator/
* https://validator.w3.org/

The below points are some testing stories that I faced and testing challange I went through. They are in particular order:

#### Carousel slider

* The first challenge I faced with the slider to get the images fit the real estate view. I was able to succeed when I researched online, where I found the answer to be adding the width & hight at 100%. 
* The other challenge was to go the slider working. I reseached online and found the solution here (https://www.w3schools.com/bootstrap4/bootstrap_carousel.asp). It helped me with getting the slider to work.

#### Video

* I had to learn how to embed the youtube videos since direct embed link from YouTube wasn't working. I realised that I had to replace the shortform url in the embedded script with the full link of the video. Plus had to keep this extra code for it to work (?rel=0)

#### Navigation links

* Been struggling with linking the naviagtions with the right sections. Through research I found out how to link index.html to "Home" and "Contact Us" to contact.html. Also also learned to how link sections on the same page, but main page sections from another page. 

For example, "Support" on navbar didn't work from contact.html. 


*In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.
Challanges:

*• First challenge I was faced with was the appearing logo. I make the mistake of not adding "assets" to the code where the image didn't show. img src="assets/images/logo.png"

*• The other challenge I had to go through was the logo design. 

*• Been trying to add the fontawesome icons with no luck where I then realised that I didn't script source into HTML.

*Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

*For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

*Contact form:
		1. Go to the "Contact Us" page
		2. Try to submit the empty form and verify that an error message about the required fields appears
		3. Try to submit the form with an invalid email address and verify that a relevant error message appears
		4. Try to submit the form with all inputs valid and verify that a success message appears.

*In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

*You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

*If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

All the coding is doing from Gitpod. I forked the CI template into Github and then ported it to Gitpod using the recommeded mothod. 

*This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).
In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

*Different values for environment variables (Heroku Config Vars)?
	*• Different configuration files?
	• Separate git branch?

*In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Resources:

Bootstrap 4 core download : https://getbootstrap.com/

Barebone website template & boiler plate that (I also updated with the latest versions) from: https://m.w3newbie.com/d/tutorial-29.zip (Template Code can been seen at Initial Commit2, 13a42f9945d74651cb264b44e636df9b934ca81c)

Base template forked from Code Institute: https://github.com/Code-Institute-Org/gitpod-full-template

### Content:

All the content that is written by me and the rest are ipsum auto generated on https://loremipsum.io/

### Media:

The photos were taken by myself and resized for better website performance using this website

Background: Rick Nassar
Logo: Designed in Google Draw by Rick Nassar
		
## Acknowledgements

I received learnings & tutorials on how to build the bootstrap website from this YouTube channel: Responsive Bootstrap Website Start To Finish with Bootstrap 4, HTML5 & CSS3.

I also received valuable guidance from my mentor Rohit Sharma who advised me on how to be a better programmer.

### References
README reference was from this readme file: https://github.com/D0nni387/Luxury-Door-Solutions/blob/master/README.md
	
	
