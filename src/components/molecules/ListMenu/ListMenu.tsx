import React from 'react';
import { StyledLink } from './ListMenu.style';
import { ListMenuProps } from './ListMenu.type';

const ListMenu: React.FC<ListMenuProps> = ({ menus }) => {
  return (
    <>
      {menus.map((menu, index) => {
        return (
          <StyledLink to={menu.path} key={index}>
            <p>{menu.name}</p>
          </StyledLink>
        );
      })}
    </>
  );
};

export default ListMenu;
