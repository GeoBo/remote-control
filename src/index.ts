import { httpServer } from './http_server/http_server';
import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import parseCommand from './lib/parseCommand';
import { truncateString } from './lib/utils';
dotenv.config();

const HTTP_PORT = process.env.PORT || 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (data) => {
        const command = data.toString();
        console.log(`<- ${command}`);
        parseCommand(command)
            .then((answer) => {
                if (typeof answer !== 'string') return;
                ws.send(answer);
                const formatAnswer = truncateString(answer);
                console.log(`-> ${formatAnswer}`);
            })
            .catch((error) => console.error(error));
    });

    ws.on('close', function () {
        console.log('Client disconnected');
    });
});
