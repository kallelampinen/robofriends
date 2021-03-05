import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList.jsx';
import {robots} from './robots';
import 'tachyons';
import './index.css';



ReactDOM.render(
 <CardList robots={robots}/>,
  document.getElementById('root')
);


