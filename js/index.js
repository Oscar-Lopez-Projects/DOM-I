const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
/*const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png" */
//The Nav layout & green color
 let navA = document.querySelectorAll('nav a');
navA[0].innerHTML= siteContent.nav['nav-item-1'];
navA[1].innerHTML= siteContent.nav['nav-item-2'];
navA[2].innerHTML= siteContent.nav['nav-item-3'];
navA[3].innerHTML= siteContent.nav['nav-item-4'];
navA[4].innerHTML= siteContent.nav['nav-item-5'];
navA[5].innerHTML= siteContent.nav['nav-item-6'];
navA.forEach(color=> color.style.color= 'green');

//add of two new Navs

const index = document.createElement('a');
index.href = '#';
index.textContent = 'Home';
const mainNav = document.querySelector('header nav');
index.style.color='green';
mainNav.prepend(index);

const blog = document.createElement('a');
blog.href = '#';
blog.textContent = 'Blog';
blog.style.color='green';
mainNav.appendChild(blog);


    


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

/* "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

*/
//image
const ctaImage= document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src'];


//cta text & button.
const ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent['cta']['h1'];

const theButton = document.querySelector('button');
theButton.innerHTML = siteContent['cta']['button'];

/*
"main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  */

const middleIm= document.querySelector('#middle-img');
middleIm.src = siteContent['main-content']['middle-img-src'];

const theHeaders= document.querySelectorAll('.text-content h4');
theHeaders[0].textContent= siteContent['main-content']['features-h4'];
theHeaders[1].textContent= siteContent['main-content']['about-h4'];
theHeaders[2].textContent= siteContent['main-content']['services-h4'];
theHeaders[3].textContent= siteContent['main-content']['product-h4'];
theHeaders[4].textContent= siteContent['main-content']['vision-h4'];

const thePara = document.querySelectorAll('.main-content p');
thePara[0].textContent= siteContent['main-content']['features-content'];
thePara[1].textContent= siteContent['main-content']['about-content'];
thePara[2].textContent= siteContent['main-content']['services-content'];
thePara[3].textContent= siteContent['main-content']['product-content'];
thePara[4].textContent= siteContent['main-content']['vision-content'];

 /* 
 "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
*/

const contactHeaders= document.querySelector('.contact h4');
contactHeaders.innerHTML= siteContent['contact']['contact-h4'];

const contactsPara= document.querySelectorAll('.contact p');
contactsPara[0].innerHTML= siteContent['contact']['address'];
contactsPara[1].innerHTML= siteContent['contact']['phone'];
contactsPara[2].innerHTML= siteContent['contact']['email'];

const theFooter= document.querySelector('footer p');
theFooter.innerHTML=siteContent['footer']['copyright'];

const lastFooter = document.createElement('p');
lastFooter.textContent='til the very end';
lastFooter.style.marginTop='10px';
theFooter.appendChild(lastFooter);

/* finished */


