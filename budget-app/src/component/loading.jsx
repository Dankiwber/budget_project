// Loading.jsx
import React from 'react';
import '../style/loading.css'; // 如果需要样式
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div> {/* 可以是一个动画 */}
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
