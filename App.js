import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100 flex p-4 md:p-6">
      {/* Left half - empty, for responsive design */}
      <div className="flex-1 hidden lg:block"></div>
      {/* Right half - widgets */}
      <div className="w-full lg:w-3/5 p-4 md:p-8 flex flex-col gap-6 max-w-4xl mx-auto">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


export default App;

