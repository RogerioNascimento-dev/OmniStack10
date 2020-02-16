import React, { useState, useEffect } from "react";
import "./Global.css";
import "./Main.css";
import "./Aside.css";
import "./App.css";
import "./Animacoes.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setGithubUsername] = useState("");
  const [tecs, setTecs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      erro => {
        console.log(erro);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    console.log(latitude, longitude, github_username, tecs);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input
              name="github_username"
              id="github_username"
              value={github_username}
              required
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="tecs">Tecnologias</label>
            <input
              name="tecs"
              id="tecs"
              value={tecs}
              required
              onChange={e => setTecs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Latitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/40906099"
                alt="RogerioNascimento-dev"
              />
              <div className="user-info">
                <strong>Rogério Nascimento</strong>
                <span>ReactJS,React,NodeJS,PHP</span>
              </div>
            </header>
            <p>
              Analista de sistemas e desenvolvedor de softwares Web e Mobile
            </p>
            <a href="https://github.com/RogerioNascimento-dev">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
