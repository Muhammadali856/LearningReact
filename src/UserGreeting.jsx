import PropTypes from 'prop-types';

function UserGreeting({ isLoggedIn = false, username = 'Guest' }) {
  if(isLoggedIn){
    return <h2 className="Welcome-message">Welcome back, {username}!</h2>;
  }
  else{
    return <h2 className="Request-LogIn">Please Log In to continue :(</h2>
  }
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
export default UserGreeting;