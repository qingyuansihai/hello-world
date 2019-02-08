import React, { Component } from "react"
import "./index.scss"
// import {getlist} from "./model";
// import {NavLink} from "react-router-dom"
import axios from 'axios'
class one extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
		datalist:[],

	  };
	}
	componentDidMount(){
		axios({url:`https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id=140&page=0`
		}).then(res=>{
			console.log(res.data,'aaa')
			this.setState({
				datalist:[...res.data]
			},()=>{console.log(this.state.datalist,'bbbb')}) 
		})
		
	}
    render() {
        return <div id="one">
			 <div >
				 <ul className="section">
					 {
						 this.state.datalist.map((item,index)=>
							<li key={index+'suiji'} className="first">
								<h3>{item.group_section.title}</h3>
								<div className="red">{item.group_section.desc}</div>
								{
									 item.tabs.map(i=><li className="second" key={i.id}>
									 <img src={i.url}/>
									 <h5>{i.title}</h5>
									 <h6>{i.desc}</h6>
									 </li>)
								}
							
							</li>
							)
					 }
				 </ul>
			 </div>
    		
		</div>
    }

 //     handleClick(id) {
	// 	console.log(id)
	// 	this.props.history.push(`/category/${id}`)
	// }
}
export default one