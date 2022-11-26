import { CTX } from "./constants";
import {
    downPressed,
    lastButtonPressed,
    leftPressed,
    rightPressed,
    upPressed
} from "./keyHandler";

const link = new Image();
link.src = "/imgs/characters/link.png";

const animationSpeed = 10;
let animationCounter = 0;
let currentAnimation = 0;
let linkX = 116;
let linkY = 135;

export function drawLink() {
    const speed = 2;
    animationCounter++;

    if (leftPressed) {
        linkX -= speed;

        if (currentAnimation === 0) {
            CTX.drawImage(link, 30, 0, 16, 16, linkX, linkY, 16, 16);
        } else if (currentAnimation === 1) {
            CTX.drawImage(link, 30, 30, 16, 16, linkX, linkY, 16, 16);
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) currentAnimation = 0;
        }
    } else if (rightPressed) {
        linkX += speed;

        if (currentAnimation === 0) {
            CTX.drawImage(link, 91, 0, 16, 16, linkX, linkY, 16, 16);
        } else if (currentAnimation === 1) {
            CTX.drawImage(link, 91, 30, 16, 16, linkX, linkY, 16, 16);
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) currentAnimation = 0;
        }
    } else if (upPressed) {
        linkY -= speed;

        if (currentAnimation === 0) {
            CTX.drawImage(link, 62, 0, 16, 16, linkX, linkY, 16, 16);
        } else if (currentAnimation === 1) {
            CTX.drawImage(link, 62, 30, 16, 16, linkX, linkY, 16, 16);
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) currentAnimation = 0;
        }
    } else if (downPressed) {
        linkY += speed;

        if (currentAnimation === 0) {
            CTX.drawImage(link, 0, 0, 16, 16, linkX, linkY, 16, 16);
        } else if (currentAnimation === 1) {
            CTX.drawImage(link, 0, 30, 16, 16, linkX, linkY, 16, 16);
        }
        if (animationCounter >= 6) {
            currentAnimation++;
            animationCounter = 0;
            if (currentAnimation > 1) currentAnimation = 0;
        }
    } else {
        if (lastButtonPressed === "down")
            CTX.drawImage(link, 0, 0, 16, 16, linkX, linkY, 16, 16);

        if (lastButtonPressed === "up")
            CTX.drawImage(link, 62, 0, 16, 16, linkX, linkY, 16, 16);

        if (lastButtonPressed === "left")
            CTX.drawImage(link, 30, 0, 16, 16, linkX, linkY, 16, 16);

        if (lastButtonPressed === "right")
            CTX.drawImage(link, 91, 0, 16, 16, linkX, linkY, 16, 16);
    }
}
