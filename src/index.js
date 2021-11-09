import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()
ReactDOM.render(<AppRouter />, document.getElementById('root'));
