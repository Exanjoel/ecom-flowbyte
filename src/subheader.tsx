


import { Navbar } from "flowbite-react";

export function Subheader() {
  return (
    <>
      <Navbar fluid rounded className="flex justify-between bg-gray-100">
    
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="./home" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="./login">Login</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
      </>
  );
  
  
}
