const fs = require('fs');

let html = fs.readFileSync('preview.html', 'utf8');

// 1. Add margin-right to the transition list for smooth counter-animation
html = html.replace(
  /left 0\.3s cubic-bezier\(0\.89, 0\.34, 0\.2, 0\.83\),\s*opacity 0\.4s ease-in;/g,
  "left 0.3s cubic-bezier(0.89, 0.34, 0.2, 0.83),\n    margin-right 0.4s ease-out,\n    opacity 0.4s ease-in;"
);

// 2. Add margin-right offset for desktop hover
html = html.replace(
  /\.services-block \.service \.title a:hover \{\s*box-shadow: none;\s*text-decoration: none;\s*padding-right: 42px; \/\* Expand on hover to fit arrow \+ gap \*\/\s*\}/g,
  `.services-block .service .title a:hover {
  box-shadow: none;
  text-decoration: none;
  padding-right: 42px; /* Expand on hover to fit arrow + gap */
}

/* Offset the width increase in the layout so grid alignment doesn't shift the origin point */
.services-block .service:hover .title {
  margin-right: -28px !important;
}`
);

// 3. Add margin-right offset for mobile hover
html = html.replace(
  /\.services-block \.service:hover \.title a,\s*\.services-block \.service:active \.title a \{\s*padding-right: 36px !important;\s*\}/g,
  `.services-block .service:hover .title a,
  .services-block .service:active .title a {
    padding-right: 36px !important;
  }
  
  .services-block .service:hover .title,
  .services-block .service:active .title {
    margin-right: -22px !important;
  }`
);

fs.writeFileSync('preview.html', html);
console.log("Patch successfully applied!");
