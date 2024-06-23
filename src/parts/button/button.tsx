import React, { ReactNode } from 'react';
import { Button as Btn } from 'react-daisyui';

export interface ButtonProps {
  children: ReactNode;
  style: ButtonStylePattern;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
}

interface ButtonStylePattern {
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error" | undefined;
  active?: boolean;
  variant?: 'outline' | 'link' | undefined;
  responsive?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | undefined;
  wide?: boolean;
  glass?: boolean;
  disabled?: boolean;
  shape?: 'circle' | 'square' | undefined;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { color = undefined, active = false, variant = undefined, responsive = false, size = undefined, wide = false, glass = false, disabled = false, shape = undefined, loading = false } = props.style;

  return (
    <Btn
      color={color}
      active={active}
      variant={variant}
      responsive={responsive}
      size={size}
      wide={wide}
      glass={glass}
      disabled={disabled}
      shape={shape}
      loading={loading}
      onClick={props.onClick}
    >
      {props.startIcon && <>{props.startIcon}</>}
      {props.children}
      {props.endIcon && <>{props.endIcon}</>}
    </Btn>
  );
};

export default Button;
