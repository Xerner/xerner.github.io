import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel" // html property
      hidden={value !== index} // html property
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
}