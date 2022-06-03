import React, { useState, useEffect } from "react";
import { useStyles } from "./styled";
import { Link } from "react-router-dom";
import HouseApi from "../../api/houseApi";
import { FormControl, Grid, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { SearchIconWrapper, StyledInputBase, Search } from "../Buy/styled";
import SearchIcon from '@mui/icons-material/Search';
import PropertyTypeApi from "../../api/propertyTypeApi";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const HousesTable = () => {
    const [Houses, setHouses] = useState([]);
    const [currentHouse, setCurrentHouse] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [properties, setProperty] = useState([]);

  
    const getPropertyData = async () => {
        try {
            await PropertyTypeApi.getAll().then(res => {
                setProperty(res.data)
                console.log(res.data)
            })
        } catch (e) {
            console.log(e);
        }

    }
    useEffect(() => {
        retrieveHouses();
        getPropertyData();
    }, []);
    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };
    const retrieveHouses = () => {
        HouseApi.getAll()
            .then(response => {
                setHouses(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const refreshTable = () => {
        retrieveHouses();
        setCurrentHouse(null);
        setCurrentIndex(-1);
    };
    const setActiveHouse = (House, index) => {
        setCurrentHouse(House);
        setCurrentIndex(index);
    };
    const removeAllHouses = () => {
        HouseApi.removeAll()
            .then(response => {
                console.log(response.data);
                refreshTable();
            })
            .catch(e => {
                console.log(e);
            });
    };
    const findByTitle = () => {
        HouseApi.getHousByLocation(searchTitle)
            .then(response => {
                setHouses(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <div className={classes.root}>
            <Grid
                container rowspacing={1}
                columnspacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={3}>
                    <form onSubmit={findByTitle}>
                        <Search >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Location…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchTitle}
                                onChange={onChangeSearchTitle}
                                type="text"
                            />
                        </Search>
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ width: '90%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 400 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>                                        
                                        {columns.map((column) => (
                                            <StyledTableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Houses
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <StyledTableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </StyledTableCell>
                                                        );
                                                    })}
                                                </StyledTableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15]}
                            component="div"
                            count={Houses.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    
    );
};

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'location', label: 'Location', minWidth: 100 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'propertyTypeID', label: 'Property Types', minWidth: 100},
    { id: 'beds', label: 'Beds', minWidth: 50, align: 'right', },
    { id: 'baths', label: 'Baths', minWidth: 50, align: 'right',},
    {
        id: 'sqft',
        label: 'Sqft\u00a0(m\u00b2)',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'price',
        label: 'Price\u00a0($)',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];

export default HousesTable;