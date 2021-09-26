import { ButtonHTMLAttributes } from 'react';
import feather from 'feather-icons';

import './IconButton.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  'aria-label': string;
  icon: string;
};

const IconButton = ({ icon, className, ...props }: Props) => {
  const iconSvg = feather.icons[icon].toSvg();
  return (
    <button
      className={`IconButton ${className}`}
      {...props}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    ></button>
  );
};

export default IconButton;
