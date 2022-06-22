import Input from "../../form/Input";

import styles from '../../form/Form.module.css' 
import { Link } from "react-router-dom";

function Register() {
  function handleOnChange(e){}
  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form>
        <Input 
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleOnChange}
        />

        <Input 
          text="Telefone"
          type="text"
          name="name"
          placeholder="Digite o seu telefone"
          handleOnChange={handleOnChange}
        />

        <Input 
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleOnChange}
        />

        <Input 
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleOnChange}
        />

        <Input 
          text="Confirmação de senha"
          type="password"
          name="confirmPassword"
          placeholder="Confirm a sua senha"
          handleOnChange={handleOnChange}
        />

        <input type='submit' value='cadastrar' />
      </form>  

      <p>
        Já tem conta? <Link to='/login'>clique aqui.</Link>
      </p>
    </section>
  )
}

export default Register;