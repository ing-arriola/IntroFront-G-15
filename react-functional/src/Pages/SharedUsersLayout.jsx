import { Outlet } from 'react-router-dom'

export const SharedUsersLayout = () => {
  return (
    <>
        <h2>HOLA SOY UN HEADER</h2>
        <Outlet/>
        
    </>
  )
}
