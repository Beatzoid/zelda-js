import { CTX, TILES_SRC } from "../constants";

const worldTiles = new Image();
worldTiles.src = TILES_SRC;

export function drawMap(level: number[][]) {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            // prettier-ignore
            CTX.drawImage(worldTiles, ((level[i][j] % 18) * 17) + 1,
			                         (Math.floor(level[i][j] / 18) * 17) + 1, 
			                          16, 16, j * 16, i * 16, 16, 16);
        }
    }
}
