# Budget Project

## 简介
这是一个基于 React 构建的 Web 应用，用于可视化预算数据。该项目包含多种组件（如柱状图和饼图），并使用现代开发工具（如 Vite）进行开发和构建。

---
## 项目结构

  ```plaintext
  BUDGET_PROJECT
  ├── public/            # 静态资源文件夹
  ├── src/               # 项目源码
  │   ├── assets/        # 图标和图片资源
  │   ├── component/     # 组件目录
  │   ├── style/         # 样式文件
  │   ├── App.jsx        # 主入口组件
  │   ├── main.jsx       # 应用初始化入口
  ├── package.json       # 项目依赖配置文件
  ├── vite.config.js     # Vite 配置文件
  └── README.md          # 项目说明文件
  ```

---
## 如何运行项目

### 1. **安装 Node.js**
在运行本项目之前，请确保已安装 [Node.js](https://nodejs.org)：

1. 打开 [Node.js 官网](https://nodejs.org)。
2. 下载并安装 **LTS（长期支持版）**。
3. 安装完成后，打开终端验证安装：
   ```bash
   node -v
   npm -v
   ```
 如果成功，终端会分别显示 Node.js 和 npm 的版本号。


### 2. **打开项目根目录**
1. 使用以下命令导航到项目的根目录 budget-app
   ```bash
   cd BUDGET_PROJECT/budget-app
    ```
### 3. **安装依赖**
1. 在项目根目录的终端中运行以下命令
   ```bash
   cd BUDGET_PROJECT/budget-app
   ```
 此命令会根据 package.json 文件，自动下载并安装项目所需的所有依赖库。

### 4. **启动开发服务器**
1. 依赖安装完成后，在终端中运行以下命令启动开发服务器：
    ```bash
    npm run dev
    ```
  运行结果：
    终端会显示一个本地服务器地址，例如：
    ```bash
    Local: http://localhost:5173
    ```
  打开浏览器，访问上述地址即可预览 Web 应用。
