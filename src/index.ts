import { httpServer } from './http_server/http_server';
// import { mouse } from '@nut-tree/nut-js';
import { WebSocketServer } from 'ws';
import * as dotenv from 'dotenv';
dotenv.config();

const HTTP_PORT = process.env.PORT || 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });
//console.log(wss.address());
wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (data) => {
        console.log(data.toString());
    });

    ws.on('close', function () {
        console.log('Client disconnected');
    });
    //ws.send('something');
    // process.on('exit', () => {
    //   ws.close();
    //   ws.terminate();
    // })
});

// process.on('SIGINT', () => process.exit());
// process.on('exit', () => {
//   // wss.close();
//   //wss.clients.delete(ws);
//   console.log(wss.clients);
// })
