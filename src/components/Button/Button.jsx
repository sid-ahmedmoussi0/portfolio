import React from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { VARIANTS_BUTTON, SIZES_BUTTON } from '../../constants/components';

const buttonStyles = cva('inline-flex items-center gap-2 rounded-lg', {
  variants: {
    variant: VARIANTS_BUTTON,
    size: SIZES_BUTTON,
  },
  defaultVariants: { variant: 'primary', size: 'md' },
});

const Button = ({ variant, size, icon, className, children, to, href, ...props }) => {
  const styles = buttonStyles({ variant, size, className });

  if (to) return <Link to={to} className={styles} {...props}>{icon}{children}</Link>;
  if (href) return <a href={href} className={styles} {...props}>{icon}{children}</a>;
  return <button className={styles} {...props}>{icon}{children}</button>;
};

export default Button;
