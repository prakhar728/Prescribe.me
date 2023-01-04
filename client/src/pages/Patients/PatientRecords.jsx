import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecordCard from '../../components/Records/RecordCard'
import { gatherRecords } from '../../Redux/Visits'

const PatientRecords = () => {
  const address = useSelector((state) => state.wallet.address)
  const dispatch = useDispatch();
  const [currentAdress, setcurrentAdress] = useState("");
  const [patientRecords, setpatientRecords] = useState(null);
  useEffect(() => {
    if (address != "0x0") {
      setcurrentAdress(address);
      dispatch(gatherRecords(address));
    }
  }, [address])


  const records = useSelector(state => state.visit.records);
  useEffect(() => {
    setpatientRecords(records)
  }, [records])
  return (
    <Box display="flex" flexDirection={"column"} alignItems="center" justifyContent={"center"}>
      {patientRecords && patientRecords.map((record, key) => {
        return (
          <RecordCard Place={record[1]} Comments={record[2]} Time={record[0]} key={key} />
        )
      })}
    </Box>
  )
}

export default PatientRecords