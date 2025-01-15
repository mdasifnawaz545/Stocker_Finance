import React, { useState } from 'react'
import Apex from '../component/Apex.jsx'
import LeftCard from '../component/LeftCard.jsx'
import Card from '../component/Card.jsx'
const Home = () => {
  const [companySelection, setCompanySelection] = useState("")
  return (
    <div className=' flex w-full'>
      <div className=' w-1/3'><LeftCard setCompanySelection={setCompanySelection} companySelection={companySelection} />
      </div>
      <div className=' w-2/3'><Apex companySelection={companySelection} />
      </div>

    // </div>
  )
}

export default Home