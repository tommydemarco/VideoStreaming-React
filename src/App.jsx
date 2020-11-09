import React from 'react';
import { Route, Switch } from 'react-router-dom'

//========> COMPONENTS 
import TheNavbar from './components/TheNavbar/TheNavbar'
import ListStreams from './components/ListStreams/ListStreams'
import CreateStream from './components/CreateStream/CreateStream'
import EditStream from './components/EditStream/EditStream'
import ShowStream from './components/ShowStream/ShowStream'
import DeleteStream from './components/DeleteStream/DeleteStream'

function App() {
  return (
    <React.Fragment>
      <TheNavbar />
      <div class="main-container">
        <Switch>
          <Route exact path="/" component={() => <ListStreams />} />
          <Route exact path="/create-stream" component={() => <CreateStream />} />
          <Route exact path="/show-stream" component={() => <ShowStream />} />
          <Route exact path="/edit-stream" component={() => <EditStream />} />
          <Route exact path="/delete-stream" component={() => <DeleteStream />} />
        </Switch>
      </div>
    </React.Fragment>
    
  )
}

export default App;
