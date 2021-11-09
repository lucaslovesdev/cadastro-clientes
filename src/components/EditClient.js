import React from 'react';
import ClientForm from './ClientForm';
import { useParams } from 'react-router-dom';

const EditClient = ({ history, clients, setClients }) => {
  const { id } = useParams();
  const clientToEdit = clients.find((client) => client.id === id);

  const handleOnSubmit = (client) => {
    const filteredClients = clients.filter((client) => client.id !== id);
    setClients([client, ...filteredClients]);
    history.push('/');
  };

  return (
    <div>
      <ClientForm client={clientToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditClient;
