import React from 'react';
import notFoundImg from './not_found.png';

function Picture() {
  return <img src={notFoundImg} alt="not found" height="42" width="42" />;
}

Picture.displayName = 'Picture';

export default Picture;
