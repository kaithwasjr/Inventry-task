import React, { useEffect, useState } from 'react';
import './InventoryTable.css'; 
export default function InventoryTable() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://apis-technical-test.conqt.com/Api/Item-Supplier'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setItems(result.data.items); // Save the items in state
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(error);
  

  if (loading) return <p>Loading data...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="inventory-table-container">
      <h2>Inventory Items with Supplier Details</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>City, Country</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemId}>
              <td>{item.Supplier.supplierName}</td>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice} {item.currency}</td>
              <td>
                {item.Supplier.cityName}, {item.Supplier.countryName}
              </td>
              <td>{item.Supplier.email}</td>
              <td>
                +{item.Supplier.phoneCode} {item.Supplier.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
