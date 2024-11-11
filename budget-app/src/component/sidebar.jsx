import { useState, useEffect } from 'react';
import budgetLogo from '../assets/budget_logo.svg';
import user_icon from '../assets/user_defult.svg';
import '../style/sidebar.css';

function Sidebar() {
  const [user, setUser] = useState('Unknown');
  const [loading, setLoading] = useState(true);

  // 模拟从服务器获取用户信息
  const getUserFromResponse = async () => {
    try {
      // 模拟异步获取用户信息
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ username: "Alex" }); // 模拟服务器响应
        }, 2000); // 模拟 2 秒延迟
      });
      setUser(response.username); // 更新用户名
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false); // 完成加载
    }
  };

  useEffect(() => {
    getUserFromResponse(); // 模拟组件加载时获取用户信息
  }, []);

  return (
    <div className='sidebar'>
      <div className='header'>
        <img id='header_logo' src={budgetLogo} alt="Budget Logo" />
        <h2>Flow Tracker</h2>
      </div>
      <div className='user_pic'>
        <img id='user' src={user_icon} alt='User Icon' />
        {loading ? (
          <h3>Loading...</h3> /* 显示加载状态 */
        ) : (
          <h3>Welcome back, {user}!</h3> /* 显示用户名 */
        )}
      </div>
    </div>
  );
}

export default Sidebar;
