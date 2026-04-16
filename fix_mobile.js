const fs = require('fs');
let code = fs.readFileSync('app/page.jsx', 'utf8');

// Replace HeroSection ID
code = code.replace('<section ref={secRef} style={{', '<section id="hero-section" ref={secRef} style={{');

fs.writeFileSync('app/page.jsx', code);
console.log("Fixed page.jsx");
