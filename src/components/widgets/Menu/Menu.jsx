import React from 'react';
import { BlockedButton } from 'components/controls';

const groups = ['group1', 'group2', 'group3'];

const divStyle = {
  display: 'inline-block',
};

function Menu() {
  return (
    <div className="Menu" style={divStyle}>
      {groups.map(groupName => (
        <BlockedButton key={groupName} text={groupName} isActive style={{ display: 'block' }} />
      ))}
    </div>
  );
}

Menu.displayName = 'Menu';

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
