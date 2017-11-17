import React from 'react';
import axios from 'axios';
import Header from './Header';
import DataPreview from './DataPreview';
// import SearchPreview from './SearchPreview';

import Form from './Form';

class App extends React.Component {
  state = {
    pageHeader: 'Weather App',
    data: []
  };

  componentDidMount() {
    // ajax
    axios.get('/api/data')
        .then(response => {
          this.setState({
            data: response.data.data
          });
        })
        .catch(console.error);
    console.log(this.state.data);

  }

  componentWillUnmount() {
    // ...
  }

  findLocation = (loc) => {
    console.log(loc);
    this.setState(prevState => ({
      data: prevState.data.concat(loc)
    }));
    console.log(this.data);
    console.log(this.state.data);
  };

  render() {
    return (
        <div className="App main clearfix">
          <Header message={this.state.pageHeader}/>
          <div>
            {this.state.data.map(data =>
                <DataPreview {...data} key={ data.locationName }/>
            )}
          </div>
          <hr/>
          {/*<SearchPreview searchResults={this.state.data}/>*/}
          <Form onSubmit={this.findLocation}/>

        </div>
    );
  }
}

export default App;