import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = () => {
  const rows=[{
    MovieName: "ARM",
    MovieReleaseYear: 2024,
    MovieCategory:"Action Adventure",
    MovieDirector:"Jithin lal",
    MovieLanguage:"Malayalam"
},
{
    MovieName: "GOAT",
    MovieReleaseYear: 2024,
    MovieCategory:"Action Thriller",
    MovieDirector:"Venkat Prabhu",
    MovieLanguage:"Tamil"
},
{
    MovieName: "ABCD",
    MovieReleaseYear: 2013,
    MovieCategory:"Dance Drama ",
    MovieDirector:"Remo",
    MovieLanguage:"Hindi"

},
{
MovieName: "Vaazha",
MovieReleaseYear: 2024,
MovieCategory:"Comedy Drama",
MovieDirector:"Anand Menen",
MovieLanguage:"Malayalam"

}
]





    
  return (
   
  
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} style={{border:'1px solid black'}} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell style={{border:'1px solid white',fontWeight:'700',backgroundColor:'black',color:'white'}} align="right">MovieName</TableCell>
            <TableCell style={{border:'1px solid white',fontWeight:'700',backgroundColor:'black',color:'white'}} align="right">MovieReleaseYear</TableCell>
            <TableCell style={{border:'1px solid white',fontWeight:'700',backgroundColor:'black',color:'white'}} align="right">MovieCategory</TableCell>
            <TableCell style={{border:'1px solid white',fontWeight:'700',backgroundColor:'black',color:'white'}} align="right">MovieDirector</TableCell>
            <TableCell style={{border:'1px solid white',fontWeight:'700',backgroundColor:'black',color:'white'}} align="right">MovieLanguage</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.MovieName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{border:'1px solid black'}} component="th" scope="row">
                {row.MovieName}
              </TableCell>
              <TableCell style={{border:'1px solid black'}} align="center">{row.MovieReleaseYear}</TableCell>
              <TableCell style={{border:'1px solid black'}} align="center">{row.MovieCategory}</TableCell>
              <TableCell style={{border:'1px solid black'}} align="center">{row.MovieDirector}</TableCell>
              <TableCell style={{border:'1px solid black'}} align="center">{row.MovieLanguage}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}

  


export default Home