import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import OrpanagesController from './controllers/OrphanagesController';
import multer from 'multer';

import uploadConfig from './config/upload';
import Orphanage from './models/Orphanages';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.get('/orphanages', OrphanagesController.index);

export default routes;