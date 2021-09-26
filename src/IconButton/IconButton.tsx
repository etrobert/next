import { ButtonHTMLAttributes } from 'react';
import feather from 'feather-icons';

import './IconButton.css';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  title: string;
  icon: string;
};

const IconButton = ({ icon, className, title, ...props }: Props) => {
  const iconSvg = feather.icons[icon].toSvg();
  return (
    <button
      className={`IconButton ${className}`}
      {...props}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
      aria-label={title}
      title={title}
    />
  );
};

export default IconButton;
