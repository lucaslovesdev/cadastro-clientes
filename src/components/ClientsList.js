import React from 'react';
import _ from 'lodash';
import Client from './Client';

const ClientsList = ({ clients, setClients }) => {

  const handleRemoveClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <React.Fragment>
      <div class="pt-2 grid grid-cols-4 gap-1 bg-gradient-to-r from-purple-500 to-blue-600 ">
        {!_.isEmpty(clients) ? (
          clients.map((client) => (
            <Client class="space-y-2 ..." key={client.id} {...client} handleRemoveClient={handleRemoveClient} />
          ))
        ) : (
          <p class="font-mono font-semibold  text-white pl-6">Sem Clientes Disponíveis. Por favor, cadastre alguns clientes.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ClientsList;

