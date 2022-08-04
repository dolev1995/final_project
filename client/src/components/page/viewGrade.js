

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {Table ,TableBody , TableCell ,TableContainer , TableHead, TableRow} from "@material-ui/core";

// import Paper from "@material-ui/core/Paper";
// // import SearchBar from "material-ui-search-bar";
// import './viewGrade.css';

// console.log('originalRows1')

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   }
// });


// function Grade() {
//   const originalRows = window && window.userProfile && window.userProfile.grades || [];
//   console.log('originalRows1',originalRows)

//   const [rows, setRows] = useState(originalRows);
//   const [searched, setSearched] = useState("");
//   const classes = useStyles();


//   const requestSearch = (searchedVal) => {
//     const filteredRows = originalRows.filter((row) => {
//       return row.testName.toLowerCase().includes(searchedVal.toLowerCase());
//     });
//     setRows(filteredRows);
//   };

//   const cancelSearch = () => {
//     setSearched("");
//     requestSearch(searched);
//   };

//   return (
//     <div className="viewGrade">
//       <Paper>
//         {/* <SearchBar
//           value={searched}
//           onChange={(searchVal) => requestSearch(searchVal)}
//           onCancelSearch={() => cancelSearch()}
//         /> */}
//         <TableContainer>
//           <Table className={classes.table} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>testId </TableCell>
//                 <TableCell align="right">grade </TableCell>
//                 <TableCell align="right">testName </TableCell>
//                 <TableCell align="right">testClassName</TableCell>
//                 <TableCell align="right">testClassId </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows && rows.map((row,index) => (
//                 <TableRow key={index}>
//                   <TableCell component="th" scope="row">
//                     {row.testId}
//                   </TableCell>
//                   {/* <TableCell align="right">{row.grade}</TableCell> */}
//                   <TableCell align="right">{8000000000000000009999988}</TableCell>
//                   <TableCell align="right">{row.testName}</TableCell>
//                   <TableCell align="right">{row.testClassName}</TableCell>
//                   <TableCell align="right">{row.testClassId}</TableCell>
//                 </TableRow>
//               ))}
          
//                   <tr>
//                     <td>testClassId </td>
//                     <td>testClassId </td>
//                     <td>testClassId </td>
//                     <td>testClassId </td>
//                     <td>testClassId </td>
//                   </tr>
              
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//       <br/>
//     </div>
//   );
// }

// export default Grade


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Table ,TableBody , TableCell ,TableContainer , TableHead, TableRow} from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
// import SearchBar from "material-ui-search-bar";

console.log('originalRows1')

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});


function Grade() {
  const originalRows = window && window.userProfile && window.userProfile.grades || [];
  console.log('originalRows1',originalRows)

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();


  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.testName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <div>
      <Paper>
        {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>testId </TableCell>
                <TableCell align="right">grade </TableCell>
                <TableCell align="right">testName </TableCell>
                <TableCell align="right">testClassName</TableCell>
                <TableCell align="right">testClassId </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.map((row,index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.testId}
                  </TableCell>
                  <TableCell align="right">{row.grade}</TableCell>
                  <TableCell align="right">{row.testName}</TableCell>
                  <TableCell align="right">{row.testClassName}</TableCell>
                  <TableCell align="right">{row.testClassId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br/>
    </div>
  );
}

export default Grade