import express from 'express';

const app = express();
app.use(express.static(__dirname + '/client'));
/* Server listen */
const server = app.listen("3000", () => {
    console.log(`Server start on port 3000`);
});

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});