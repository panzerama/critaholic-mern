import React from 'react';
import NavItem from './NavItem';

function Navigation(props) {
    return props.items.map((item) => {
        return <NavItem value={item.value} />
    });
}

export default Navigation;