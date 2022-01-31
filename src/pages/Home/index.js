import React from 'react';
import Button from '../../components/Button';
import { Navigate } from 'react-router-dom';
import './index.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isRedirect: false,
    };
  }
    render () {
      const { isRedirect } = this.state;
    if (isRedirect) return <Navigate to="/games" />
    return (
      <div className="button-content">
        <Button
          text="iniciar"
          onClick={ () => { this.setState({ isRedirect: true }) } }
        />
      </div>
    );
  }
}

export default Home;
