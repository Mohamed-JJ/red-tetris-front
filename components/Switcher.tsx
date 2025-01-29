import React from 'react';

const Switcher = ({
  placeHolders,
  ContainerStyles,
  Child1Styles,
  Child2Styles,
  textStyles,
  onClick,
}: {
  placeHolders: string[];
  ContainerStyles: string;
  Child1Styles: string;
  Child2Styles: string;
  textStyles: string;
  onClick: (arg: boolean) => void;
}) => {
  return (
    <div className={ContainerStyles}>
      <div className={Child1Styles} onClick={() => onClick(false)}>
        <p className={textStyles}>{placeHolders[0]}</p>
      </div>
      <div className={Child2Styles} onClick={() => onClick(true)}>
        <p className={textStyles}>{placeHolders[1]}</p>
      </div>
    </div>
  );
};

export default Switcher;
