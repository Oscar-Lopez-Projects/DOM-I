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
//nav
  const navA = document.querySelectorAll('a');
    const values = Object.values(siteContent.nav);

    for (let i = 0; i < navA.length; i++) {
      navA[i].textContent = values[i];
    }

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//--------H1
const ctaH1 = document.querySelector('div.cta-text > h1');

ctaH1.textContent = siteContent["cta"]["h1"];

//--------button

const ctaButton = document.querySelector('div.cta-text > button');

ctaButton.textContent = siteContent["cta"]["button"];

//-------CTA Image

const ctaImage = document.getElementById('cta-img');

ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//-------------Features-h4

const featTitle = document.querySelector('div.text-content > h4');

featTitle.textContent = siteContent["main-content"]["features-h4"];

//-------------features-content

const featContent = document.querySelector('div.text-content > p');

featContent.textContent = siteContent["main-content"]["features-content"];

//-------------about-h4


const aboutTitle = document.querySelector('div.text-content:nth-child(2) > h4');

aboutTitle.textContent = siteContent["main-content"]["about-h4"];

//-------------about-content

const aboutCont = document.querySelector('div.text-content:nth-child(2) > p');

aboutCont.textContent = siteContent["main-content"]["about-content"];


//-------------middle-img-src

const midImage = document.getElementById('middle-img');

midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//------------services-h4

const servTitle = document.querySelector('div.bottom-content > div.text-content > h4');

servTitle.textContent = siteContent["main-content"]["services-h4"];

//------------services-content

const servCont = document.querySelector('div.bottom-content > div.text-content > p');

servCont.textContent = siteContent["main-content"]["services-content"];

//------------product-h4

const prodTitle = document.querySelector('div.bottom-content > div.text-content:nth-child(2) > h4');

prodTitle.textContent = siteContent["main-content"]["product-h4"];

//------------product-content

const prodCont = document.querySelector('div.bottom-content > div.text-content:nth-child(2) > p');

prodCont.textContent = siteContent["main-content"]["product-content"];

//------------vision-h4

const visionTitle = document.querySelector('div.bottom-content > div.text-content:nth-child(3) > h4');

visionTitle.textContent = siteContent["main-content"]["product-h4"];

//------------vision-content

const visionCont = document.querySelector('div.bottom-content > div.text-content:nth-child(3) > p');

visionCont.textContent = siteContent["main-content"]["vision-content"];

//--------Contact-h4

const contactTitle = document.querySelector('section.contact > h4');

contactTitle.textContent = siteContent["contact"]["contact-h4"];

//--------address
//NEED TO FIGURE OUT HOW TO ADD THE BREAK IN THE ADDRESS
const contAddress = document.querySelector('section.contact > p');

contAddress.textContent = siteContent["contact"]["address"];

//-------phone

const contPhone = document.querySelector('section.contact > p:nth-child(3)');

contPhone.textContent = siteContent["contact"]["phone"];

//-------email

const contEmail = document.querySelector('section.contact > p:nth-child(4)');

contEmail.textContent = siteContent["contact"]["email"];

//------copyright

const fCopyright = document.querySelector('footer > p');

fCopyright.textContent = siteContent["footer"]["copyright"];


//----------------------------------------------------ADD NEW CONTENT TO NAV

//-------------Append

let navB = document.createElement('a');
let newText = document.createTextNode('Idea');
navB.appendChild(newText);

let element = document.querySelector('nav');
element.appendChild(navB);


//-------------Prepend

let navC = document.createElement('a');
let newTextTwo = document.createTextNode('Great');
navC.appendChild(newTextTwo);

let elementTwo = document.querySelector('nav');
elementTwo.prepend(navC);

//----------------------------------------------Make NAV text Green

const navSelect = document.getElementsByTagName('a');

for (let i = 0; i < navSelect.length; i++) {
  navSelect[i].style.color = 'green';
}

//finished assignment :)