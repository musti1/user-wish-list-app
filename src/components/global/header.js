import React from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const { Header } = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            Logout
        </Menu.Item>
        <Menu.Item>
            <Link to="/wish-list">Wish list</Link>
        </Menu.Item>
    </Menu>
);

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#fff' }}>
                <Navbar collapseOnSelect className='container'>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">CarbonTeq</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem componentClass={Link} href="/" to="/">
                                Products
                            </NavItem>
                            <NavItem>
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" >
                                        Profile <Icon type="down" />
                                    </span>
                                </Dropdown>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Header>
        )
    }
}

export default HeaderComponent;