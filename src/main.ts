import { CTX, FPS } from "./constants";

import { drawMap } from "./map/map";
import { map7_7 } from "./map/mapData";

import { keyDownHandler, keyUpHandler } from "./keyHandler";

import { drawLink } from "./linkCharacter";

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function draw() {
    setTimeout(function () {
        requestAnimationFrame(draw);

        CTX.fillStyle = "rgb(20,20,20)";
        CTX.fillRect(0, 0, 256, 240);

        drawMap(map7_7);
        drawLink();
    }, 1000 / FPS);
}

draw();
