import React from 'react';

const Picture = (...rest) => (
  <img src="http://smartcinema.vn.ua/static/css/img/3d.png" alt="not found" height="42" width="42" {...rest} />
);

Picture.displayName = 'Picture';

export default Picture;
