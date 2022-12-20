const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const aSelector = document.querySelectorAll('a');

aSelector[0].textContent = "Services";
aSelector[1].textContent = "Product";
aSelector[2].textContent = "Vision";
aSelector[3].textContent = "Features";
aSelector[4].textContent = "About";
aSelector[5].textContent = "Contact";

aSelector[6].textContent = "Copyright Great Idea! 2021"
aSelector.forEach(a => a.setAttribute('class', 'italic'));
aSelector[6].setAttribute('class', 'bold');

const logoImgSelector = document.querySelector('#logo-img');
const ctaImgSelector = document.querySelector('#cta-img');
const accentImgSelector = document.querySelector('#middle-img');

logoImgSelector.setAttribute('src', 'http://localhost:9000/img/logo.png');
ctaImgSelector.setAttribute('src', 'http://localhost:9000/img/cta.png');
accentImgSelector.setAttribute('src', 'http://localhost:9000/img/accent.png');

const h1Selector = document.querySelector('h1');

h1Selector.textContent = "DOM Is Awesome";

const buttonSelector = document.querySelector('button');

buttonSelector.textContent = "Get Started";

const h4Selector = document.querySelectorAll('h4');

h4Selector[0].textContent = "Features";
h4Selector[1].textContent = "About";
h4Selector[2].textContent = "Services";
h4Selector[3].textContent = "Product";
h4Selector[4].textContent = "Vision";

h4Selector[5].textContent = "Contact";

const pSelector = document.querySelectorAll('p');

pSelector[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pSelector[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pSelector[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pSelector[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pSelector[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


pSelector[5].textContent = "123 Way 456 Street Somewhere, USA";
pSelector[6].textContent = "1 (888) 888-8888";
pSelector[7].textContent = "sales@greatidea.io";


