import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
/**
 *
 * @param placeHolder place holder to be displayed as a name
 * @param ContainerStyles the style for the outer most div (the parent)
 * @param Child1Styles the styles for the first child (the one on the left)
 * @param Child2Styles the styles for the second child (the one on the right)
 * @param textStyles the styles for the place holder text
 * @param onClick the call back function to do on click, mainly a toggle state (true or false)
 * @returns jsx for the switcher code
 */
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
  const bgRef = useRef<HTMLDivElement>(null);

  const handleToggle = (isLogin: boolean) => {
    onClick(isLogin);

    // Animate the background color
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        x: isLogin ? '108%' : '0%',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  useEffect(() => {
    // Initial position of the background
    if (bgRef.current) {
      gsap.set(bgRef.current, { x: '0%' });
    }
  }, []);
  return (
    <div className={ContainerStyles}>
      <div
        ref={bgRef}
        className="absolute w-[140px] h-10 bg-lighterblue rounded-[14px] transition-all duration-100"
      />
      <div className={Child1Styles} onClick={() => handleToggle(false)}>
        <p className={textStyles}>{placeHolders[0]}</p>
      </div>
      <div className={Child2Styles} onClick={() => handleToggle(true)}>
        <p className={textStyles}>{placeHolders[1]}</p>
      </div>
    </div>
  );
};

export default Switcher;
