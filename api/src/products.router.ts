import {Express} from 'express';
import dataProducts from './data/products.json';

export function registerProductsRouter(app: Express) {
    // todos los productos
    app.get('/api/products', (req, res) => {
        res.json(dataProducts);
    });

    // Producto por id
    app.get('/api/products/:id', (req, res) => {
        const {id} = req.params;
        const product = dataProducts.find(p => p.id ===req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({message: 'Producto no encontrado'});
        };
    });

};

