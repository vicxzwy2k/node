import { Request, Response } from "express"





      //GET exibe  a pagina
export const idade = ((req:Request,res:Response)=>{
    res.render('pages/idade')
})

   //POST processa as informaçoes
export const idadeR = ((req:Request,res:Response) =>{
    let idade: number = 0
    let mostrarIdade: boolean = false
    
    if(req.body.anoNascimento) {
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear()//2024
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    
    res.render('pages/idade',{
        idade,
        mostrarIdade
    })

})

//GET exibe  a pagina
export const cadastro = ((req:Request,res:Response)=>{
    res.render('pages/cadastro')
})


 //POST processa as informaçoes
 export const cadastroS = ((req:Request,res:Response) =>{
  
    let email: string = req.query.email as string
    let senha: string = req.query.senha as string

 
    res.render('pages/cadastro',{
        email,
        senha
    })

})