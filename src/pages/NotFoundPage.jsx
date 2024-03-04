import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='error-page'>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div className="error-image">
      <img src="https://w0.peakpx.com/wallpaper/778/9/HD-wallpaper-404-error-404-error-glitch-glitch.jpg" alt="404"/>
      </div>
    </div>
  );
};

export default NotFoundPage;
