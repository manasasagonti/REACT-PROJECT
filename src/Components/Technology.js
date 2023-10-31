import React from "react";
import { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";


function Technology(){
    const [arr] = useContext(bucket)
    return (
    <div className="parent">
        <div className="left_child">
            <h1><span className="underline">Techn</span>ology</h1>
            {
                arr.filter((item)=>item.cat==="Technology" && item.id<=37).map((item,index) =>{
                    return(
                    
                    <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>
                    <div className="details" style={{display:'flex' , border:'2px solid gray' , boxShadow: '5px 6px 8px gray'}}>
                
                    <img src={item.img} className='img'  />
                    
                    <div style={{padding:'10px'}}>
                    <h2 >{item.title.slice(0,70)}</h2>
                    <p style={{color:'black',margin: '10px 0'}}>{item.content.slice(0,140)}...</p>
                    <p className="ref" style={{color: 'gray' , fontWeight: 'bold'}}>TECHNOLOGY : 13-10-23</p>
                    </div>
                    </div>
                    </Link>
                    )
            })
            }
        </div>
        <div className="right_child">
            <h1 ><span className="underline">Top</span> Post</h1>
            <div className="toppost_leftsection1">
                            <img src={arr[38].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[38].id}`}>{arr[38].title }</Link></h3>
                                <p className="toppost_ref">TECHNOLOGY</p>
                            </div>
                        </div>  
                        <div className="toppost_leftsection1 section2">
                        <img src={arr[36].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[36].id}`}>{arr[36].title}</Link></h3>
                                <p className="toppost_ref">TECHNOLOGY</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[35].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[35].id}`}>{arr[35].title}</Link></h3>
                                <p className="toppost_ref">TECHNOLOGY</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[32].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[32].id}`}>{arr[32].title}</Link></h3>
                                <p className="toppost_ref">TECHNOLOGY</p>
                            </div>
                            </div> 
                           <img src="https://i.pinimg.com/236x/07/6a/16/076a166ac46464d2b02c4a1afc311bf2.jpg" className="advertisement" alt=""></img>
                    </div>
                </div>


             


        
    )          }
export default Technology;