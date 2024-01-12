const express = require('express');
const app = express();
const port = 3000;

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

app.get('/', (req, res) => {
    res.send(`랜덤 숫자 : ${getRandomNumber()}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

setInterval(() => {
    // 100ms마다 랜덤 숫자를 로그로 출력
    console.log(`Random Number : ${getRandomNumber()}`);
}, 100);
