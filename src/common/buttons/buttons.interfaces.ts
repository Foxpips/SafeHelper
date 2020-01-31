
export type IBtnType = 'primary' | 'secondary' | 'timeslotBtn' | 'reservation';

export type IAlignment = 'left' | 'right' | 'center';

export interface IButtonComponentEle {
  btnType: IBtnType;
  alignment?: IAlignment
  fullWidth? : boolean;
}

export interface IButtonComponentProps extends IButtonComponentEle {
  children : string;
  disabled? : boolean;
  handleClick: (smth?: any) => void;
}
