import React from 'react';
import { Layout } from 'antd';
import Routes from '../../routes/routes';

const { Content } = Layout;
class ContentWrapper extends React.Component {
    render() {
        return (
            <Content style={{ padding: '0 50px', marginTop: 90 }}>
                <section style={{ background: '#fff', height: '75vh' }} className='container'>
                    <Routes />
                </section>
            </Content>
        )
    }
}

export default ContentWrapper;