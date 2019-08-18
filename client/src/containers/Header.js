import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Main from './Main';

const Header = (props) => {
  const { isAuth } = props;
  return (
    <div className='header-wrapper'>
      <Link to='/'>
        <i className="fas fa-home"></i>
      </Link>
      <div>
        {
          isAuth ? <Dashboard /> : <Main />
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userReducer.isAuth
  }
}

export default connect(mapStateToProps)(Header);