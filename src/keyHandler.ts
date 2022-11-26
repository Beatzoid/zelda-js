export let rightPressed = false;
export let leftPressed = false;
export let upPressed = false;
export let downPressed = false;
export let lastButtonPressed = "up";

export function keyUpHandler(e: DocumentEventMap["keydown"]) {
    if (e.key === "ArrowLeft") {
        leftPressed = false;
    } else if (e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "ArrowUp") {
        upPressed = false;
    } else if (e.key === "ArrowDown") {
        downPressed = false;
    }
}

export function keyDownHandler(e: DocumentEventMap["keydown"]) {
    if (e.key === "ArrowLeft") {
        leftPressed = true;
        lastButtonPressed = "left";
    } else if (e.key === "ArrowRight") {
        rightPressed = true;
        lastButtonPressed = "right";
    } else if (e.key === "ArrowUp") {
        upPressed = true;
        lastButtonPressed = "up";
    } else if (e.key === "ArrowDown") {
        downPressed = true;
        lastButtonPressed = "down";
    }
}
