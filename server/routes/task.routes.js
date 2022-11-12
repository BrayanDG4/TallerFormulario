import {Router} from 'express';
import {
    createCandidate
} from '../controller/tasks.controllers.js';

const router = Router();

router.get('');

router.post('/register', createCandidate);

export default router;