import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/words">
          <a>Words</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
