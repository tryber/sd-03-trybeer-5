import React, { useState } from 'react';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seller, setSeller] = useState(false);

  function validateName(currentName) {
    // Fonte do regex : https://stackoverflow.com/questions/12778083/regex-with-space-and-letters-only
    const regex = new RegExp(/^[a-zA-Z\s]+$/);
    const maxLength = 12;
    if (!regex.test(currentName) || currentName.length < maxLength) {
      return false;
    }
    return true;
  }

  function validateEmail(currentEmail) {
    // Fonte do regex : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    if (!regex.test(currentEmail)) {
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateName(name) && validateEmail(email)) {
      fetch('https://localhost:3001/register', {
        method: 'POST',
        body: {
          name,
          email,
          password,
          seller,
        },
      }).then((response) => {
        console.log(response.json());
        return response.json();
      });
    }
  }

  return (
    <div className="SignupPage container">
      <h1 className="text-center">Trybeer - Registro de novo Usuário</h1>
      <div>
        <form className="form" method="POST" onSubmit={ handleSubmit }>
          <div className="form-group">
            <label htmlFor="name">
              Nome
              <input
                data-testid="signup-name"
                className="form-control"
                minLength="12"
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                onChange={ (e) => setName(e.target.value) }
                value={ name }
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                data-testid="signup-email"
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail válido"
                onChange={ (e) => setEmail(e.target.value) }
                value={ email }
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Senha
              <input
                data-testid="signup-password"
                className="form-control"
                type="password"
                name="password"
                minLength="6"
                id="password"
                placeholder="Escolha uma senha"
                onChange={ (e) => setPassword(e.target.value) }
                value={ password }
                required
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="seller">
              <input
                data-testid="signup-seller"
                className="form-check-input"
                type="checkbox"
                name="seller"
                id="seller"
                onChange={ (e) => setSeller(e.target.checked) }
                value={ seller }
              />
              Quero vender
            </label>
          </div>
          <input type="submit" value="Registrar" data-testid="signup-btn" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
