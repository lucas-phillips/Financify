import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import Bills from './components/bills/bills';

export default function App() {
  return (
    <Router>
      <div className="h-screen bg-slate-800 text-neutral-200">
        <div className="grid grid-cols-[4rem_auto]">
          <div>
            <div className="h-screen">
              <Sidebar />
            </div>
          </div>
          <div>
            <div className="border-slate-900 border-[10px] h-screen px-4 py-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="bills" element={<Bills />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
