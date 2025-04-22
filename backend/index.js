//for future apis
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const PORT = process.env.PORT||6969;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
