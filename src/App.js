import React from 'react';
import LoginForm from './components/login-form';
import Navigation from './components/navigation';
import './styles.css'


const App = () => {
  return (
    <div>
      <Navigation /> {/* render the navigation component */}
      <div className='centered-content'> {/* centering the content */}
        <LoginForm /> {/* render the login form component */}
      </div>
    </div>
  );
};
export default App;
