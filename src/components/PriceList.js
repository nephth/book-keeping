import React from 'react';

const PriceList = ({ items, onEditItem, onDeleteItem }) => {
  return (
    <ul className='list-group list-group-flush'>
      {
        items.map((item, index) => (
          <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span className='col-1 badge badge-primary'>{item.category.name}</span>
            <span className='col-6'>{item.title}</span>
            <span className='col-3 font-weight-bold'>
              {item.category.type === 'outcome' ? '-' : '+'}
              {item.price}元
            </span>
            <button className='col-1 btn btn-primary'>编辑</button>
            <button className='col-1 btn btn-danger'>删除</button>
          </li>
        ))
      }
    </ul>
  );
}

export default PriceList;