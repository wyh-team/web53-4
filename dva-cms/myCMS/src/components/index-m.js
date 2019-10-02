import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router,Route,Link } from "react-router-dom";
// import { Layout, Menu, Icon } from 'antd';
// import 'antd/dist/antd.css';
// const { Header, Content, Footer, Sider } = Layout;


export default class Index extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <p id="hello" style={{color:'#f00',fontSize:'16px',display:'none'}}>欢迎光临</p>
        
      </div>
    )
  }
}
// class Teacher extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         teacher
//       </div>
//     )
//   }
// }

// class News extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         news
//       </div>
//     )
//   }
// }


// ReactDOM.render((
//   <Layout style={{height:'750px'}}>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" style={{marginBottom:'50px'}}>朗科网络</div>
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        
//         <Menu.Item key="1">
//           <Icon type="user" />
//           <span className="nav-text">用户登录成功</span>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Icon type="video-camera" />
//           <span className="nav-text">banner管理</span>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <Icon type="upload" />
//           <span className="nav-text">老师管理</span>
//         </Menu.Item>
//         <Menu.Item key="4">
//           <Icon type="user" />
//           <span className="nav-text">新闻管理</span>
//         </Menu.Item>
//       </Menu>
        
//     </Sider>
//     <Layout>
//       <Header style={{ background: '#fff', padding: '0 200px' ,fontSize: '18px' }}>
//         <h1>朗科网络后台管理系统</h1>
//       </Header>
//       <Content style={{ margin: '24px 16px 0' }}>
//         <div style={{ padding: 24, background: '#fff', height: '100%' }}>
          
//         </div>
//       </Content>
      
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>
// ),document.getElementById('app'))
