import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaChevronDown } from "react-icons/fa";
import BenefitsData from "../data/data.json"


export default function PositionedMenu({selectedCourse, handleClose, handleClick, anchorEl}) {


  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="flex items-center gap-1 px-3 py-2 text-sm rounded-md bg-[#1A73E8] text-white">
          {selectedCourse.slice(0,10)}
          <FaChevronDown />
        </span>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {BenefitsData.map((course) => (
          <MenuItem key={course.id} onClick={() => handleClose(course.program)}>
            {course.program}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}