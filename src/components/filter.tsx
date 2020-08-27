import React from 'react';

interface Props{
    spaceList:any
    listFilter:any
}
interface State{
 filteredList:any
}
export class FilterComponent extends React.Component<Props,State>{
    constructor(props:any){
        super(props);
        this.state={
            filteredList:[]
        }
    }
    
    filterYear = (year: any) => {
      let filterList = this.props.spaceList.filter((value: any) => {
          return value.launch_year == year;
        })
        this.props.listFilter(filterList,true)
      }
      filterLaunch = (launch: any) => {
        let filterlaunch = this.props.spaceList.filter((value: any) => {
          return value.launch_success == launch;
        })
        this.props.listFilter(filterlaunch,true)
      }

    render(){
        return(
            <React.Fragment>
                <h3 className="filter-header">Filters</h3><br />
            <div className="x-list">
              <div className="launchName">Launch Year</div><br />
              <button className="button" onClick={() => { this.filterYear(2006) }}>2006</button><span style={{ visibility: 'hidden' }}>2000</span><button onClick={() => { this.filterYear(2007) }} className="button">2007</button><br />
              <button className="button" onClick={() => { this.filterYear(2008) }}>2008</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => { this.filterYear(2009) }}>2009</button><br />
              <button className="button" onClick={() => { this.filterYear(2010) }}>2010</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => { this.filterYear(2011) }}>2011</button><br />
              <button className="button" onClick={() => { this.filterYear(2012) }}>2012</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => { this.filterYear(2013) }}>2013</button><br />
              <button className="button" onClick={() => { this.filterYear(2014) }}>2014</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => { this.filterYear(2015) }}>2015</button><br />
              <button className="button" onClick={() => { this.filterYear(2016) }}>2016</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => { this.filterYear(2017) }}>2017</button><br />
              <button className="button" onClick={() => { this.filterYear(2018) }}>2018</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => { this.filterYear(2019) }}>2019</button><br />
              <button className="button" onClick={() => { this.filterYear(2020) }}>2020</button>
            </div><br />
            <div className="x-list">
              <div className="launchName">Successfull launch</div><br />
              <button className="button" onClick={() => this.filterLaunch(true)} >True</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => this.filterLaunch(false)} >False</button><br />

            </div><br />
            <div className="x-list">
              <div className="launchName">Successfull landing</div><br />
              <button className="button" onClick={() => this.filterLaunch(true)} >True</button><span style={{ visibility: 'hidden' }}>2000</span><button className="button" onClick={() => this.filterLaunch(false)}>False</button><br />

            </div><br />
            </React.Fragment>
        )
    }
}