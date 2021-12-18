import React, { useState, useEffect } from 'react';
import { HeaderbarProps } from './Headerbar.type';
import {
  StyledHeaderbar,
  StyledTitle,
  StyledSubText,
  StyledButtonArea,
} from './Headerbar.style';

const Headerbar: React.FC<HeaderbarProps> = ({
  children,
  subText,
  title,
  login,
  bgColor,
  height,
  color,
  titleSize,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolled && window.scrollY > 20) {
        setScrolled(true);
      } else if (scrolled && window.scrollY <= 20) {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <StyledHeaderbar
      scrolled={scrolled}
      login={login}
      bgColor={bgColor}
      height={height}
    >
      <StyledTitle color={color} titleSize={titleSize}>
        {title}
        <StyledSubText>{subText}</StyledSubText>
      </StyledTitle>
      <StyledButtonArea>{children}</StyledButtonArea>
    </StyledHeaderbar>
  );
};

export default Headerbar;
