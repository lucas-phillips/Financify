import { Dehaze, Home, Payments } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-slate-900 grid auto-rows-min h-screen pl-2 pb-2 pt-[calc(10px_+_0.5rem)]">
      <span className="justify-self-center cursor-pointer pb-4">
        <Dehaze fontSize="medium" />
      </span>
      <Divider variant="fullWidth" className="bg-slate-700" />
      <Link to="/" className="justify-self-center cursor-pointer py-2 pt-4">
        <Home fontSize="large" />
      </Link>
      <Link to="/bills" className="justify-self-center cursor-pointer py-2">
        <Payments fontSize="large" />
      </Link>
    </div>
  );
}
