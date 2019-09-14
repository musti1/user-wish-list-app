import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderComponent, FooterComponent } from './components/global';
import ContentWrapper from './components/contentWrapper/wrapper'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <HeaderComponent />
          <ContentWrapper />
          <FooterComponent />
        </Layout>
      </Router>
    )
  }
}

export default App;