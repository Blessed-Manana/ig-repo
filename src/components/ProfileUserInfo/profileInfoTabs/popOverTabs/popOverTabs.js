import React from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import "./popOverTabs.css"
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import UploadButton from './popOverUoload/popOverUoload';


const YourComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='btnPopoverContainer'>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} id="button">
      <AssignmentIndOutlinedIcon id="content1Icon" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ borderRadius: '50%', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', p: 2, }}
      >
        <div className='popOverContentContainer'>
          <div id='createNewPost'>Create new post</div>
          <div className='dragDropIconDragTextUploadInput'>
            <div className='dragDropIconContainer'>
              <PermMediaOutlinedIcon  id="dragDropIcon"/>
            </div>
            <div id='dragText'>Drag photos and videos here</div>
            <div className='popOveruploadContaier'>
              <UploadButton/>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default YourComponent;
