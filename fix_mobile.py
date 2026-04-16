with open("app/page.jsx", "r") as f:
    page_code = f.read()

page_code = page_code.replace('<section ref={secRef} style={{', '<section id="hero-section" ref={secRef} style={{')

with open("app/page.jsx", "w") as f:
    f.write(page_code)
