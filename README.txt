Ideal Cameras - coming soon page

Upload the whole contents of this folder to your web host (public_html / www / htdocs), keeping the structure:

  index.html
  css/style.css
  js/main.js
  img/logo.png   (img/logo.webp is an optional lighter copy)

Email sign-up: open js/main.js, find  var ENDPOINT=''  and paste your form endpoint
(Formspree, Google Apps Script, your own API...). It receives POST {"email": "..."} as JSON.
Until then, emails are only stored in the visitor's own browser.
