import {Request, Response } from 'express';

import pool from '../database'; 

class ProductsController {

   public async list (req : Request, res : Response){
        res.send('Aqui estan los Productos');
        //const products = await pool.query('SELECT * FROM PRODUCTS');
        //res.json(products);
    
    }

    public async getOne(req: Request, res: Response){
        const {id} = req.params;
       await pool.query('SELECT * FROM PRODUCTS WHERE ID = ?', [id])

        res.json({text: 'Este es el producto  ' + req.params.id});
    }

    public async create(req: Request, res: Response){
        res.json({text: 'crear un producto'});
      // await pool.query('INSERT IN TO PRODUCTS SET ?', [req.body]);
    }

    public delete(req: Request, res: Response){
        res.json({text: 'borrando un producto ' + req.params.id});
    }

    public update(req: Request, res: Response){
        res.json({text: 'Actualizando un producto ' + req.params.id});
    }



}

const productsController = new ProductsController();

export default productsController;