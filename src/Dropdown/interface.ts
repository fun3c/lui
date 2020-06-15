export interface DropdownPropsType {
  className?: string;
  overlay: () => void | React.ReactNode;
  trigger?: string;
  callback?: () => void;
  toggle: () => void | React.ReactNode;
  placement?: 'left' | 'center' | 'right';
  align?: 'left' | 'center' | 'right';
  animate?: boolean;
  activeName?: string;
  upwards?: boolean;
  [propName: string]: any;
}

export interface ContetProps extends DropdownPropsType {
  open?: any;
  close?: any;
  isClick?: boolean;
  isHover?: boolean;
  callback?: any;
}

export type DropdownMenuProps = {
  className?: string;
  groupTitle?: string;
  children: React.ReactNode;
  onClick?: any;
  [propName: string]: any;
};

export type DropdownMenuItemProps = {
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
  disabled?: boolean;
  name?: string;
  [propName: string]: any;
};
