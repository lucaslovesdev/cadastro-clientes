import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header >
      <div class="p-3 w-screen ">
        <p class="p-2 font-mono text-xl font-semibold tracking-widest text-white">Cadastro de Clientes</p>
      </div>
      <hr />
      <div class="flex flex-row ...  space-x-10 ...">
        <div class="pt-3 pl-6 p-2.5 ">
          <NavLink to="/" className="link" activeClassName="active" exact>
            <button type="button" class="rounded-sm ... ... ring-4 ring-indigo-400 w-28 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
              <p class="font-mono font-semibold  text-white">Clientes</p>
            </button>
          </NavLink>
        </div>
        <div class="pt-3 p-2.5 pl-6 ">  
          <NavLink to="/add" className="link" activeClassName="active">
            <button type="button" class="rounded-sm ... ... ring-4 ring-indigo-400 w-28 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
              <p class="font-mono font-semibold  text-white">+ Cadastrar</p>
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
