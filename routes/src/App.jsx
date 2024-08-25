import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'


function App() {

  const isAutenticated = true //Verifica se o usuário está autenticado
  function loginRedirect(componente) {
    if (isAutenticated) {
      return <Navigate to='/' replace /> //O `Navigate` é um componente que realiza o redirecionamento do usuário para outra rota.
    }
    return componente
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={loginRedirect(<Signin />)}></Route>
          <Route path='/cadastro' element={loginRedirect(<Signup />)}></Route>

          {isAutenticated ?
            (
              <>
                <Route path='/' Component={Home}></Route>
              </>
            )
            :
            (
              <>
                {/*
              Caso o usuário tente acessar uma página que não exista ou que necessite de autenticação, o path='*' direciona para a página de autenticação. Nesse caso, to='/login'
              */}
                <Route path='*' element={<Navigate replace to='/login' />}></Route>
              </>
            )
          }
        </Routes>
      </BrowserRouter>

      {/* 
          ROTAS:
        - rota /home pages/Home
        - rota / pages/Home
        - rota /configuracoes pages/Configuracoes
        - rota /login pages/Login
     */}

    </>
  )
}

export default App
