import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return <h1>404 | this page was not found :( <br /><br /> <Link to={'/'}>Go Home</Link></h1>;
};
