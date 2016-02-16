import React from 'react';
import Prefixer from 'inline-style-prefixer';

export default ({ style, prefixer = new Prefixer(), children, ...rest }) => {
  const flexContainerStyle = {
    alignContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  };

  return (
    <div style={{ ...prefixer.prefix(flexContainerStyle), ...style }} {...rest}>
      {children}
    </div>
  );
};
