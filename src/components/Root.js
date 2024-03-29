import { Flex, Button, Box, Text, TextArea, TextField } from "@radix-ui/themes";
import CardTable from "./card-table";
import Popup from "./popup.js";
import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';


function Root() {
  return(
    <div>
        <h1> work surf Repeat</h1>
        <Outlet/>
    </div>
  )
}

export default Root;
