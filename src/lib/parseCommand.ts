import { getMousePosition, moveMouseDown, moveMouseLeft, moveMouseRight, moveMouseUp } from './mouseMovement';

async function parseCommand(data: string) {
    const arr = data.split(' ');
    const command = arr[0];
    const value = arr[1];
    //const value = arr.slice(1);

    switch (command) {
        case 'mouse_up':
            await moveMouseUp(value);
            break;
        case 'mouse_down':
            await moveMouseDown(value);
            break;
        case 'mouse_left':
            await moveMouseLeft(value);
            break;
        case 'mouse_right':
            await moveMouseRight(value);
            break;
        case 'mouse_position':
            await getMousePosition();
            break;
        default:
            console.log('Unknown command');
    }
}

export default parseCommand;
