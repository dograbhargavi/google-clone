import React from "react";
import { Link } from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import Search from '../components/Search'
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLEFT">
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
        </div>
        <div className="home_headerRIGHT">
         <Link to='/gmail'>Gmail</Link>
         <Link to='/images'>Images</Link>
          <AppsIcon/>
          <Avatar />
        </div>
      </div>
      <div className="home_body">
       <img
         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F1200px-Google_2015_logo.svg.png&f=1&nofb=1"
         alt=""
        />
      <div className='home_inputtext'> 
       <Search />
      </div>
      </div>
    </div>
  );
};
