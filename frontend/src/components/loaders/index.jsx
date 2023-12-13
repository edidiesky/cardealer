import * as React from 'react';
import { ThreeDots } from "react-loader-spinner";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoaderIndex({type}) {
  const [open, setOpen] = React.useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };

  if (type === "dots") {
    return (
      <ThreeDots
        height="25"
        width="25"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
