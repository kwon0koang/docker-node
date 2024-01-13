
// TcpSocket ======================================================================================================================================================

const net = require('net');

const PORT = 3000;

let intervalId;

const server = net.createServer((socket) => {
    console.log('클라이언트 연결됨');

    // 클라이언트로부터 데이터 받음
    socket.on('data', (data) => {
        console.log(`클라이언트에서 받은 데이터: ${data}`);

        // 클라이언트에 랜덤 숫자 빠르게 전송
        if (data == 'request_fast_number') {
            intervalId = setInterval(() => {
                const randomNumber = Math.floor(Math.random() * 100);
                socket.write(randomNumber.toString());
            }, 10);
        } else if (data == 'cancel_fast_number') {
            clearInterval(intervalId); // 인터벌 멈춤
        }

    });

    // 클라이언트가 연결 종료
    socket.on('end', () => {
        console.log('클라이언트가 연결 종료');
        clearInterval(intervalId); // 클라이언트 연결이 끊기면 인터벌을 멈춤
    });

});

server.listen(PORT, () => {
    console.log(`서버 ${PORT} 포트 대기 중`);
});

// WebSocket ======================================================================================================================================================

// const WebSocket = require('ws');

// const PORT = 3000;

// const wss = new WebSocket.Server({ port: PORT });

// console.log(`Server is running on port ${PORT} / wss = ${wss}`);

// wss.on('connection', (ws) => {
//     console.log('Client connected');

//     // 클라이언트에게 랜덤 숫자 전송
//     const sendRandomNumber = () => {
//         const randomNumber = Math.floor(Math.random() * 100);
//         ws.send(randomNumber.toString());
//     };

//     // 100ms 마다 랜덤 숫자 전송
//     const intervalId = setInterval(sendRandomNumber, 10);

//     ws.on('close', () => {
//         console.log('Client disconnected');
//         clearInterval(intervalId); // 클라이언트 연결이 끊기면 인터벌을 멈춤
//     });
// });

// WebSocket ======================================================================================================================================================

// const WebSocket = require('ws');
// const PORT = 3000;
// const wss = new WebSocket.Server({ port: PORT });
// const clients = new Set();

// console.log(`Server is running on port ${PORT} / wss = ${wss}`);

// wss.on('connection', (ws) => {
//     console.log('Client connected!');

//     // Add the new client to the set of connected clients
//     clients.add(ws);

//     // send hello message to client
//     ws.send('Hello, client!');

//     // Notify existing clients about the new client joining
//     clients.forEach((client) => {
//         if (client !== ws) {
//             client.send('A new client has joined!');
//         }
//     });

//     // handle incoming messages from client
//     ws.on('message', (message) => {
//         console.log(`Received message: ${message}`);

//         if (message.toString() == '/time') {
//             ws.send(new Date().toLocaleTimeString());
//         } else if (message.toString() == '/date') {
//             ws.send(new Date().toDateString().substring(4));
//         } else if (message.toString() == '/day') {
//             switch (new Date().getDay()) {
//                 case 1:
//                     ws.send('Monday');
//                     break;
//                 case 2:
//                     ws.send('Tuesday');
//                     break;
//                 case 3:
//                     ws.send('Wednesday');
//                     break;
//                 case 4:
//                     ws.send('Thursday');
//                     break;
//                 case 5:
//                     ws.send('Friday, happy weekend!');
//                     break;
//                 case 6:
//                     ws.send('Saturday');
//                     break;
//                 case 7:
//                     ws.send('Sunday');
//                     break;
//                 default:
//                     ws.send("Yesterday is history, tomorrow is a mystery. Today is a gift, that's why they call it the present!");
//                     break;
//             }
//         } else if (message.toString().substring(0, 5) == '/all:') {
//             clients.forEach((client) => {
//                 client.send(message.toString().substring(5));
//             });
//         } else if (message.toString().substring(0, 8) == '/others:') {
//             clients.forEach((client) => {
//                 if (client !== ws) {
//                     client.send(message.toString().substring(8));
//                 }
//             });
//         } else {
//             ws.send(message.toString());
//         }
//     });

//     // handle client disconnection
//     ws.on('close', () => {
//         console.log('Client disconnected.');
//         // Remove the client from the set of connected clients
//         clients.delete(ws);
//         // notify the others
//         clients.forEach((client) => {
//             client.send('One of the clients disconnected.');
//         });
//     });
// });

// Express ======================================================================================================================================================

// const express = require('express');
// const app = express();
// const port = 3000;

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100);
// }

// app.get('/', (req, res) => {
//     res.send(`랜덤 숫자 : ${getRandomNumber()}`);
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

// setInterval(() => {
//     // 100ms마다 랜덤 숫자를 로그로 출력
//     console.log(`Random Number : ${getRandomNumber()}`);
// }, 100);
