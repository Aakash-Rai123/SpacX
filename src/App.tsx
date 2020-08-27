import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { Content } from './components/content'
import { FilterComponent } from './components/filter'
import './App.css';

interface Props {

}
interface State {
  spaceInfo: any
  filteredInfo: any
  filter: boolean;
  loading: boolean;
}
class App extends React.Component<Props, State> {
  loader: boolean = false
  constructor(props: any) {
    super(props);
    this.state = {
      spaceInfo: [],
      filteredInfo: [],
      filter: false,
      loading: false
    }
  }
  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches?limit=100').then(res => {

      if (res.data) {
        this.setState({ spaceInfo: res.data })
        this.setState({ loading: false })
      }
    }).catch(er => {
      console.log("error", er);
    })
    if (this.state.spaceInfo.length > 0) {
      this.setState({ loading: false })
    }
  }
  
  getFilteredList=(list:any,ind:boolean)=>{
    this.setState({filter:ind})
    this.setState({filteredInfo:list})
  }

  render() {
    if (this.state.spaceInfo.length == 0) {
      this.loader = true
    } else if (this.state.spaceInfo.length > 0) {
      this.loader = false
    }
    return (
      <React.Fragment>
        {this.loader && <div className="loader"></div>}
        <header style={{ fontWeight: 'bold', paddingLeft: '50px', paddingBottom: '40px', fontSize: '20px' }}>SpaceX Launch Program</header>
        <div className="spacex-container">
          <div className="spacex-content">
            <FilterComponent spaceList={this.state.spaceInfo} listFilter={this.getFilteredList}/>
          </div>
          {!this.state.filter ?
            <div className="spacexTile">
              <Content spaceList={this.state.spaceInfo} />
            </div> :
            <div className="spacexTile">
              <Content spaceList={this.state.filteredInfo} />
            </div>
          }</div>
        <footer style={{ fontWeight: 'bold', paddingLeft: '600px' }}>DeveloperName: Aakash</footer>
      </React.Fragment>
    );
  }
}

export default App;
