import styles from './StickyNavigationBar.module.css';
import { useState } from 'react';
import useIntersectionObserver from '../../hooks/use-intersection-observer';

import { PageText } from '../Text/Text';

import { capitalizeFirstLetterEachWord } from '../../utils/text-help';
import { GridSystem } from '../GridSystem/GridSystem';

export const StickyNavigationBar = ({ data }) => {
  const [activeSection, setActiveSection] = useState(null);

  useIntersectionObserver(setActiveSection);

  const handleClick = (event, categoryIndex) => {

    event.preventDefault();
    const targetElement = document.getElementById(`category-${categoryIndex}`);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  const activeStyle = {
    fontWeight: '600',
    // color:'#EA1917',
    // color:'#EA191',
    // color: 'red',
    // textDecoration: 'underline',
    
     borderBottom:'3px solid #EA1917',
  };

  return (
    <GridSystem 
    containerBackgroundColor='#F6F3EB'>
      <nav className={styles.stickyNavContainer}>
        <div className={styles.stickyNavWrapper}>
          <div className={styles.stickyNav}>
            {Object.keys(data).map((category, categoryIndex) => (
              <a
                key={categoryIndex}
                href={`#category-${categoryIndex}`}
                onClick={(e) => handleClick(e, categoryIndex)}
                style={activeSection === `category-${categoryIndex}` ? activeStyle : {}}
              >
                <PageText type='productSearchNavTitle'>
                  {capitalizeFirstLetterEachWord(category)}
                </PageText>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </GridSystem>
  );
};
