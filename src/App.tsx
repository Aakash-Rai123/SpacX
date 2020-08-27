import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

interface Props{

}
interface State{
 spaceInfo:any
 filteredInfo:any
 filter:boolean;
 loading: boolean;
}
class App extends React.Component<Props,State> {
  loader:boolean=false
  constructor(props:any){
    super(props);
    this.state={
      spaceInfo:[],
      filteredInfo:[],
      filter:false,
      loading:false
    }
  }
  componentDidMount(){
    axios.get('https://api.spacexdata.com/v3/launches?limit=100').then(res=>{
      
       if(res.data){
         this.setState({spaceInfo:res.data})
         this.setState({loading:false})
       }
    }).catch(er=>{
      console.log("error",er);
    })
    if(this.state.spaceInfo.length>0){
      this.setState({loading:false})
    }
  }
  
  filterYear=(year:any)=>{
  let b= this.state.spaceInfo.filter((value:any)=>{
     return value.launch_year==year;
   })
   this.setState({filter:true})
    this.setState({filteredInfo:b})
  }
  filterLaunch=(launch:any)=>{
    let b= this.state.spaceInfo.filter((value:any)=>{
      return value.launch_success==launch;
    })
    this.setState({filter:true})
     this.setState({filteredInfo:b})
  }
  render(){
    console.log("all",this.state.spaceInfo);
    if(this.state.spaceInfo.length==0){
      this.loader=true
    }else if(this.state.spaceInfo.length>0){
      this.loader=false
    }
  return (
    <React.Fragment>
      {this.loader && <div className="loader"></div>}
      <header style={{fontWeight:'bold',paddingLeft:'50px',paddingBottom:'40px', fontSize:'20px'}}>SpaceX Launch Program</header>
    <div className="spacex-container">
      <div style={{width:'20%',paddingLeft:'20px'}}>
        <h3 style={{backgroundColor:'white', width:'57%', borderRadius:'4px',paddingLeft:'40px',paddingBottom:'10px',fontSize:'16px'}}>Filters</h3><br/>
        <div style={{backgroundColor:'white', width:'70%', borderRadius:'4px'}}>
         <span style={{marginLeft:"40px"}}>Launch Year</span><br/>
         <span style={{visibility:'hidden'}}>Launch Year</span><br/>
         <button className="button" style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2006)}}>2006</button><span style={{visibility:'hidden'}}>2000</span><button onClick={()=>{this.filterYear(2007)}} style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}}>2007</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2008)}}>2008</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2009)}}>2009</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2010)}}>2010</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2011)}}>2011</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2012)}}>2012</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2013)}}>2013</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2014)}}>2014</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2015)}}>2015</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2016)}}>2016</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2017)}}>2017</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2018)}}>2018</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2019)}}>2019</button><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',marginBottom:'20px',borderRadius:'3px',borderColor:'greenyellow'}} onClick={()=>{this.filterYear(2020)}}>2020</button>
      </div><br/>
      <div style={{backgroundColor:'white', width:'70%',borderRadius:'4px',overflow:'hidden'}}>
         <span style={{marginLeft:"40px"}}>Successfull launch</span><br/>
         <span style={{visibility:'hidden'}}>Launch Year</span><br/>
         <button onClick={()=>this.filterLaunch(true)} style={{backgroundColor:"greenyellow",marginLeft:'20px',marginBottom:'20px',borderRadius:'3px',borderColor:'greenyellow'}}>True</button><span style={{visibility:'hidden'}}>2000</span><button onClick={()=>this.filterLaunch(false)} style={{backgroundColor:"greenyellow",marginLeft:'20px',marginBottom:'20px',borderRadius:'3px',borderColor:'greenyellow'}}>False</button><br/>
         
      </div><br/>
      <div style={{backgroundColor:'white', width:'70%',borderRadius:'4px'}}>
         <span style={{marginLeft:"40px"}}>Successfull landing</span><br/>
         <span style={{visibility:'hidden'}}>Launch Year</span><br/>
         <button style={{backgroundColor:"greenyellow",marginLeft:'20px',marginBottom:'20px',borderRadius:'3px',borderColor:'greenyellow'}}>True</button><span style={{visibility:'hidden'}}>2000</span><button style={{backgroundColor:"greenyellow",marginLeft:'20px',marginBottom:'20px',borderRadius:'3px',borderColor:'greenyellow'}}>False</button><br/>
         
      </div><br/>
      </div>
      {!this.state.filter?
    <div className="spacexTile" style={{width:'80%'}}>
      {this.state.spaceInfo.map((value:any)=>
      <ul>
        <li style={{boxSizing:"border-box", backgroundColor:'white',width:'200px',height:'250px',borderRadius:'5px'}}>
          <img src={value.links.mission_patch} style={{height:'120px', width:'150px', backgroundColor:'#C0C0C0',marginLeft:'10px',marginRight:'10px',marginTop:'10px'}}/><br/>
          <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>MissionIds:</label>
           <label style={{fontSize:'12px',marginLeft:'5px'}}>{value.mission_id}</label><br/>
      <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>Launch Year:</label><label style={{fontSize:'12px'}}>{value.launch_year}</label><br/>
      <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>Successfull Launch:</label >{value.launch_success?<label style={{fontSize:'12px'}}>true</label>:<label style={{fontSize:'12px'}}> false</label>}<br/>
      <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>Successful Landing:</label><label style={{fontSize:'12px'}}>true</label><br/>
        </li>
      </ul>)}
    </div>:
      <div className="spacexTile" style={{width:'80%'}}>
      {this.state.filteredInfo.map((value:any)=>
      <ul>
        <li style={{boxSizing:"border-box", backgroundColor:'white',width:'200px',maxHeight:'250px',borderRadius:'5px'}}>
          <img src={value.links.mission_patch} style={{height:'120px', width:'150px', backgroundColor:'#C0C0C0',marginLeft:'10px',marginRight:'10px',marginTop:'10px'}}/><br/>
          <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>MissionIds:</label>
           <label style={{fontSize:'12px',marginLeft:'5px'}}>{value.mission_id}</label><br/>
      <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>Launch Year:</label><label style={{fontSize:'12px'}}>{value.launch_year}</label><br/>
      <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>Successfull Launch:</label>{value.launch_success?<label style={{fontSize:'12px'}}>true</label>:<label style={{fontSize:'12px'}}>false</label>}<br/>
      <label style={{fontWeight:'bold',fontSize:'11px',marginLeft:'5px'}}>Successful Landing:</label><label style={{fontSize:'12px'}}>true</label><br/>
        </li>
      </ul>)}
    </div>
    }</div>
    <footer style={{fontWeight:'bold', paddingLeft:'600px'}}>DeveloperName: Aakash</footer>
    </React.Fragment>
  );
  }
}

export default App;
