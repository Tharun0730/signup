// BasicTabs.js

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pageone from '../src/pageone';
import Pagetwo from '../src/pagetwo';
import Pagethree from '../src/pagethree';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const handleClick = () => {
    if (index === 2) {
      alert("Please select the button in the second page.");
    } else {
      alert(`You clicked on Tab ${index + 1}`);
      // Additional logic if needed
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      onClick={handleClick}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isPagethreeDisabled, setPagethreeDisabled] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const enablePagethree = () => {
    setPagethreeDisabled(false);
    // Set the value to the index of the third tab
    setValue(2);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Pageone />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Pagetwo enablePagethree={enablePagethree} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Pagethree disabled={isPagethreeDisabled} />
      </CustomTabPanel>
    </Box>
  );
}
// BasicTabs.js

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pageone from '../src/pageone';
import Pagetwo from '../src/pagetwo';
import Pagethree from '../src/pagethree';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  const handleClick = () => {
    if (index === 2) {
      alert("Please select the button in the second page.");
    } else {
      alert(`You clicked on Tab ${index + 1}`);
      // Additional logic if needed
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      onClick={handleClick}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isPagethreeDisabled, setPagethreeDisabled] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const enablePagethree = () => {
    setPagethreeDisabled(false);
    // Set the value to the index of the third tab
    setValue(2);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Pageone />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Pagetwo enablePagethree={enablePagethree} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Pagethree disabled={isPagethreeDisabled} />
      </CustomTabPanel>
    </Box>
  );
}
