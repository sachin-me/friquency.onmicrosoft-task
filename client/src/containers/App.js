import React from 'react';
import { connect } from 'react-redux';
import Private from './Private';
import Public from './Public';

const App = (props) => {
  const { isAuth } = props;
  return (
    <div>
      {
        isAuth ? <Private /> : <Public />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userReducer.isAuth
  };
}

export default connect(mapStateToProps)(App);
