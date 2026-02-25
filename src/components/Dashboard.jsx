import React from 'react'
import '../Css/Dashboard.css';
import {Link} from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
     <h1>Click on Any of the below options to get Weather data</h1>
     <div className='button-div'>
        <Link to='/india/weather'><button>Indian Weather Data</button></Link>
        <Link to='/india/forecast'><button>Indian Weather Data by Id</button></Link>
        <Link to='/india/climate'><button>Indian Cities</button></Link>
        <Link to='/india/history'><button>Global Weather</button></Link>
        <Link to='/india/humidity'><button>Any location Globally</button></Link>
        <Link to='/india/wind'><button>Weather Forecast for any location globally</button></Link>
     </div>
    </>
  )
}
