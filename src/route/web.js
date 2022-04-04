import express from 'express';
import indexController from '../controllers/indexController';
import memberController from '../controllers/memberController';
import parityController from '../controllers/parityController';
import loginController from '../controllers/loginController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.redirect('/index');
    });

    router.get('/index', indexController.getIndex);
    router.get('/home/search', indexController.getHome);
    router.get('/account/login', loginController.getPageLogin);
    router.post('/account/login', loginController.loginFunc);
    router.get('/member/index', memberController.getPageMember);
    router.get('/parity/tran', parityController.getPageParity);

    return app.use('/', router);
}

export default initWebRoutes;