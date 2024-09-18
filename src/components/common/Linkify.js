import React from 'react';
import Linkify from 'react-linkify';

const Linkified = ({ children }) => (
  <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
    <a 
      target="blank" 
      href={decoratedHref} 
      key={key} 
      onClick={e => e.stopPropagation()}
    >
      {decoratedText}
    </a>
  )}>
    {children}
  </Linkify>
);

export default Linkified;