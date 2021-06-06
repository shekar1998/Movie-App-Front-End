import * as React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Context } from '../context/context';
import '../index.css';

export default function Edit() {
  const state = useContext(Context);
  const { dispatch } = useContext(Context);
  return (
    <div>
      <input
        type='number'
        onChange={(e: any) => dispatch({ type: 'AGE_UPDATE', payload: e.target.value })}
        className='content12'
        name='Enter your age'
        id='age'
      />
    </div>
  );
}
