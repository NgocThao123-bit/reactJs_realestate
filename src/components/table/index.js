import MaterialTable from "material-table";
import { createRef, useEffect, useRef, useState } from "react";
import tableIcons from "./tableIcons";
import HouseApi from "../../api/houseApi";
import PropertyTypeApi from "../../api/propertyTypeApi";
import HousesTable from "../admin/HouseTable";
import AddHouse from "../admin";
import axios from 'axios';
import { Grid } from "@material-ui/core";
import {Link} from "react-router-dom";
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import AddBoxIcon from '@mui/icons-material/AddBox';
const columns = [
  // { field: 'name', title: 'Name' },
  { field: 'listingPhoto', title: 'Image', render: (rowData) => <img src={rowData.listingPhoto} style={{ width: 100, borderRadius: "10%" }} />, },
  { field: 'location', title: 'Location' },
  { field: 'type', title: 'Type', lookup: { "Rent": "Rent", "Buy": "Buy" } },
  { field: 'propertyTypeID', title: 'Property Types', lookup: { 1: "Apartment", 2: "Multi-family", 3: "Single-family" } },
  { field: 'beds', title: 'Beds', align: 'center', },
  { field: 'baths', title: 'Baths', align: 'center', },
  {
    field: 'sqft',
    title: 'Sqft\u00a0(m\u00b2)',
    // minWfieldth: 100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    field: 'price',
    title: 'Price\u00a0($)',
    // minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  // { field: 'map', title: 'MapURL' },
  // { field: 'description', title: 'Description' },

];


export const BasicTable = (props) => {


  const propertyDefault = {
    propertyTypeID: null,
    name: ""
  }
  const tableRef = createRef();
  const [selectedRow, setSelectedRow] = useState(null);

  const [Houses, setHouses] = useState([]);
  const [currentHouse, setCurrentHouse] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");
  // const [properties, setProperty] = useState(propertyDefault);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const housesRef = useRef();
  housesRef.current = Houses;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };  

  // const getPropertyData = async () => {
  //     try {
  //         await PropertyTypeApi.getAll().then(res => {
  //             setProperty(res.data)
  //             console.log(res.data)
  //         })
  //     } catch (e) {
  //         console.log(e);
  //     }

  // }

  useEffect(() => {
    retrieveHouses();

    // getPropertyData();
  }, []);
  // const onChangeSearchTitle = e => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };
  const retrieveHouses = () => {
    HouseApi.getAll()
      .then(response => {
        setHouses(response.data);
        // console.log(response.data);
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

  const handleDeleteById = async (rowIndex) => {
    console.log(rowIndex);
    const id = housesRef.current[rowIndex].id;
    await HouseApi.remove(id).then((response) => {
      //  props.history.push("/listingHouse");
      let newHouse = [...housesRef.current];
      newHouse.splice(rowIndex, 1);
      setHouses(newHouse)

      // refreshTable();

    })
      .catch(e => {
        console.log(e);
      });
  }
  // const setActiveHouse = (House, index) => {
  //   setCurrentHouse(House);
  //   setCurrentIndex(index);
  // };
  // const removeAllHouses = () => {
  //   HouseApi.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshTable();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  // const findByTitle = () => {
  //   HouseApi.getHousByLocation(searchTitle)
  //     .then(response => {
  //       setHouses(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  //function for updating the existing row details
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field")
    }
    if (newData.listingPhoto === "") {
      errorList.push("Try Again, You didn't enter the listingPhoto field")
    }

    if (newData.location === "") {
      errorList.push("Try Again, location field can't be blank")
    }
    if (newData.type === "") {
      errorList.push("Try Again, Enter type before submitting")
    }

    if (errorList.length < 1) {
      // axios.put(`https://jsonplaceholder.typicode.com/users/${newData.id}`, newData)
      HouseApi.update(newData)
        .then(response => {
          const updateHouse = [...Houses];
          const index = oldData.tableData.id;
          updateHouse[index] = newData;
          setHouses([...updateHouse]);
          resolve()
          setIserror(false)
          setErrorMessages([])
        })
        .catch(error => {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()

        })
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()

    }
  }

  const handleRowDelete = (oldData, resolve) => {

    console.log(oldData.houseID)

    HouseApi.remove(oldData.houseID)
      .then(response => {
        const dataDelete = [...Houses];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setHouses([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }
  return (
    <MaterialTable
      title="House Table"
      columns={columns}
      data={Houses}
      icons={tableIcons}
      onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.houseID))}
      actions={[
        {
          icon:()=> <Link to={'/pages/Sell'}><Icon style={{ color: green[500] }}><AddBoxIcon sx={{ fontSize: 40 }}/></Icon></Link>,
          tooltip: 'Create House',
          isFreeAction: true,
          onClick: (event,rowData) => localStorage.setItem('selectedRowData', rowData)
        }
      ]}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            handleRowUpdate(newData, oldData, resolve);

          }),
        // onRowAdd: (newData) =>
        //   new Promise((resolve) => {
        //     handleRowAdd(newData, resolve)
        //   }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            handleRowDelete(oldData, resolve)
          }),
      }}
      options={{
        // selection: true,
        headerStyle: {
          backgroundColor: '#434f5b',
          color: '#4cdef6'
        },
        rowStyle: rowData => ({
          backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
        })
      }}
      // components={{
      //   Action:props=>(
      //     <Link to={'/'}>Add</Link>
      //   )
      // }}
      detailPanel={[
        {
          tooltip: 'Show detail',
          render: rowData => {
            return (
              <div
                style={{

                  textAlign: 'flex',
                  color: 'black',
                  backgroundColor: 'white',
                }}
              >
                <Grid
                  container spacing={3}
                >
                  <Grid item xs={6}>
                    <h4>Description:</h4>
                    {rowData.description}
                  </Grid>
                  <Grid item xs={6}>
                    <iframe
                      width="100%"
                      height="200"
                      src={rowData.map}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Grid>
                </Grid>
              </div>
            )
          }
        }
      ]}
    />
  )

};