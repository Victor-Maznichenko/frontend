import styles from './styles.module.scss';

export const BurgerMenu = ({ className = styles.burgerMenu }) => (
   <button type="button" className={className}>
      <svg
         className={styles.burgerMenu__icon}
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 48 48"
      >
         <title>Menu</title>
         <circle cx="12" cy="12" r="3"></circle>
         <circle cx="24" cy="12" r="3"></circle>
         <circle cx="36" cy="12" r="3"></circle>
         <circle cx="36" cy="24" r="3"></circle>
         <circle cx="36" cy="36" r="3"></circle>
         <circle cx="24" cy="36" r="3"></circle>
         <circle cx="12" cy="36" r="3"></circle>
         <circle cx="12" cy="24" r="3"></circle>
         <rect
            x="21"
            y="21"
            width="6px"
            height="6px"
            rx="3"
            ry="3"
            opacity="0.75"
         >
         </rect>
         <rect
            x="21"
            y="21"
            width="6px"
            height="6px"
            rx="3"
            ry="3"
            opacity="0.75"
         >
         </rect>
      </svg>
   </button>
);
