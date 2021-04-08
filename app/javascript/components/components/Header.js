import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>

        <NavbarBrand href="/" className="mr-auto" >
        <div className="header">Apartment App
        </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Show All Apartments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AddApartments">Add an Apartment</NavLink>
            </NavItem>
            { props.logged_in &&
              <div>
                <a href={props.sign_out_route }>Sign Out</a>
              </div>
            }
            { !props.logged_in &&
              <div>
                <a href={ props.sign_in_route }>Sign In</a>
              </div>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header
