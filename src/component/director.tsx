import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../index.css';
import '../main.css';

export default function DirectrorAdd() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dirimg, setDirimg] = useState('');
  const [awardcount, setAwardcount] = useState('');
  const history = useHistory();

  const data = {
    name: name,
    age: age,
    gender: gender,
    dirimg: dirimg,
    awardcount: awardcount,
  };
  console.log(name, age, gender, awardcount);

  async function storeData(e: any) {
    e.preventDefault();
    console.log('working');
    const res = await axios.post('http://localhost:4001/director/add', JSON.stringify(data), {
      headers: { 'Content-type': 'application/json' },
    });
    console.log(res);
    const f = JSON.stringify(data);
    console.log(f);
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
                    id='name'
                    placeholder='Enter the name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='id'
                    placeholder='Enter your Age'
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                 
                  <input
                    type='text'
                    className='form-control ratings'
                    id='ratings'
                    placeholder='Enter the gender'
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                
                  <input
                    type='string'
                    className='form-control ratings'
                    id='dirimg'
                    placeholder='Enter the Image Link'
                    onChange={(e) => setDirimg(e.target.value)}
                  />
                </div>

                <div className='form-group'>
                 
                  <input
                    type='number'
                    className='form-control ratings'
                    id='ratings'
                    placeholder='Enter the award count'
                    onChange={(e) => setAwardcount(e.target.value)}
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
  /* <div className='section group'>
      <div className='col span_3_of_6'>
      <div>
        <form className='form-group1'>
          <div className='form-group'>
            <label className='input-control1'>Name</label>
            <input
              type='text'
              className='form-control'
              id='id'
              placeholder='Enter the name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label className='input-control2' htmlFor='exampleFormControlSelect1'>Age</label>
            <input
              type='number'
              className='form-control title'
              id='title'
              placeholder='Enter the age'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label className='input-control3' htmlFor='exampleFormControlSelect2'>Gender</label>
            <input
              type='text'
              className='form-control ratings'
              id='ratings'
              placeholder='Enter the gender'
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          
          <div className='form-group'>
            <label className='input-control4' htmlFor='exampleFormControlSelect2'>Diroctor's Image Link</label>
            <input
              type='string'
              className='form-control ratings'
              id='dirimg'
              placeholder='Enter the Image Link'
              onChange={(e) => setDirimg(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label className='input-control4' htmlFor='exampleFormControlSelect2'>Award Count</label>
            <input
              type='number'
              className='form-control ratings'
              id='ratings'
              placeholder='Enter the award count'
              onChange={(e) => setAwardcount(e.target.value)}
            />
          </div>

          <button type='submit' className='input-control5 btn btn-primary' onClick={(e:any) => storeData(e)}>
            Submit
          </button>
        </form>
      </div>
      </div>
      <div className='col span_3_of_6'>
         <img src="https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UY400_CR92,0,330,400_AL_.jpg" alt="" />
      </div>
    </div> */
}
