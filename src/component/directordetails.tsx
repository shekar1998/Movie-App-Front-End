import { Card } from 'antd';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../context/context';
import { EditIcon, IconButton, Popover, Pane, TextInput, SearchIcon, majorScale } from 'evergreen-ui';
import { StarFilled, SearchOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Directordetails, ImageDetails } from './util';
import Search from './search';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import '../index.css';

export default function Director() {
  const state = useContext(Context);
  const { dispatch } = useContext(Context);
  let directors = state.show.directors;
  const history = useHistory();

  function ViewDetails(director: any) {
    dispatch({ type: 'SEARCH_MOVIES', payload: director });
    history.push('/directorsearch');
  }
  useEffect(() => {
    Directordetails().then((res) => dispatch({ type: 'FETCH_DIRECTORS', payload: res.data }));
    
  }, []);

  const { Meta } = Card;
  return (
    <Router>
      <div className='director-div'>
        <div className='director-border'>
          {directors.map((val: any) => {
            return (
              <div className='director-details'>
                <Card
                  className='directorcontainer'
                  style={{ width: 240 }}
                  cover={<img className='container1 photo1 director-border' alt='example' src={val.dirimg} />}
                  actions={[
                    <Link to='/directorsearch'>
                      <SearchOutlined onClick={() => ViewDetails(val.name)} key='search' />
                    </Link>,
                    <IconButton className='trashicon' icon={EditIcon} intent='warning' marginRight={majorScale(0)} />,
                    <EllipsisOutlined key='ellipsis' />,
                  ]}
                >
                  {
                    <div>
                      <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Control type='password' />
                      </Form.Group>
                      <Button className="buttonInput" as="input" type="button" value="Input" />
                    </div>
                  }
                  <Meta title={val.name} description={`Age - ${val.age}    |     Awards - ${val.awardCount} `} />
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
      </div>
    </Router>
  );
}
