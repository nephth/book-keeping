import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import PriceList from './components/PriceList';

const items = [
  {
    id: 1,
    title: '去云南旅游',
    price: 400,
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome'
    }
  },
  {
    id: 1,
    title: '去云南旅游',
    price: 400,
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome'
    }
  }
];

class App extends React.Component {

  render() {
    return (
      <PriceList 
        items={items}
      />
    );
  }
}

export default App;