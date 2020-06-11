export interface ButtonProps extends React.Props<ButtonProps> {
  children?: React.ReactNode;
  className?: string;
  type?: string;
  size?: string;
  icon?: string;
  intent?: string;
  block?: boolean;
  circular?: boolean;
  loading?: boolean;
  disabled?: boolean;
  animate?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement> & MouseEvent) => void;
  [propName: string]: any;
}
