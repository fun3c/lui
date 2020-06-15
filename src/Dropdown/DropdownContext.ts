import React from 'react';
import { ContetProps } from './interface';

const DropdownContext = React.createContext<Partial<ContetProps>>({});

export default DropdownContext;
