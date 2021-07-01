import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header className="row">
      <nav className="mt-3">
        <ul className="nav nav-pills flex-column flex-sm-row">
                

          <li className="nav-item">
            <NavLink to="/auth" className="nav-link">
              Auth
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink to="/users" className="nav-link">
              Onile Shopping
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li> 
         
        </ul>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
