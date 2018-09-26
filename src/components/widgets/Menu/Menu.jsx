import React from 'react';
import { Button } from 'components/controls';

const groups = ['group1', 'group2', 'group3'];

const divStyle = {
  display: 'inline-block',
};

function Menu() {
  return (
    <div className="Menu" style={divStyle}>
      {groups.map(groupName => (
        <Button key={groupName} text={groupName} style={{ display: 'block' }} />
      ))}
    </div>
  );
}

Menu.displayName = 'Menu';

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
