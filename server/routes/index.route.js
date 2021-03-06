import express from 'express';
import userRoutes from './user.route';
import qrRoutes from './qr.route';
import captchaRoutes from './captcha.route';

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send("hope is hope, nerver lose his way");
});

router.use('/users', userRoutes);
router.use('/qr', qrRoutes);
router.use('/captcha', captchaRoutes);

export default router;
