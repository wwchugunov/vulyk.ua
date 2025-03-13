import './App.css'

function App() {

  return (
    <>
      <div className="bacground">
        <div className="container">
          <div className="formBox">
            <div className="logo">VULYK.UA</div>
            <form action="" className="registerForm">
              <input type="email" placeholder="пошта" />
              <input type="password" placeholder="пароль" />
              <div className="formBtn">
                <button type="submit">Реєстрація</button>
                <button type="submit">Вхід</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
