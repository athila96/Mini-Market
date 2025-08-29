import express from "express";
import {registerProductsRouter} from './products.router';

const app = express();
const PORT = 3001;

registerProductsRouter(app);





app.listen(PORT, () => {
    console.log(`Server escuchando en: ${PORT}`);
});