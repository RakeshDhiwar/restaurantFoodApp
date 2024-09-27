/* eslint-disable react/no-children-prop */
// import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../compponents/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const Username = useSelector((state) => state.user.name);

  const navigate = useNavigate()

  const [Uname, setUname] = useState("DHIWAR");
  useEffect(() => {
    setUname(Username);
    // console.log(Uname);
    console.log(Username);
    console.log(Uname);
  }, [Uname, Username]);

  return (
    <div>
      {/* Home */}
      <div className="  w-3/4  h-fit flex flex-col ">
        <h1 className="mx-40 my-10 p-2 text-6xl font-sans ">
          Welcome {Username} to Dhiwar&apos;s Cafe
        </h1>
      </div>
      <div className=" bg-cover w-full  h-fit flex flex-row ">
        <p className="p-8 w-2/3 text-center text-6xl">
          We love to serve you ❤️.
        </p>
        <div className=" w-1/3 p-8 text-3xl">
          <img
            className="w-3/4 h-2/3 rounded-lg"
            src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span> <Button children={'Make your first Order'} onClick={() => navigate('/menu')} className='m-4'></Button>  </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
