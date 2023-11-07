import Home from './Pages/Home/Home.js';
import AboutCity from './Pages/About/About.js';
import AvailableTickets from './Pages/Tickets/Tickets.js';
import AvailableHotels from './Pages/Hotels/Hotels.js';
import TicketDetails from './Pages/Tickets/TicketDeatails.js';
import HotelDetails from './Pages/Hotels/HotelDetails.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutCity />} />
        <Route path="/tickets" element={<AvailableTickets />} />
        <Route path="/hotels" element={<AvailableHotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/ticket/:id" element={<TicketDetails />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
