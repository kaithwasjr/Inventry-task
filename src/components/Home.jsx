import React from 'react'
import Header from './header/Header'
import FormSwitch from './FormSwitch/FormSwitch'
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
