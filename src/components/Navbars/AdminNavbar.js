import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import routes from "../../routes"; // Import the routes array

const AdminNavbar = (props) => {
  const location = useLocation(); // Get current route info

  // Function to get the name of the current route
  const getPageName = () => {
    const path = location.pathname.replace("/admin", ""); // Adjust for /admin layout
    let routeName = "الرئيسية"; // Default page name

    // Loop through routes and find the matching one
    routes.forEach((route) => {
      if (route.path === path) {
        routeName = route.name;
      }
      if (route.views) {
        route.views.forEach((viewRoute) => {
          if (viewRoute.path === path) {
            routeName = viewRoute.name;
          }
        });
      }
    });

    return routeName;
  };

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          {/* Display the current page name dynamically with custom styles */}
          <h4
            className="mb-0 d-none d-lg-inline-block"
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "24px", // Larger font size
              marginRight: "30px", // Right margin of 30px
            }}
          >
            {getPageName()}
          </h4>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pl-0" nav>
                <Media className="align-items-center">
                  <i className="ni ni-button-power" />
                  <Media className="mr-2 d-none d-lg-block"></Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" left>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <span>تسجيل الخروج</span>
                  <i className="ni ni-user-run" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
