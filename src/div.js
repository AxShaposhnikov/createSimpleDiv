'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let el = document.createElement('div');
        el.textContent = 'We create a div';
        document.body.appendChild(el);
        let params = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        el.style.cssText = params;

    }
}

let op = new Options(300, 800, 'yellow', 30, 'center');
op.createDiv();