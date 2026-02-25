import React from 'react'
import '../Css/Dashboard.css';
import {Link} from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
     <h1>Click on Any of the below options to get Weather data</h1>
     <div className='button-div'>
        <Link to='/RequestType1'><button>Indian Weather Data</button></Link>
        <Link to='/RequestType2'><button>Indian Weather Data by Id</button></Link>
        <Link to='/RequestType3'><button>Indian Cities</button></Link>
        <Link to='/RequestType4'><button>Global Weather</button></Link>
        <Link to='/RequestType5'><button>Any location Globally</button></Link>
        <Link to='/RequestType6'><button>Weather Forecast for any location globally</button></Link>
     </div>
    </>
  )
}
