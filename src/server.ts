import{ Request, Response } from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('dist/scripts'));
app.set('view engine', 'ejs');
app.set("views", __dirname + "/../views");


app.get('/', (req: Request, res: Response) => {
    res.status(200).render('index');
});


app.get('/login', (req: Request, res: Response) => {
    res.status(200).render('index');
});

app.get('/menu', (req: Request, res: Response) => {
    res.status(200).render('menu', { role: 'admin' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});