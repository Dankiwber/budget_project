import './App.css';
import { useState, useEffect } from 'react';
import _ from 'lodash';
function App() {
  
  let transaction_list = [
    {tid: 1, transaction: {amount: '28.30', category: 'transportation', date: '2024-10-05'}},
    {tid: 2, transaction: {amount: '34.49', category: 'shopping', date: '2024-10-25'}},
    {tid: 3, transaction: {amount: '908.21', category: 'insurance', date: '2024-11-17'}},
    {tid: 4, transaction: {amount: '99.45', category: 'transportation', date: '2024-10-11'}},
    {tid: 5, transaction: {amount: '128.39', category: 'shopping', date: '2024-11-12'}},
    {tid: 6, transaction: {amount: '56.78', category: 'groceries', date: '2024-10-06'}},
    {tid: 7, transaction: {amount: '245.67', category: 'utilities', date: '2024-10-15'}},
    {tid: 8, transaction: {amount: '67.89', category: 'entertainment', date: '2024-10-20'}},
    {tid: 9, transaction: {amount: '1200.00', category: 'rent', date: '2024-11-01'}},
    {tid: 10, transaction: {amount: '75.30', category: 'dining', date: '2024-11-05'}},
    {tid: 11, transaction: {amount: '30.00', category: 'transportation', date: '2024-11-08'}},
    {tid: 12, transaction: {amount: '45.67', category: 'shopping', date: '2024-10-13'}},
    {tid: 13, transaction: {amount: '600.00', category: 'insurance', date: '2024-10-18'}},
    {tid: 14, transaction: {amount: '22.50', category: 'groceries', date: '2024-10-22'}},
    {tid: 15, transaction: {amount: '89.99', category: 'dining', date: '2024-11-10'}},
    {tid: 16, transaction: {amount: '15.99', category: 'entertainment', date: '2024-10-29'}},
    {tid: 17, transaction: {amount: '300.45', category: 'utilities', date: '2024-11-03'}},
    {tid: 18, transaction: {amount: '50.00', category: 'transportation', date: '2024-11-15'}},
    {tid: 19, transaction: {amount: '100.00', category: 'groceries', date: '2024-11-14'}},
    {tid: 20, transaction: {amount: '150.00', category: 'rent', date: '2024-10-28'}}
];

  const sort_tabs = [
    {type:'by_amount', text:'Amount'},
    {type:'by_date', text:'Date'}
  ]

  
  const [type, setType] = useState('by_date')
  console.log(_.orderBy(transaction_list, 'transaction.date', 'desc'))
  const [transLIst, setTransLIst] = useState(_.orderBy(transaction_list, 'transaction.date', 'desc'))

  const handleTabChange = (type) =>{
    console.log(type)
    setType(type)
    if (type === 'by_amount') {
      // 使用lodash 外部libary进行排序
      setTransLIst(_.orderBy(transLIst, (item) => parseFloat(item.transaction.amount), 'desc'))

    }else{
      setTransLIst(_.orderBy(transLIst, 'transaction.date', 'desc'))
    }
  }
  return (
    <div className="app-content">
      <h1>Hello World</h1>
      <p>This is your main app content.</p>
      <div className='transaction_List'>
        <span>Sort By: </span>
        {sort_tabs.map(item => <span key={item.type} onClick={() => handleTabChange(item.type)} className={`sort_button ${type === item.type && 'active'}`}>{item.text}</span>)}
            
        {transLIst.map(item => (
          <div key={item.tid} className='transaction_item'>
              <div className='transaction_item_date'><span>{item.transaction.date}</span></div>
              <div className='transaction_item_category'><span>{item.transaction.category}</span></div>
              <div className='transaction_item_amount'><span>${item.transaction.amount}</span></div>
            </div>
      
      ))}
      </div>
      
    </div>
  );
}

export default App;
