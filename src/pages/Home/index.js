import React, { useState } from 'react';
import Button from '../../components/Button';
import { Navigate } from 'react-router-dom';
import './index.css';

function Home() {
  const [isRedirect, setRedirect] = useState(false);
  if (isRedirect) return <Navigate to="/games" />
  return (
    <div className="button-content">
      <Button
        text="iniciar"
        onClick={ () => { setRedirect(true) } }
      />
    </div>
  );
}

export default Home;
