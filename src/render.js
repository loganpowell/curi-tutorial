import React from 'react';
import NavLinks from './components/NavLinks.js';

export default function(response) {
  const { body: Body } = response;
  return (
    <div>
      <header>
        <NavLinks />
      </header>
      <main>
        <Body response={response} />
      </main>
    </div>
  );
}
