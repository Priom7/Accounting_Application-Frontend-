import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TransactionItems = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <li>
      <h4>Journal ID: {props.id}</h4>
      <h5>Date : {props.createdAt}</h5>
      <hr></hr>
      <div>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align='center'>
                  Account Name
                </TableCell>
                <TableCell align='center'>Group</TableCell>
                <TableCell align='center'>Debit</TableCell>
                <TableCell align='center'>Credit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={props.debit}>
                <TableCell component='th' scope='row'>
                  {props.debit}
                </TableCell>
                <TableCell align='center'>
                  {props.debitedAccountName}
                </TableCell>
                <TableCell align='center'>
                  {props.debitedGroupName}
                </TableCell>
                <TableCell align='center'>
                  {props.debitAmount} tk.
                </TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>
              <TableRow key={props.credit}>
                <TableCell component='th' scope='row'>
                  {props.credit}
                </TableCell>
                <TableCell align='center'>
                  {props.creditedAccountName}
                </TableCell>
                <TableCell align='center'>
                  {props.creditedGroupName}
                </TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>
                  {props.creditAmount} tk.
                </TableCell>
              </TableRow>
              <TableRow align='center'>
                <strong>Narration :</strong>
                {props.narration}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </li>
  );
};

export default TransactionItems;
