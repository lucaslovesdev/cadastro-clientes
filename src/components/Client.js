import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Client = ({
  id,
  clientname,
  lastname,
  email,
  phone,
  cep,
  address,
  birthdate,
  cpf,
  monthlyincome,
  date,
  handleRemoveClient
}) => {
  const history = useHistory();
  return (
    <div class="pb-3 pl-3 ">
      <div class="rounded-sm ... ... ring-4 ring-indigo-400 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 ...">
        <div  class=" rounded-sm ... ... ring-4 ring-indigo-400 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." class="client">
          <Card.Body class="p-1 ">
            <Card.Title class="font-mono font-semibold  text-white pl-1">
              
                <p>
                  <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> 
                    Nome:{clientname}
                  </a>
                </p>    
              
            </Card.Title>
                <div class="pb-3">
                  <div class="font-mono font-semibold  text-white pl-1">Sobrenome: {lastname}</div>
                  <div class="font-mono font-semibold  text-white pl-1">E-mail: {email} </div>
                  <div class="font-mono font-semibold  text-white pl-1">Telefone: {phone} </div>
                  <div class="font-mono font-semibold  text-white pl-1">CEP: {cep} </div>
                  <div class="font-mono font-semibold  text-white pl-1">Endereço: {address} </div>
                  <div class="font-mono font-semibold  text-white pl-1">Data de Nascimento: {birthdate} </div>
                  <div class="font-mono font-semibold  text-white pl-1">CPF: {cpf} </div>
                  <div class="font-mono font-semibold  text-white pl-1">Renda Mensal: {monthlyincome} </div>
                  <div class="font-mono font-semibold  text-white pl-1">Data: {new Date(date).toDateString()}</div>
                </div>
            {/*
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
              Editar
            </Button>{' '}
            */}
          
            <button variant="primary" type="submit"  class="ml-20 rounded-sm ... ... ring-4 ring-indigo-400 w-28 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..." variant="danger" onClick={() => handleRemoveClient(id)}>
              <p class="font-mono font-semibold  text-white ">Remover</p>
            </button>
          
          </Card.Body>
        </div>
      </div>  
    </div>  
  );
};

export default Client;
