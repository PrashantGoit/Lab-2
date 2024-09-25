import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    <div className='header'>
    <h1>Resorts Lite</h1>
    <hr className="divider"/>
    </div>

    <div className='Container'>
      <Card 
        image="src\assets\images\Lab-3-Images\1.jpg" 
        country="Indonesia" 
        location="Gili Air Hotel" 
        rating="4.8" 
        price="$589/night"
      />

      <Card 
        image="src\assets\images\Lab-3-Images\2.jpg" 
        country="Seychelles" 
        location="Hilton Resort" 
        rating="4.2" 
        price="$629/night"
      />

      <Card 
        image="src\assets\images\Lab-3-Images\3.jpg" 
        country="US Virgin Islands" 
        location="Goa Resort" 
        rating="3.5" 
        price="$485/night"
      />

      <Card 
        image="src\assets\images\Lab-3-Images\4.jpg" 
        country="Bahamas" 
        location="Kuredu Resort" 
        rating="4.1" 
        price="$729/night"
      />

      <Card 
        image="src\assets\images\Lab-3-Images\5.jpg" 
        country="Mauritius" 
        location="Trou D'eau Douce" 
        rating="4.9" 
        price="$877/night"
      />

      <Card 
        image="src\assets\images\Lab-3-Images\6.jpg" 
        country="Bermuda" 
        location="Staniel Cay Hotel" 
        rating="3.2" 
        price="$365/night"
      />

    </div>
    </>
  );
}

export default App
