import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter } from 'react-router'
import './navbar.scss'

const { Header, Sider, Content } = Layout

function NavBar (props) {
  const [collapsed, setcollapsed] = useState(false)

  const toggle = () => {
    setcollapsed(!collapsed)
  }

  const selectMenuItem = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log('item', item)
    console.log('key', key)
    props.history.push(key)
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <p>
            XYZ Fitness Club
          </p>
        </div>
        <Menu onSelect={selectMenuItem} theme='dark' mode='inline' defaultSelectedKeys={['dashboard']}>
          <Menu.Item key='dashboard'>
            <Icon type='dashboard' />
            <span to='/dashboard'>Dashboard</span>
          </Menu.Item>
          <Menu.Item key='clients'>
            <Icon type='user' />
            <span>Clients</span>
          </Menu.Item>
          <Menu.Item key='attendance'>
            <Icon type='calendar' theme='filled' />
            <span>Attendance</span>
          </Menu.Item>
          <Menu.Item key='payment'>
            <Icon type='dollar' />
            <span>Payment</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          padding: 0,
          height: '50px' }}
        >
          <Icon
            className='trigger'
            style={{ fontSize: '20px', marginLeft: '10px' }}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(NavBar)
