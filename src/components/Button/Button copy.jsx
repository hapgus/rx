import { IconComponent } from '../Icon/IconComponent';
// import { ButtonText } from '../TextComponent/TextComponent';
import styles from './Button.module.css';

export const Button = ({
  children,
  onClick,
  buttonType='button',
  buttonStyleType = 'default',
  disabled = false,
  icon,
  iconType,
  iconStyleType,
  iconPosition = 'left',
  animatedIcon = false,
}) => {

  const buttonStyles = {
    primaryAction: styles.primaryAction,
    primary: styles.primary,
    secondary: styles.secondary,
    tertiaryBlack: styles.tertiaryBlack,
    tertiaryWhite: styles.tertiaryWhite,
    tertiaryGray: styles.tertiaryGray,
    printBanner: styles.printBanner,
    printDefault: styles.printDefault,
    default: styles.default,


    circleButton: styles.circleButton,
  }

  const buttonStyle = buttonStyles[buttonStyleType] || buttonStyles.default;

  return (
 
      <button
        onClick={onClick}
        className={buttonStyle}
        disabled={disabled}
        type={buttonType}
      >
        
        {icon && iconPosition === 'left' && (
          <span className={`${styles.icon} ${animatedIcon ? styles.animated : ''}`}>
            <IconComponent iconStyleType={iconStyleType} iconType={iconType}>{icon}</IconComponent>
          </span>
        )}

        <span>{children}</span>


        {icon && iconPosition === 'right' && (
          <span className={`${styles.icon} ${styles['icon-right']} ${animatedIcon ? styles.animated : ''}`}>
            <IconComponent iconStyleType={iconStyleType} iconType={iconType}>{icon}</IconComponent>
          </span>
        )}
      </button>

  );
};

