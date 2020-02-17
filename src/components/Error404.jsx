import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  console.log(props);
  return (
    <div className="error">
      <h1>The page {props.location.pathname} does not exist!</h1>
      <h2>Would you like to return <Link to="/">home</Link> instead?</h2>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
