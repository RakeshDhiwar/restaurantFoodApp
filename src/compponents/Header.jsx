/* eslint-disable react/no-children-prop */
// import React from 'react'
// import {Link} from 'react-router-dom'
// import Logo from './Logo'
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import authService from "../appwrite/auth";

import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from 'react'

import { updateName, updateEmail, setstatus } from "../store/userSlice";
import { setAdmin } from "../store/adminSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AdminStatus = useSelector((state) => state.admin.AdminTrue);
  const userStatus = useSelector((state) => state.user.status);

  const handleLogout = () => {
    // account.deleteSession('current')
    // dispatch(setstatus())
    // dispatch(updateName(null))
    //   dispatch(updateEmail(null))
    // navigate('/')

    const logout = authService.logout();
    logout
      .then((result) => {
        console.log(result);
        dispatch(setstatus());
        dispatch(updateEmail(""));
        dispatch(updateName(""));

        if (AdminStatus) {
          dispatch(setAdmin());
        }
      })
      .catch((error) => {
        throw error;
      });
    setTimeout(() => {
      navigate("/");
    }, 1000);
    alert("You are Logged out");
  };

  const AdminPanel = AdminStatus ? (
    <li className="p-2 mx-2 list-none">
      <Button children={"Admin"} onClick={() => navigate("/admin")} />
    </li>
  ) : null;

  const Logout = userStatus ? (
    <li className="p-2 mx-2 list-none">
      <Button children={"Logout"} onClick={handleLogout} />
    </li>
  ) : (
    <li className="p-2 mx-2 list-none">
      <Button children={"Login"} onClick={() => navigate("/login")} />
    </li>
  );

  return (
    <div>
      <div>
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  {/* Your logo or site name */}
                  <a href="/" className="text-black font-bold text-5xl ">
                    Dhiwar&apos;s Cafe
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-row-reverse items-center">
                  {/* Navbar links */}
                  {AdminPanel}
                  {/* {Login} */}
                  {Logout}

                  <li className="p-2 mx-2 list-none">
                    <Button
                      children={"Order"}
                      onClick={() => navigate("/order")}
                    />
                  </li>
                  <li className="p-2 mx-2 list-none">
                    <Button
                      children={"Menu"}
                      onClick={() => navigate("/menu")}
                    />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
