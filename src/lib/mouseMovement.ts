import { mouse, left, right, up, down } from '@nut-tree/nut-js';

//mouse.config.mouseSpeed = 2000;

async function moveMouseLeft(data: string) {
    await mouse.move(left(Number(data)));
}

async function moveMouseRight(data: string) {
    await mouse.move(right(Number(data)));
}

async function moveMouseUp(data: string) {
    await mouse.move(up(Number(data)));
}

async function moveMouseDown(data: string) {
    await mouse.move(down(Number(data)));
}

async function getMousePosition() {
    const position = await mouse.getPosition();
    console.log(`-> mouse_position ${position.x},${position.y}`);
}

export { moveMouseLeft, moveMouseRight, moveMouseUp, moveMouseDown, getMousePosition };
