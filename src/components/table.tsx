import React from 'react'
import '../scss/app.scss'

const Table = () => {
  return (
    <div className='table'>
      <table>
        <tr>
          <th>DATE OF PAYMENT</th>
          <th>METHOD OF PAYMENT</th>
          <th>PAID TO</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT PAID</th>
          <th>SUBTOTAL</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
