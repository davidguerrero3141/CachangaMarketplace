"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientsController {
    list(req, res) {
        res.send('Clietnes');
    }
    create(req, res) {
        res.json({ text: 'crear un Cliente' });
    }
    delete(req, res) {
        res.json({ text: 'borrando un Cliente ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'Actualizando un Cliente ' + req.params.id });
    }
    getOne(req, res) {
        res.json({ text: 'Este es el cliente ' + req.params.id });
    }
}
const clientsController = new ClientsController();
exports.default = clientsController;
