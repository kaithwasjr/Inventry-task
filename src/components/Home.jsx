import React from 'react'
import Header from './header/Header'
import FormSwitch from './FormSwitch/FormSwitch'
import SubmitBlock from './submitBlock/SubmitBlock'
import InventoryTable from './Inventory/InventoryTable'

export default function Home() {
  return (
    <>
        <Header />
        <FormSwitch />
        <InventoryTable />
    </>
  )
}
