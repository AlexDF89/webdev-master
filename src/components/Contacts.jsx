import React from 'react';

function Contacts(props) {
  return (
    <main>
      <section className="first-screen">
        <h1>{ props.contacts.h1 }</h1>
      </section>
    </main>
  );
}

export default Contacts;