import { Request, Response } from "express"

//colocar a rota contato e sobre aqui

export const nome = ((req:Request,res:Response) =>{
    // iremos fazer uma requisição ao usuario (usando req) o "as string" é para ajudar o typescript
    // a especificar o tipo desse dado que vou receber, e o query significa que é um dado que vou receber,
    // e o query significa que é um dado que será enviado pela url. 
    
        let nome: string = req.query.nome as string
        res.render('pages/nome',{
            nome
        })
})

export const login = ((req:Request,res:Response) =>{
    // iremos fazer uma requisição ao usuario (usando req) o "as string" é para ajudar o typescript
    // a especificar o tipo desse dado que vou receber, e o query significa que é um dado que vou receber,
    // e o query significa que é um dado que será enviado pela url. 
    
        let nome: string = req.query.nome as string
        let endereco: string = req.query.endereco as string
        let idade: number = parseInt(req.query.idade as string)
        let telefone: number = parseInt(req.query.telefone as string)

        res.render('pages/login',{
            nome,
            endereco,
            idade,
            telefone
        })
    })