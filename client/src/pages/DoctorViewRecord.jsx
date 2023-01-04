import { Box, Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/DoctorPage/Nav'
import RecordCard from '../components/Records/RecordCard';
import { gatherRecords } from '../Redux/Visits';

const DoctorViewRecord = () => {
  const dispatch = useDispatch();
  const [recordsToView, setrecordsToView] = useState(null);
  const [addressPatient, setaddressPatient] = useState("")



  const getAllRecords = () => {
    dispatch(gatherRecords(addressPatient));
    console.log('Records gathered');
  }
  const records = useSelector((state) => state.visit.records)

  useEffect(() => {
    setrecordsToView(records);
    console.log(records);
  }, [records])


  return (
    <Box display={"flex"} flexDirection="column" >
      <Nav />
      <Input value={addressPatient} onChange={e => setaddressPatient(e.target.value)} placeholder="Enter Address of Patient" />
      <Button onClick={getAllRecords}>Get Records</Button>
      <Box  display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"}> {recordsToView && recordsToView.map((record,key)=>{
        return(
          <RecordCard Place={record[1]}  Comments={record[2]} Time={record[0]} key={key}/>
        )
      })}</Box>
    </Box>
  )
}

export default DoctorViewRecord