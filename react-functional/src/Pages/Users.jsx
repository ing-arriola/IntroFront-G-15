import React, {useState, useEffect} from 'react' //No olvide el import de los hooks a usar
import { placeholderApi } from '../Api/placeholderApi'

export const Users = () => {
    
    const [users, setUsers] = useState([]) // argumento de useState es el valor inicial que queremos para nuestro estado
    const getUserData = async() => {
        const res = await placeholderApi.get('/users')
        setUsers(res.data)
        console.log('me volvi a crear')
    }

// Una funcion que se ejecuta "cuando nuestro componente se monta por primera vez en la UI"
    useEffect(() => {
        console.log('hola me monte en la pantalla')
        getUserData()
        return () => {
            console.log('adios!!')
        }
    },[])//Arreglo de dependecias, nos indica cuando se va a volver a ejecutar el useEffect

//1. Arreglo vacio
//2. Que tenga dependencias
//3. Que no exista arreglo de depencias

    
  return (
    <>
           <ul>
        {
            users.map(user => (
                <li key={user.id} >
                    <p>
                        {
                            `Name: ${ user.name}, Username ${user.username}, email: ${user.email}`
                        }
                    </p>        
                </li>
            ))
        }
        </ul>   
    </>
  )
}
