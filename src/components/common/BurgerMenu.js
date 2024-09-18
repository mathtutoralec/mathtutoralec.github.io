import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { MoreHorizontal } from "react-feather";

/*
Needs to be passed a burgerMenu prop with this shape:
burgerMenu: [
  {
    key: string to be uesed as key,
    action: function to run when clicked
    label: Display name in menu
  }
]
*/

export const BurgerMenu = ({burgerMenu}) => {
  if (!burgerMenu) return null;
  return (
    <div className="card-actions float-right">
      <UncontrolledDropdown>
        <DropdownToggle tag="a">
          <MoreHorizontal />
        </DropdownToggle>
        <DropdownMenu style={ { right: 0, left: "auto" } }>
          {burgerMenu.map((menuItem, index) => 
            <DropdownItem key={`${menuItem.key}-${index}`} onClick={menuItem.action}>{menuItem.label}</DropdownItem>
          )}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}
export default BurgerMenu;