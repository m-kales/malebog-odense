function downloadPNG() {
    const svgElement = document.querySelector('.illustration');
    let {width, height} = svgElement.getBBox();

    let clonedSvgElement = svgElement.cloneNode(true);

    let outerHTML = clonedSvgElement.outerHTML,
    blob = new Blob([outerHTML],{type:'image/svg+xml;charset=utf-8'});

    let URL = window.URL || window.webkitURL || window;
    let blobURL = URL.createObjectURL(blob);

    let image = new Image();

    image.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        let context = canvas.getContext('2d');
        
        context.drawImage(image, 0, 0, width, height);
        // downloadImage(canvas);
        let png = canvas.toDataURL();

        const download = function(href, name) {
            const link = document.createElement('a');
            link.download = name;
            link.style.opacity = '0';
            document.body.appendChild(link);
            link.href = href;
            link.click();
            link.remove();
        }

        download(png, 'image.png');
    }

    image.src = blobURL;
    console.log(blobURL);
}