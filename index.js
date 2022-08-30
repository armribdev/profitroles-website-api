const express = require('express');

const PORT = process.env.PORT || '3000'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.status(200).json({ name: 'Armand', doing: 'Coding' })
});

app.get('/image', (request, response) => {
    response.status(200).json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
});