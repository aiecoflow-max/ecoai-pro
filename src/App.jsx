import { useState } from 'react'

function App() {
  const [buildingType, setBuildingType] = useState('Office')
  const [area, setArea] = useState(1000)
  const [result, setResult] = useState(null)

  const estimate = async () => {
    const res = await fetch('http://127.0.0.1:8000/compare/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ building_type: buildingType, area })
    })
    const data = await res.json()
    setResult(data)
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>EcoFlow Pro – LCA Estimator</h1>
      <label>
        Building Type:
        <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
          <option value="Office">Office</option>
          <option value="Residential">Residential</option>
          <option value="Warehouse">Warehouse</option>
        </select>
      </label>
      <br /><br />
      <label>
        Floor Area (m²):
        <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} />
      </label>
      <br /><br />
      <button onClick={estimate}>Estimate Carbon</button>
      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Estimated Embodied Carbon</h3>
          <p>{result.embodied_carbon} kg CO2e</p>
        </div>
      )}
    </div>
  )
}

export default App
