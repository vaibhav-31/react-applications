import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" component={Login} exact={true} />
          <Route path="/register" component={Register} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AppRouter);