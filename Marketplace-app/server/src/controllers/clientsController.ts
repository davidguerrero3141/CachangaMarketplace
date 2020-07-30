import {Request, Response } from 'express';

class ClientsController {

   public list (req : Request, res : Response){
        res.send('Clietnes');
    }

    public create(req: Request, res: Response){
        res.json({text: 'crear un Cliente'});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'borrando un Cliente '  + req.params.id});
    }

    public update(req: Request, res: Response){
        res.json({text: 'Actualizando un Cliente ' + req.params.id});
    }

    public getOne(req: Request, res: Response){
        res.json({text: 'Este es el cliente ' + req.params.id});
    }

}

const clientsController = new ClientsController();
export default clientsController;