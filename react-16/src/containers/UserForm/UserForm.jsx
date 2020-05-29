import React, { useState } from 'react';
import UserProfile from "../UserProfile/UserProfile";

import SuccessMessage from '../../components/SuccessMessage';

import { DEFAULT_USER, POST_USER_LINK } from "../../utils/constants";

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState(DEFAULT_USER.name);
  const [avatar, setAvatar] = useState(DEFAULT_USER.avatar);
  const [userName, setUserName] = useState(DEFAULT_USER.username);
  const [email, setEmail] = useState(DEFAULT_USER.email);

  const [user, setUser] = useState(DEFAULT_USER);

  const [submit, setSubmit] = useState(false)


  async function handleSubmit(event) {
    event.preventDefault();

    if (name === "" || userName === "" || email === "") {
      alert("Nome, usuário e email são obrigatórios.");
    }
    else {
      setUser({name, avatar, userName, email});

      await fetch(POST_USER_LINK, {
        method: "POST",
        body: JSON.stringify(user),
      })
    }
    setSubmit(true);
  }
  

  return (
    <React.Fragment>
      <form data-testid="user-form" onSubmit={(event) => handleSubmit(event)}>
        <UserProfile />
        <section className="post__form">
          <div className="container">
            <div className="post__form__wrapper">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Ex.: John Tron"
                value={name}
                onChange={({target}) => { setName(target.value) }}
              />

              <label>Usuário</label>
              <input
                type="text"
                placeholder="Ex.: john_tron"
                value={userName}
                onChange={(event) => { setUserName(event.target.value) }}
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="Ex.: johntron@yahoo.com"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
              />

              <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
              <input
                type="text"
                placeholder="http://..."
                onChange={(event) => { setAvatar(event.target.value) }}
              />

              <button type="submit" >Cadastrar</button>
            </div>
          </div>
        </section>
      </form>
      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
