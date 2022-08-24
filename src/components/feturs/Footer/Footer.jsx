import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h1 id="footer">Footer</h1>
    </div>
  );
};

export default Footer;
// "@emotion/react": "^11.10.0",
// "@emotion/styled": "^11.10.0",
// "@mui/material": "^5.10.2",

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useState } from 'react';

// export default function Footer() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <Box sx={{ width: 500 }}>
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//       </BottomNavigation>
//     </Box>
//   );
// }

