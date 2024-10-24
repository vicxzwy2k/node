import {Router,Request,Response, RequestHandler} from 'express'
import * as HomeController from '../controllers/homeController'
import * as userController from '../controllers/userController'
import * as infoController from '../controllers/infoController'


const router = Router()

//ROTA 
router.get('/', HomeController.home)
router.get('/nome',infoController.nome)
router.get('/login',infoController.login)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idadeR )
router.get('/cadastro',userController.cadastro)
router.post('/cadastro-senha',userController.cadastroS)

export default router
