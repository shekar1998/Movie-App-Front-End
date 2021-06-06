import { Card, Avatar } from 'antd';
import { StarFilled, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';
import { IconButton, TrashIcon, Pane, Text, majorScale } from 'evergreen-ui';
import { Popconfirm, message } from 'antd';
import axios from 'axios';
import { searchMovie, searchDirector } from './util';
import Rating from '@material-ui/lab/Rating';
import { Context } from '../context/context';
import '../index.css';

export default function App() {
  const state = useContext(Context);
  const { dispatch } = useContext(Context);
  // const [moviename, setMoviename] = useState('');
  const [val1, setVal] = useState(false);
  useEffect(() => {
    Moviedetails();
  },[]);

  let movies = state.show.movies;
  async function Moviedetails() {
    const res = await axios.get('http://localhost:4001/movie');
    console.log(res);
    dispatch({ type: 'FETCH_MOVIES', payload: res.data });
  }

  async function deleteDetails(moviename: any) {
    const res = await axios.delete('http://localhost:4001/movie/delete/' + moviename, {
      headers: { 'Content-type': 'application/json' },
    });
    console.log('delete', res);
    Moviedetails();
  }
  console.log('val1', val1);

  async function editview(dirname: any) {
    console.log('entereed');
    setVal(!val1);
    console.log(val1);
    const d = {
      age: state.show.age,
    };
    if (state.show.age !== 0) {
      const res = await axios.patch('http://localhost:4001/director/age/' + dirname, JSON.stringify(d));
      console.log(res);
    }
  }

  const { Meta } = Card;

  console.log(state.show.movies);
  return (
    <div className='main-div'>
      <div className='movies-border'>
        {movies.map((val: any) => {
          return (
            <div>
              <Card
                className='maincontainer'
                style={{ width: 300, float: 'left', margin: '1% 1% 1% 1%' }}
                cover={<img className='container photo' alt='example' src={val.img} />}
                actions={[
                  <Meta className='moviedetails1' description={val.boxofficeCollection} />,
                  <IconButton
                    onClick={() => deleteDetails(val.moviename)}
                    className='trashicon'
                    icon={TrashIcon}
                    intent='warning'
                    marginRight={majorScale(0)}
                  />,
                  <EllipsisOutlined key='ellipsis' />,
                ]}
              >
                <Avatar className='avatar' src={val.dirimg} />
                <Meta className='moviename' title={val.moviename} />
                <div className='details-allignment'>
                <Meta description={`Directed By ${val.director}`} />
                <Rating
                  className='starformate'
                  name='size-large-read'
                  defaultValue={val.rating}
                  size='small'
                  precision={0.1}
                  readOnly
                />
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
{
  /* {val1 && <Edit /> } */
}
{
  /* { val && <MDBCardTitle>{val.age}</MDBCardTitle>}  */
}
{
  /* <MDBCard className='margin1' shadow='0' border='dark' background='white' style={{ maxWidth: '18rem' }}>
<MDBCardHeader className='moviename'>{val.moviename}</MDBCardHeader>
<MDBCardBody className='text-dark'>
  <MDBCardTitle className='textwidth'>
    <abbr title={val.boxofficeCollection}></abbr>
    {val.boxofficeCollection}
  </MDBCardTitle>
  <MDBCardText className='textwidth'>{val.director}</MDBCardText>
  <button type='button' className='btn btn2 btn-primary'>
    Edit{' '}
    <img
      className='iconedit'
      src='https://img-premium.flaticon.com/png/512/747/747994.png?token=exp=1621217271~hmac=d95707521132bac7bde262f2af081e9c'
      alt=''
    />
  </button>
  <button
    type='button'
    onClick={() => deleteDetails(setMoviename(val.moviename))}
    className='btn btn1 btn-danger'
  >
    Delete
    <img
      className='iconedit'
      src='https://img-premium.flaticon.com/png/512/1345/1345874.png?token=exp=1621217401~hmac=7c0e87b7dd53e14b343d0378b0a15033'
      alt=''
    />
  </button>
</MDBCardBody>
</MDBCard> */
}
