import { CTX, FPS } from "./constants";
import { drawMap } from "./map/map";
import { map7_7 } from "./map/mapData";

function draw() {
    setTimeout(function () {
        requestAnimationFrame(draw);

        CTX.fillStyle = "rgb(20,20,20)";
        CTX.fillRect(0, 0, 256, 240);

        drawMap(map7_7);
    }, 1000 / FPS);
}

draw();
