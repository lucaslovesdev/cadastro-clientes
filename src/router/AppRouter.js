import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddClient from '../components/AddClient';
import ClientsList from '../components/ClientsList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [clients, setClients] = useLocalStorage('clients', []);

  return (
    <BrowserRouter>
      <div class={`
          bg-gradient-to-r from-purple-500 to-blue-600
      `}>
        <Header />
        <div class={`
          flex h-screen justify-left items-left p-2
          bg-gradient-to-r from-purple-500 to-blue-600
        `}>
          <Switch>

              <Route
              
                render={(props) => (
                  <ClientsList {...props} clients={clients} setClients={setClients} />
                )}
                path="/"
                exact={true}
              />
              <Route
                render={(props) => (
                  <AddClient {...props} clients={clients} setClients={setClients} />
                )}
                path="/add"
              />
             
            {/*
              <Route
                render={(props) => (
                  <EditClient {...props} clients={clients} setClients={setClients} />
                )}
                path="/edit/:id"
              />
              <Route component={() => <Redirect to="/" />} />
            */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
