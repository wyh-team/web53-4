import React from 'react';
import { connect } from 'dva';

import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
// import styles from './IndexPage.css';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import RouterConfig from '../router';


const { Header, Content, Footer, Sider } = Layout;
function IndexPage() {
  return (
    <Layout style={{height:'750px'}}>
                    <Sider
                      breakpoint="lg"
                      collapsedWidth="0"
                      onBreakpoint={broken => {
                        console.log(broken);
                      }}
                      onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                      }}
                    >
                        <div className="logo" style={{margin:'25px 0'}} >
                            <p style={{color:'#fff'}}>朗科logo</p>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"> 
                                <Link exact='true' to='/'>
                                    <Icon type="user" />
                                    <span className="nav-text" id='hide'>未登录</span>
                                    <span className="nav-text" id='show' style={{display:'none'}}>用户登录成功</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2"> 
                                <Link to='/banner'>
                                    <Icon type="user" />
                                    <span className="nav-text">banner管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/teacher'>
                                    <Icon type="video-camera" />
                                    <span className="nav-text">老师管理</span>
                                </Link>
                            </Menu.Item>       
                            <Menu.Item key="4">
                                <Link to='/news'>
                                    <Icon type="upload" />
                                    <span className="nav-text">新闻管理</span>
                                </Link>
                            </Menu.Item>
                        
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <p>朗科网络后台管理系统</p>
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', height:'100%' ,overflow:'auto'}}>
                                
                            {/* <RouterConfig  /> */}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            <p>版权信息</p>
                        </Footer>
                    </Layout> 

                    
                </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
