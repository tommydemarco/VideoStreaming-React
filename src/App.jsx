import React, { useState } from 'react';
import './App.css';
//========> COMPONENTS 
import PostList from './components/PostList'

const songList = [
  {
    title: 'Some first song',
    duration: '34 minutes',
    artist: 'Neil Harris'
  },
  {
    title: 'Some second song',
    duration: '94 minutes',
    artist: 'Neil Harris'
  },
  {
    title: 'Some third song',
    duration: '100 minutes',
    artist: 'Neil Harris'
  },
]

function App() {
  return (
    <PostList />
  )
}

export default App;
