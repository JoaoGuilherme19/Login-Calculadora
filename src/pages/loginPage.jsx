import './app.css'

import Tilt from 'react-parallax-tilt';

function LoginPage() {


  function handleSubmit (e) {
    e.preventDefault();
    var logged;
    const email = e.target.children[2].children[0].value
    const senha = e.target.children[3].children[0].value
    if (email === 'admin@admin' && senha === '321321') {
      console.log(email,senha);
      e.target.children[1].textContent = ''
      window.location.href = "/boxes";
      logged = true
      return
    }
    if (logged === undefined) {
      e.preventDefault();
      e.target.children[1].textContent = 'Email ou Senha incorreta!'
    }
    console.log(logged);

  }

    return(
        <Tilt>
              <form className="form-group" onSubmit={handleSubmit}>
              <h1>Login Page</h1>
              <p>LOGIN: admin@admin SENHA:321321</p>
              <h2></h2>
                <div className="form-input">
                  <input required 
                    type="text"
                    name="email"
                    id="email"
                    autoComplete='off'
                    />
                    <label htmlFor="email" >EMAIL</label>
                </div>
                  <div className="form-input">
                    <input required 
                    type="password"
                    name="password"
                    id="password"
                    autoComplete='off'
                    />
                    <label htmlFor="password">SENHA</label>
                  </div>
                <button type="submit">Enviar</button>
              </form>
        </Tilt>
    )
}
export default LoginPage
