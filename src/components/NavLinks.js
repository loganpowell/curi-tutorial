import React from 'react';
import { Link } from '@curi/react';

const NavLinks = () => (
  <nav>
    <ul>
      <li>
        <Link to='Home'>Home</Link>
      </li>
      <li>
        <Link to='Contact'>Contact Us</Link>
      </li>
      <li>
        <Link to='Book List'>Books for Sale</Link>
      </li>
      <li>
        <Link to='Checkout'>Checkout</Link>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
