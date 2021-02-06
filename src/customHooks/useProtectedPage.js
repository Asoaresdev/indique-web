 import { useEffect } from "react"
 import { useHistory } from "react-router-dom"

 const useProtectedPage = () => {
     const history = useHistory()

     //Assim que a pagina é solicitada, realiza a verificação do usuário
     useEffect(() => {
         const token = localStorage.getItem('token')
         if(!token) {
             history.push('/') //Sem a autorização, é direcionado para a página de login
         }
     }, [history])
 }

 export default useProtectedPage