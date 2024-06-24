import React from 'react';
import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList.tsx';
import UserSearch from './state/UserSearch.tsx';
 
const el = document.getElementById("root");
 
const root = ReactDOM.createRoot(el!);
 
const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};
 
root.render(<App />);