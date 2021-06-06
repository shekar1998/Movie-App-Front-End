import axios from 'axios';
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../index.css'

export default function MovieAdd() {
  const [moviename, setMoviename] = useState('');
  const [img, setImg] = useState('');
  const [boxofficeCollection, setBoxoffice] = useState('');
  const [director, setDirector] = useState('');
  const [directorimg, setDirectorImage] = useState('');
  const [rating, setRatings] = useState('');

  const data = {
    moviename: moviename,
    img: img,
    boxofficeCollection: boxofficeCollection,
    director: director,
    directorimg:directorimg,
    rating: rating,
  }

  console.log(moviename, img, boxofficeCollection, director, directorimg,  rating);
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }
  
  async function storeData(e: any) {
    e.preventDefault();
    console.log('working');
    console.log(data);
    const res = await axios.post('http://localhost:4001/movie/add', JSON.stringify(data), config);
    console.log(res);
    const f = JSON.stringify(data);
    console.log(f);
    console.log('unnnnnnnnnnn......//////------>>>>>' + f);
  }

  return (
    <div>
      <div className='page-wrapper p-t-180 p-b-100 font-poppins'>
        <div className='wrapper wrapper--w780'>
          <div className='card card-3'>
            <div className='card-heading'></div>
            <div className='card-body'>
              <form className='form-group1'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='id'
                    placeholder='Enter the movie name'
                    onChange={(e) => setMoviename(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    placeholder='Enter the Image Link'
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='title'
                    placeholder='Enter the box Oofice collection'
                    onChange={(e) => setBoxoffice(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='author'
                    placeholder='Enter the director name'
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='author'
                    placeholder='Enter the director name'
                    onChange={(e) => setDirectorImage(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='number'
                    className='form-control'
                    id='ratings'
                    placeholder='Enter the ratings'
                    onChange={(e) => setRatings(e.target.value)}
                  />
                </div>
                <Button className = 'moviebutton' onClick={(e: any) => storeData(e)} variant='contained'>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <Box
component='form'
sx={{
  '& > :not(style)': { m: 1, width: '25ch' },
}}
noValidate
autoComplete='off'
>
<TextField id='outlined-primary'  onChange={(e) => setMoviename(e.target.value)} label='Outlined primary' color='primary' />
<TextField id='filled-primary'  onChange={(e) => setId(e.target.value)}
label='Filled primary' variant='filled' color='primary' />
<TextField id='standard-primary'  onChange={(e) => setBoxoffice(e.target.value)} label='Standard primary' color='primary' variant='standard' />
<TextField id='standard-primary'   onChange={(e) => setDirector(e.target.value)}label='Standard primary' color='primary' variant='standard' />
<TextField id='standard-primary'  onChange={(e) => setBoxoffice(e.target.value)} label='Standard primary' color='primary' variant='standard' />
<TextField id='standard-primary'  onChange={(e) => setBoxoffice(e.target.value)} label='Standard primary' color='primary' variant='standard' />
<TextField id='standard-primary'   onClick={(e: any) => storeData(e)}
label='Standard primary' color='primary' variant='standard' />
</Box> */
}
