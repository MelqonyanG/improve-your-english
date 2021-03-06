import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

function createData(words, direction, wrong, correct) { 
  const result = []
  for (let i=0; i<words.length; i+=1){
      const arm = direction? words[i][0]: words[i][1];
      const eng = direction? words[i][1]: words[i][0];
      const word = words[i][0];
      const correctness = wrong.includes(word)? 'wrong': (correct.includes(word)? 'correct': 'not practiced');
      result.push({ arm, eng, correctness });
  }
  return result;
}

function createColumns(direction){
    return direction? 
    [
        { id: "arm", label: "Armenian", minWidth: 200 },
        { id: "eng", label: "English", minWidth: 200 },
        { id: "correctness", label: "Correctness", minWidth: 200 },
    ] :
    [
        { id: "eng", label: "English", minWidth: 200 },
        { id: "arm", label: "Armenian", minWidth: 200 },
        { id: "correctness", label: "Correctness", minWidth: 200 },
    ];
}

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: "auto"
  }
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const num = Math.floor(window.innerHeight / 128) + 1; 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const {words, direction, wrong, correct} = props;
  const rows = createData(words, direction, wrong, correct);
  const columns = createColumns(direction);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
 
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.label}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <b>{column.label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={`cell${column.label}`} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[num, num * 2, num * 4, words.length]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
