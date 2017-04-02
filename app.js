import express from 'express';

const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/client'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

router.get('/diagrams', (req, res) => {
    res.sendFile(__dirname + '/client/diagrams.html');
});

app.use(router);
/* Server listen */
const server = app.listen("3000", () => {
    console.log(`Server start on port 3000`);
});