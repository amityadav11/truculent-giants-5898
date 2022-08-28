let body = () => {

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="styles/body.css">
        <link rel="stylesheet" href="styles/products.css">
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
        <title>Body</title>
    </head>
    
    <body>
        <!-- Flickity HTML init -->
        <div class="carousel" data-flickity='{  "cellAlign": "left", "contain": true }'>
           
        </div>
        
    </body>
    
    </html>
    <script src="scripts/main_body.js"></script>
    <script src="scripts/products_data.js"></script>
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

    `
}