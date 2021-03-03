import React from 'react'
import './AppWorkArea.css'
import PeriodicTable from '../PeriodicTable/PeriodicTable'

function AppWorkArea() {
  return (
    <div className="centroid workarea">
      <h1>Periodic Table</h1>
      <div className="workarea-periodic-table">
        <PeriodicTable />
      </div>
    </div>
  )
}

export default AppWorkArea