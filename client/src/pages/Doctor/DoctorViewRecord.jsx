import { Box, Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/DoctorPage/Nav'
import RecordCard from '../../components/Records/RecordCard';
import { gatherRecords } from '../../Redux/Visits';

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
  }, [records])


  return (
    <Box display={"flex"} flexDirection="column" w="100%" padding="4%" alignItems={"center"}>
      <Box  w="80%" borderRadius={"24px"} padding="2%" border="1px" paddingBottom={"5%"} borderColor="grey" >
        <Box display={"flex"} padding="5%" justifyContent={"center"} alignItems="center" gap={"10%"}>
          <Input value={addressPatient} onChange={e => setaddressPatient(e.target.value)} placeholder="Enter Address of Patient"  w="40%" size="lg" fontSize={"2xl"}/>
          <Button onClick={getAllRecords} w="25%" size="lg" fontSize={"2xl"} >Get Records</Button>
        </Box>

        <Box display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"} overflowY="scroll">
          {recordsToView && recordsToView.map((record, key) => {
            return (
              <RecordCard Place={record[1]} Comments={record[2]} Time={record[0]} key={key} />
            )
          })}
        </Box>
      </Box>

    </Box>
  )
}

export default DoctorViewRecord