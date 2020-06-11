export interface gridPropsType {
  children?: React.ReactNode;
  className?: string;
  span?: number;
  offset?: number;
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'start' | 'center' | 'end';
  [propName: string]: any;
}
