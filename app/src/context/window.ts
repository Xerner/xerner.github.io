import React from 'react';

const windowContext = React.createContext<Window & typeof globalThis | undefined>(undefined);

export default windowContext;
