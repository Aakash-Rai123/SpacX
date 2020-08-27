import React from 'react';

interface Props{
 spaceList:any
}
interface State{

}
export class Content extends React.Component<Props,State>{
   constructor(props:any){
       super(props);
       
   }
   render(){
       return(
           <React.Fragment>
               {this.props.spaceList.map((value: any) =>
               <ul>
                  <li className="attributeList">
                    <img src={value.links.mission_patch} style={{ height: '120px', width: '150px', backgroundColor: '#C0C0C0', marginLeft: '10px', marginRight: '10px', marginTop: '10px' }} /><br />
                    <label className="attributeName blue">{`#${value.mission_name}`}</label><br />
                    <label className="attributeName">MissionIds:</label>
                    <label style={{ fontSize: '12px', marginLeft: '5px' }}>{value.mission_id}</label><br />
                    <label className="attributeName">Launch Year:</label><label style={{ fontSize: '12px' }}>{value.launch_year}</label><br />
                    <label className="attributeName">Successfull Launch:</label >{value.launch_success ? <label style={{ fontSize: '12px' }}>true</label> : <label style={{ fontSize: '12px' }}> false</label>}<br />
                    <label className="attributeName">Successful Landing:</label><label style={{ fontSize: '12px' }}>true</label><br />
                  </li>
                </ul>)}
           </React.Fragment>
       )
   }
}