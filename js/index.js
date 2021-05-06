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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav');
const navItem = nav.querySelectorAll('a');
navItem[0].textContent = siteContent['nav']['nav-item-1']
navItem[1].textContent = siteContent['nav']['nav-item-2']
navItem[2].textContent = siteContent['nav']['nav-item-3']
navItem[3].textContent = siteContent['nav']['nav-item-4']
navItem[4].textContent = siteContent['nav']['nav-item-5']
navItem[5].textContent = siteContent['nav']['nav-item-6'];

const ctaPic = document.getElementById('cta-img');
ctaPic.setAttribute('src', siteContent['cta']['img-src']);

let cta = siteContent['cta']['h1'].split(' ');
const title = document.getElementsByTagName('h1')[0];
title.innerHTML = cta.join('<br>');

const middlePic = document.getElementById('middle-img');
middlePic.setAttribute('src', siteContent['main-content']['middle-img-src']);

const button = document.getElementsByTagName('button')[0];
button.innerText = siteContent['cta']['button'];

const mainContent = document.querySelector('.main-content');
const mainItem = mainContent.querySelectorAll('h4');
const mainText = mainContent.querySelectorAll('p');
mainItem[0].textContent = siteContent['main-content']['features-h4'];
mainItem[1].textContent = siteContent['main-content']['about-h4'];
mainItem[2].textContent = siteContent['main-content']['services-h4'];
mainItem[3].textContent = siteContent['main-content']['product-h4'];
mainItem[4].textContent = siteContent['main-content']['vision-h4'];
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact');
const contactTitle = contact.querySelector('h4');
let contactText = contact.querySelectorAll('p');
contactTitle.textContent = siteContent['contact']['contact-h4'];
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer');
const year = footer.querySelector('p');
year.textContent = siteContent['footer']['copyright'];




