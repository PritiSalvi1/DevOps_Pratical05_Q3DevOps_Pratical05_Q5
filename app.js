const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Hello from Github NodeJs!  This is DevOps Practical 5 Question no 5 - Priti');
});
setTimeout(() => {
    server.close(() => {
        console.log('Server stopped after 30 seconds');
    });
}, 30000); 
