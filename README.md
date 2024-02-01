<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<br />
<div align="center">
  <h3 align="center">Chivolo</h3>

  <p align="center">
    A kids' video app featuring shows with racially-diverse main characters.
    <br />
    <a href="https://github.com/georgiakirkpatrick/chivolo-app/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://georgiakirkpatrick.github.io/chivolo-app">View Demo</a>
    ·
    <a href="https://github.com/georgiakirkpatrick/chivolo-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/georgiakirkpatrick/chivolo-app/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of contents</summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About the project

Chivolo was created in 2019 as project for my Bloc (now Thinkful) Full-Stack Engineering bootcamp.  The requirements for the project were to create a responsive app using HTML, CSS, JavaScript, JQuery, and a public API of my choice.  I chose to use the YouTube Data API.  This was a solo project which I completed with occasional help from a mentor.

In 2019, my then-four-years-old stepdaughter's favorite app was the YouTube Kids app.  I regularly reviewed my stepdaughter's viewing history on the app to see what kinds of content she had seen.  I found that very few videos in the app featured characters of color.  When characters of color were present, they were often secondary characters who merely supported the main character's story line.  

In response, I created a video app for kids, like YouTube Kids, with videos that star characters of color.  I sourced content from the YouTube Data API to provide kids with videos that center BIPOC characters.  I hope Chivolo acts as a complement to white-main-character-dominated video apps like YouTube Kids to help children form positive associations with people of all races.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built with

* [![HTML][html-shield]][html-url]
* [![CSS][css-shield]][css-url]
* [![JavaScript][javascript-shield]][javascript-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![YouTube Data API][youtube-shield]][youtube-api-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Features

### Main Page

The main page of the app displays a video player at the top with video and playlist options near the bottom.  Content is fetched from the YouTube Data API on load and new content is added by YouTube playlist owners.

![Chivolo Main Page](images/screen-shot-chivolo-main-video-page.png)

#### Video player

The video player has familiar YouTube buttons and can be maximized to full-screen.  Kids select videos to play in the video player by tapping or clicking the video options below the player or by selecting a show in the "Shows" section.

![Video Maximized](images/screen-shot-video-maximized.png)

#### Shows Section

Show options include clickable images to make the app usable to pre-readers.  Clicking a show icon will list all the available videos from that show.

![Chivolo Shows Page](images/screen-shot-chivolo-shows-page.png)

### Grownups Page

![Chivolo Grownups Page](images/screen-shot-chivolo-growups-page.png)

Parents have the option to filter shows based on their child's age by creating a profile for their child.  Additional profiles can be created for other children.

### History page

The "History" page lists all the videos that have been played on the app so kids can replay videos they enjoyed while parents can review the content their child has viewed.

![Chivolo History Page](images/screen-shot-chivolo-history-page.png)



## Getting started

Follow these steps to get a local copy of Chivolo up and running.

### Prerequisites

You will need to have [Node](https://nodejs.org/en) and [Git](https://git-scm.com) installed.

Update [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/about) to their latest versions if you have not already.  For information about current versions of Node.js and npm, see the [Node Release Schedule](https://nodejs.org/en/about/previous-releases).  For information about the latest release of Git, check [Git Downloads](https://git-scm.com/downloads).
* To see if you already have Node.js, npm, and Git installed and check your installed versions, run the following commands:
  ```
  node -v && npm -v && git -v
  ```

* Install or update Node.js if needed at [Node.js Downloads](https://nodejs.org/en/download/).  The Node.js installer automatically installs or updates npm as well.

* If your version of Node.js is current but npm needs to be updated, install the most recent stable version of npm by running the following command:
  ```
  npm install npm@latest -g
  ```

* Install or update Git if needed at [Git Downloads](https://git-scm.com/downloads).

### Installation

1. In the command line, navigate to the directory where you would like to copy Chivolo.
2. Clone the chivolo-app repository.
  ```
  git clone https://github.com/georgiakirkpatrick/chivolo-app.git
  ```
3. Navigate to the chivolo-app directory and install the project's npm packages.
  ```
  cd chivolo-app && npm install
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contributing

Chivolo is an open souce project.  Any contributions you make to this project are **greatly appreciated**.

If you have a suggestion about how to make Chivolo better, please open an issue with the tag "enhancement". You can also fork the repo and create a pull request by following the steps below.

Don't forget to give this project a star!  Thank you!

### Fork the repository

Some of the instructions below use GitHub command line interface (CLI).  You may learn more about GitHub CLI and install at "[GitHub CLI quickstart](https://docs.github.com/en/github-cli/github-cli/quickstart)".

1. Fork the project and configure Git to sync your fork with the upstream repository.  When prompted, type "y" and "return" (or "enter") to clone the chivolo-app files to your computer.
```
gh repo fork https://github.com/georgiakirkpatrick/chivolo-app --remote=true
```
2. Navigate into the chivolo-app directory.  
```
cd chivolo-app
```
3. Create a new branch to build your proposed feature and switch to your new branch.  Replace "new_feature" with the name of your feature.
```
git checkout -b feature/new_feature
```
4. Build your new feature.
5. Commit your changes.  Replace "commit_message" with an informative description of your changes.
 ```
 git commit -m 'commit_message'
 ```
6. Push to your branch.  Again, replace "new_feature" with the name of your feature.
```
git push origin feature/new_feature
```
7. Open a pull request.  Consider using pull request flags described in "[Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request)".
```
gh pr create
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

The best way to get in touch with me is to use the contact form on my website: [georgiakirkpatrick.com](https://georgiakirkpatrick.com/#contact)
You can also connect with me on LinkedIn: [Georgia's LinkedIn][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments

I chose Chivolo's video content after consulting the following helpful resources:

* [Diversity in Cartoons: Kid’s Shows by Lily Berry](https://medium.com/cartoons-and-diversity-2019/diversity-in-cartoons-kids-shows-1f21ab44dd06)
* [TV Shows with Diverse Characters by Common Sense Media](https://www.commonsensemedia.org/lists/tv-shows-with-diverse-characters)
* [6 Diverse Children's Cartoons (Where the Main Character Isn't Necessarily White) by Stephanie Meade](https://www.huffpost.com/entry/6-diverse-childrens-cartoons_b_4060367?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAJmWWFjEaI2bpknNLwfhRJMZmMdfFwr7Nnr9mqrUUk7mHMOaYsQD4zf_U0a69K-0PSelNAneGvyfbLBdrh9dBw5qfRxTVeiL4TLTujUl9KS62LamjPftbTd3613ICr392vw6yn4H5TKSLUZ5bC2GzR33bl4dLZ4F_-k5Q4ceaANq)
* [Kids' TV lacks gender balance and diversity, new study suggests by Jessica Wong](https://www.cbc.ca/news/entertainment/childrens-tv-study-diversity-1.5118385)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/georgiakirkpatrick/chivolo-app.svg?style=for-the-badge
[contributors-url]: https://github.com/georgiakirkpatrick/chivolo-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/georgiakirkpatrick/chivolo-app.svg?style=for-the-badge
[forks-url]: https://github.com/georgiakirkpatrick/chivolo-app/network/members
[stars-shield]: https://img.shields.io/github/stars/georgiakirkpatrick/chivolo-app.svg?style=for-the-badge
[stars-url]: https://github.com/georgiakirkpatrick/chivolo-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/georgiakirkpatrick/chivolo-app.svg?style=for-the-badge
[issues-url]: https://github.com/georgiakirkpatrick/chivolo-app/issues
[license-shield]: https://img.shields.io/github/license/georgiakirkpatrick/chivolo-app.svg?style=for-the-badge
[license-url]: https://github.com/georgiakirkpatrick/chivolo-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/georgia-kirkpatrick
[product-screenshot]: images/screenshot.png

<!-- BUILT WITH BADGES AND LINKS -->
[html-shield]: https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=fff
[html-url]: https://html.spec.whatwg.org
[css-shield]: https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3
[css-url]: https://www.w3.org/TR/CSS/#css
[javascript-shield]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000
[javascript-url]: https://262.ecma-international.org
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[youtube-shield]: https://img.shields.io/badge/YouTube-ff0000?style=for-the-badge&logo=YouTube
[youtube-api-url]: https://developers.google.com/youtube/v3/docs/search/list