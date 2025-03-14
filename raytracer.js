const WIDTH = 1920;
const HEIGHT = 1080;

const image = new Image(WIDTH, HEIGHT);
document.image = image;

for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
        image.putPixel(x, y, {
            r: x / WIDTH * 256,
            g: y / HEIGHT * 256,
            b: 256 - ((256 / WIDTH) * x) - ((256 / HEIGHT) * y),
        });
    }
}

image.renderInto(document.querySelector('main'));