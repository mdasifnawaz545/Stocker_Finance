import { useState } from 'react'
import Apex from '../component/Apex.jsx'
import LeftCard from '../component/LeftCard.jsx'
// import Card from '../component/Card.jsx'
const Home = () => {
  const [companySelection, setCompanySelection] = useState("")
  return (
    <div className=' flex w-full overflow-x-hidden'>
      <div ><LeftCard setCompanySelection={setCompanySelection} companySelection={companySelection} />
      </div>
      <div className='w-full'><Apex companySelection={companySelection} />
      </div>
    </div>
  )
}

export default Home