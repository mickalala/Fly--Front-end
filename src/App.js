import Home from './Home.js';
import AboutCity from './About.js';
import AvailableTickets from './Tickets.js';
import AvailableHotels from './Hotels.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutCity />} />
       <Route path="/tickets" element={<AvailableTickets/>} />
       <Route path="/hotels" element={<AvailableHotels />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
