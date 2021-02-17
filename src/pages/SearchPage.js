import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/More";

import Search from "../components/Search";
import "./SearchPage.scss";
import Response from "../response";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // MOCk API CALL
  const data = Response;

  //LIVE API CALL
//   const { data } = useGoogleSearch(term);

  console.log("************************", data);
  return (
    <div className="searchPage">
      {/* SearchPage */}
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F1200px-Google_2015_logo.svg.png&f=1&nofb=1"
            alt=""
          />
        </Link>

        <div className="searchPage_headerBody">
          <Search hideButtons />

          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shoping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item,index) => (
            <div className="searchPage_result" key={index}>
              <a href={item.link}>
                {/* <img 
                className="searchPage_resultImage"
                 src = { item.pagemap?.cse_image[0]?.src } 
                 alt=""
                 /> */}
                 {item.displayLink} </a>
              <a className="searchPage_result_Title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_result_Snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
