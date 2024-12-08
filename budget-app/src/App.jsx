import './App.css';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Barchart from './component/Bar_chart';
import Doughnutchart from './component/Dounghnut_chart';
import Sidebar from './component/sidebar';
import Loading from './component/loading'


function App() {
  const [user, setUser] = useState('Unknown');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  
  // 模拟从服务器获取用户信息
  const getUserFromResponse = async () => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ username: "Alex" }); // 模拟服务器响应
        }, 2000);
      });
      setUser(response.username);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserFromResponse(); // 模拟获取用户信息
  }, []);

  const monthly_expense = [
    {category: 'transportation', total: 10000},
    {category: 'insurance', total: 10500},
    {category: 'grocery', total: 7000},
    {category: 'restaurants', total: 4000},
    {category: 'utility', total: 2000},
    {category: 'others', total: 7600}
  ]
  const yearly_expense = [
    {category: 'transportation', total: 1000},
    {category: 'insurance', total: 2500},
    {category: 'grocery', total: 4000},
    {category: 'restaurants', total: 1000},
    {category: 'utility', total: 200},
    {category: 'others', total: 700}
  ]
  const transaction_month_list = [
    {year: 2024, month: 'JAN', total: 3400},
    {year: 2024, month: 'FEB', total: 2200},
    {year: 2024, month: 'MAR', total: 6500},
    {year: 2024, month: 'APR', total: 2100},
    {year: 2024, month: 'MAY', total: 1920},
    {year: 2024, month: 'JUN', total: 1340},
    {year: 2024, month: 'JUL', total: 3900},
    {year: 2024, month: 'AUG', total: 4963},
    {year: 2024, month: 'SEP', total: 2314},
    {year: 2024, month: 'OCT', total: 3425},
    {year: 2024, month: 'NOV', total: 6743},
    {year: 2024, month: 'DEC', total: 1200}
  ]

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
    {tid: 20, transaction: {amount: '150.00', category: 'rent', date: '2024-10-28'}},
    {tid: 21, transaction: {amount: '150.00', category: 'trent', date: '2014-10-28'}}
  ];
  const sort_tabs = [
    { type: 'by_amount', text: 'Amount' },
    { type: 'by_date', text: 'Date' },
  ];

  const [type, setType] = useState('by_date');
  const [transLIst, setTransLIst] = useState(transaction_list);
  useEffect(() => {
    setTransLIst(_.orderBy(transaction_list, 'transaction.date', 'desc'));
  }, []);
  
  const totalPages = Math.ceil(transLIst.length / itemsPerPage);

  const handleTabChange = (type) => {
    setType(type);
    if (type === 'by_amount') {
      setTransLIst(_.orderBy(transLIst, (item) => parseFloat(item.transaction.amount), 'desc'));
    } else {
      setTransLIst(_.orderBy(transLIst, 'transaction.date', 'desc'));
    }
    
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentTransactions = transLIst.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="app-content">
      <Sidebar user={user} loading={loading} /> {/* 传递状态到 Sidebar */}
      {loading ? (
        <Loading /> // 显示加载状态
      ) : (
        <>
        <h1>For Test only</h1>
        <br></br>
        <br></br>
          <div className="dashboard-container">
            <div className="chart-container">
              <Barchart transaction_month_list={transaction_month_list} />
              
              <div className="year-selector">
                <button>2024</button>
                <button>2023</button>
              </div>
              <div className='d_cahrt'>
                <Doughnutchart category_expense={monthly_expense} spend_type='Monthly Spent' />
                <Doughnutchart category_expense={yearly_expense} spend_type='Yearly Spent' />
              </div>
            </div>
            <div className="transaction-container">
              <div className="sort_buttons">
                <span>Sort By:</span>
                {sort_tabs.map((item) => (
                  <span
                    key={item.type}
                    onClick={() => handleTabChange(item.type)}
                    className={classNames('sort_button', { active: type === item.type })}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
              <div className="transaction_List">
                {currentTransactions.map((item) => (
                  <div key={item.tid} className="transaction_item">
                    <div className="transaction_item_category">
                      <span>{item.transaction.category}</span>
                    </div>
                    <div className="transaction_item_date">
                      <span>{item.transaction.date}</span>
                    </div>
                    <div className="transaction_item_amount">
                      <span>${item.transaction.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
