import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import './search.scss';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'

import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';

function Search({ hideButtons = false}) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState('')
  const history = useHistory();

  const search = (e) =>{
   e.preventDefault();

   console.log('you hit search button',input);

   dispatch({
     type: actionTypes.SET_SEARCH_TERM,
     term: input
   })

   history.push('./search')

  }

  const captureinput = (e)=>{
    setInput(e.target.value)
  }
  // console.log('$$$$$$$$$$$$$input',input)
  return (
    <form className='search' >
          <div className='search_input'>
              <SearchIcon className='search_inputIcon' />
              <input 
              value={input}
              onChange={captureinput}
               />
              <MicIcon />
        </div>  
        {!hideButtons ?(
          <div className="search_buttons">
            <Button 
            type='submit'
            onClick={search}
            variant='outlined'>
              Google Search
            </Button>
            <Button 
            variant='outlined'>
              I'm feeling Lucky
            </Button>
        </div> 
        ):
        (
          <div className="search_buttons">
            <Button 
            type='submit'
            onClick={search}
            variant='outlined'
            className='search_buttonsHidden'
            >
              Google Search
            </Button>
            <Button
            variant='outlined'
            className='search_buttonsHidden'
            >
              I'm feeling Lucky
            </Button>
        </div> 
        )

        }
           
    </form>
  )
}

export default Search
