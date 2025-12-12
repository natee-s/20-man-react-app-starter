import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/Home';
import Owner from './component/Owner';

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="owner" element={<Owner />} />

      </Route>
    </Routes>
  );
}