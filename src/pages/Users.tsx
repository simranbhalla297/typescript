import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Update from "./Update";

export default function Users() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  async function getUsers() {
    const response = await fetch("http://localhost:3000/auth", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    //converting to json
    const users = await response.json();

    setData(users);
    console.log("users", users);
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h2>All users</h2>

      <div>
        <TableContainer
          component={Paper}
          style={{ width: "80%", margin: "auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>PhoneNumber</TableCell>
                <TableCell>Delete/Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phonenumber}</TableCell>
                  <TableCell>
                    <Button variant="outlined">Delete</Button>{" "}
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      Update
                    </Button>
                    <Backdrop
                      open={open}
                      style={{ backgroundColor: "rgb(0 0 0 / 10%)" }}
                    >
                      <div style={{ width: "20%", backgroundColor: "white" }}>
                        {" "}
                        <Update />
                        <Button
                          variant="outlined"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          Close
                        </Button>
                        <Button variant="outlined">Update</Button>
                      </div>
                    </Backdrop>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
