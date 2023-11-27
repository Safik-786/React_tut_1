import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import "../App.css"
function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-warning`}>
      <div className="container-fluid">
        <a className="navbar-brand text-danger fw-bold" href="/">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center mx-5">
            <li className="nav-item">
              <NavLink className="abc nav-NavLink  "  aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink  "   to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" abc nav-NavLink  "  to="/about">AboutUs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink " to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink " to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink " to="/event">EventHandle</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink " to="/users">User's</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink " to="/search">search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="abc nav-NavLink " to="/validate">Validate</NavLink>
            </li>
            
          </ul>

          <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" style={{color: props.mode==='dark'? 'white':'dark'}} htmlFor="flexSwitchCheckDefault"></label>
          </div>

          

        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: "Insert title ",
  Aboutapk: "About"

}

export default Navbar;
