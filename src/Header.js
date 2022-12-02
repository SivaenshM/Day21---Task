import React from "react";
import { Nav, Navbar, Container, NavDropdown, Dropdown } from "react-bootstrap";
import CartContext from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light" bg="light" variant="light">
      <Container className="container px-4 px-lg-5">
        <Navbar.Brand className="navbar-brand" href="">Start Bootstrap</Navbar.Brand>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse" id="navbarSupportedContent">
        <Nav className=" navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <Nav.Link className="nav-item" href="">Home</Nav.Link>
          <Nav.Link className="nav-item" href="">About</Nav.Link>
          <NavDropdown className="nav-item dropdown" title="Shop" id="navbarScrollingDropdown">
            <NavDropdown.Item className="dropdown-item" href="">
              All Products
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-item" href="">
              Popular Items
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" href="">
              New Arrivals
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </div>
        <Nav>
          <Dropdown className="justify-content-end" align="end">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              <FaShoppingCart style={{ marginBottom: "5px" }} />
              &nbsp;
              <span>Cart</span>
              <div
                className="cartCount"
                style={{ color: state.cart.length > 0 ? "black" : "red",fontWeight:"700",display:"inline-block",marginLeft:"5px",textDecoration:"underline" }}
              >
                {state.cart.length}
              </div>{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="Cart">
                {state.cart.length > 0 ? (
                  <>
                    {state.cart.map((prod) => (
                      <div className="cartItemDetails">
                        <div>{prod.title}</div>
                        <div>{prod.price}</div>
                        <AiFillDelete
                          className="deleteFromCart"
                          onClick={() => {
                            dispatch({
                              type: "remove_from_cart",
                              payload: prod,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <span>Cart is empty</span>
                )}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;