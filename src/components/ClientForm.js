import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ClientForm = (props) => {
  const [client, setClient] = useState({
    clientname: props.client ? props.client.clientname : '',
    lastname: props.client ? props.client.lastname : '',
    email: props.client ? props.client.email : '',
    phone: props.client ? props.client.phone : '',
    cep: props.client ? props.client.cep : '',
    address: props.client ? props.client.address : '',
    birthdate: props.client ? props.client.birthdate : '',
    cpf: props.client ? props.client.cpf : '',
    monthlyincome: props.client ? props.client.monthlyincome : '',
    date: props.client ? props.client.client : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { clientname, lastname, email, phone, cep, address, birthdate, cpf, monthlyincome } = client;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [clientname, lastname, email, phone, cep, address, birthdate, cpf, monthlyincome];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const client = {
        id: uuidv4(),
        clientname,
        lastname,
        email,
        phone,
        cep,
        address,
        birthdate,
        cpf,
        monthlyincome,
        date: new Date()
      };
      props.handleOnSubmit(client);
    } else {
      errorMsg = 'Preencha todos os campos.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setClient((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
  
      default:
        setClient((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div class="font-mono font-semibold  text-white  pl-3 w-80">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form class="space-y-1 ..." onSubmit={handleOnSubmit}>
        <Form.Group controlId="clientname">
          <Form.Label>Nome do Cliente</Form.Label>
          <Form.Control 
            className="input-control"
            type="text"
            name="clientname"
            value={clientname}
            placeholder="insira o nome do cliente"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Sobrenome do Cliente</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastname"
            value={lastname}
            placeholder="insira o sobrenome do cliente"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="insira o e-mail do Cliente"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="phone"
            value={phone}
            placeholder="insira o telefone do cliente"
            onChange={handleInputChange}
          />  
        </Form.Group>
        <Form.Group controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="cep"
            value={cep}
            placeholder="insira o CEP do cliente"
            onChange={handleInputChange}
          />  
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="insira o endereço do cliente"
            onChange={handleInputChange}
          />  
        </Form.Group>
        <Form.Group controlId="birthdate">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="birthdate"
            value={birthdate}
            placeholder="insira a data de nascimento do cliente"
            onChange={handleInputChange}
          />  
        </Form.Group>
        <Form.Group controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="cpf"
            value={cpf}
            placeholder="insira o CPF do cliente"
            onChange={handleInputChange}
          />  
        </Form.Group>
        <Form.Group controlId="monthlyincome">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="monthlyincome"
            value={monthlyincome}
            placeholder="insira a data de nascimento do cliente"
            onChange={handleInputChange}
          />  
        </Form.Group>



          <div class="pt-2 pl-20">
            <button variant="primary" type="submit"  class=" rounded-sm ... ... ring-4 ring-indigo-400 w-28 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
              <p class="font-mono font-semibold  text-white">Cadastrar</p>
            </button >
          </div>
      </Form>
    </div>
  );
};

export default ClientForm;
