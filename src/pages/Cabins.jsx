import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button"
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
function Cabins() {
  const [showForm,setShowForm] =useState(false)
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <Button onClick={()=>setShowForm(!showForm)}>Add new cabin</Button>
      {showForm&&<CreateCabinForm/>}
    </>
  );
}

export default Cabins;
