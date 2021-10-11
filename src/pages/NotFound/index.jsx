import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

export const NotFound = () => {
   return (
      <div className="not-found">
         <img
            src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
            alt=""
         />
         <Link to="/">
            <h1>Return to Home</h1>
         </Link>
      </div>
   );
};

export default NotFound;
