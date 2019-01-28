import React, { Component } from 'react';
import Header from './components/header';
import Add from './components/todo/Add'
import TodoList from './components/todo/List';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main role="main" className="flex-shrink-0">
          <div className="container py-5" >
            <h1 className="mt-5">  Housework - Todos </h1>
              <div className="row" >
                  <Add/>
              </div>
              <div className="row" >
                  <TodoList/>
              </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
