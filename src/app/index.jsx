import React, { useState, useEffect } from 'react';

import Datatable from '../datatable';
import './styles.css';
import axios from 'axios';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function App() {
  const [data, setData] = useState([]);
  const [filtered, setTest] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    
    axios
    .get('http://127.0.0.1:8000/api/v1/empolyees/all')
      .then((response) => response.data)
      .then((json) => {setData(json)
      setTest(json)
      });
      
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      row.name.toLowerCase().indexOf(q.toLowerCase()) > -1||row.email.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }
  function onChangeValue (e) {
    setTest(data)
    let selected=[];

    if (e.target.value==='all') {
      setTest(data)
    }else{

      data.filter(item=>{
       
        if (item.department.name===e.target.value) {
          
          selected.push(item)
        }
       
      })
      setTest(selected)
    }
    
  }
  return (
    <div>
    <div>
     name/email <input type="text" value={q} onChange={(e)=> {setQ(e.target.value)}}/>
    </div>
    <div onChange={onChangeValue}>
        <input type="radio" value="all" name="dep" defaultChecked/> all
        <input type="radio" value="hr" name="dep" /> hr
        <input type="radio" value="it" name="dep" /> it
        <input type="radio" value="operation" name="dep" /> operation
        <input type="radio" value="salesforce" name="dep" /> salesforce
      </div>
    <Datatable data={search(filtered)} />
    </div>
  );
}
