import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Card, Avatar } from 'antd';
import Rating from '@material-ui/lab/Rating';
import { StarFilled, SearchOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { EditIcon, IconButton, Popover, Pane, TextInput, SearchIcon, majorScale } from 'evergreen-ui';
import { Context } from '../context/context';
import { Details } from './util';
import axios from 'axios';
import '../index.css'

interface Props {}
export default function Search(props: Props) {
  const state = useContext(Context);
  const { dispatch } = useContext(Context);
  const search = state.show.search;
  let movie = state.show.movies;

  console.log('movie', movie);
  console.log(state);

  useEffect(() => {
    Details(search).then((res) => {
      console.log(res);
      return dispatch({ type: 'FETCH_MOVIES', payload: res.data });
    });
  }, []);

  const { Meta } = Card;
  console.log(state.show.movies);

  return (
    <div className='main-div'>
      {movie.map((val: any) => {
          return (
            <div className='director-details'>
              <Card
                className='directorcontainer1'
                style={{ width: 240 }}
                cover={<img className='container3 photo2 director-border' alt='example' src={val.img} />}
                actions={[
                  <Link to='/directorsearch'>
                    <SearchOutlined key='search' />
                  </Link>,
                  <IconButton
                    className='trashicon'
                    icon={EditIcon}
                    intent='warning'
                    marginRight={majorScale(0)}
                  />,
                  <EllipsisOutlined key='ellipsis' />,
                ]}
              >
                <Meta title={val.moviename} description={`Box Office- ${val.boxofficeCollection}`} />
               <Rating
                  className='starformate'
                  name='size-large-read'
                  defaultValue={val.rating}
                  size='small'
                  precision={0.1}
                  readOnly
                />
                {/* <Button marginY={8} display={'inline'} marginRight={8} iconBefore={EditIcon}>
                  Edit
                </Button>
                <Button marginY={5} marginRight={8} iconBefore={SearchIcon}>
                  Search
                </Button> */}
              </Card>
            </div>
          );
      
      })}
    </div>
  );
}

      //   console.log(val);
      //   <div>
      //      <h5>1</h5>
      // <h5>10</h5>
      // <h5>100</h5>
      // <h5>1000</h5>
      // <h5>10000</h5>
      // <h5>100000</h5>
      // <h5>1000000</h5>
      // <h5>10000000</h5>
      // <h5>100000000</h5>
      // <h5>1000000000</h5>
      // <h5>10000000000</h5>
      // <h5>100000000000</h5>
      // <h5>1000000000000</h5>
      // <h5>100000000000000</h5>
      // <h5>1000000000000000</h5>
      // <h5>10000000000000000</h5>
      // <h5>100000000000000000</h5>
      // <h5>1000000000000000000</h5>
      //   <h1>Redirected</h1>
      //   <Card
      //     className='maincontainer'
      //     style={{ width: 300, float: 'left', margin: '1% 1% 1% 1%' }}
      //     cover={<img className='container photo' alt='example' src={val.img} />}
      //     actions={[
      //       <Meta className='moviedetails1' description={val.boxofficeCollection} />,
      //       <EllipsisOutlined key='ellipsis' />,
      //     ]}
      //   >
          
      //     <Avatar className='avatar' src={val.dirimg} />
      //     <Meta className='moviename' title={val.moviename} />
      //     <div className='details-allignment'>
      //       <Meta description={`Directed By ${val.director}`} />
      //       <Rating
      //         className='starformate'
      //         name='size-large-read'
      //         defaultValue={val.rating}
      //         size='small'
      //         precision={0.1}
      //         readOnly
      //       />
      //     </div>
      //   </Card>;
      //   </div>