import LoginPage from '@/components/Login/Login'
import React, { ReactNode } from 'react'

const Login = () => {
  return (
    <LoginPage />
  )
}

Login.getLayout =(page:ReactNode):ReactNode =>{
    return(
        <>
            {page}
        </>
    )
}

export default Login