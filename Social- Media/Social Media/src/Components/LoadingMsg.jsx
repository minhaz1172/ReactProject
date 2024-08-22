import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PacmanLoader } from 'react-spinners';//here we use react spinner from a webste :https://www.davidhu.io/react-spinners/storybook/?path=/docs/pacmanloader--docs


//aslo we can add from bootstrap
function LoadingMsg() {
  return (
    <div>
      <h1 className='m-3'>Loading posts <span className='text-danger m-2'> <PacmanLoader /></span></h1>
    </div>
  )
}

export default LoadingMsg