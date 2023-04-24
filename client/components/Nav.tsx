import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: 'underline',
              }
            : {}
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: 'underline',
              }
            : {}
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: 'underline',
              }
            : {}
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: 'underline',
              }
            : {}
        }
      >
        Contact
      </NavLink>
    </div>
  )
}

export default Nav
