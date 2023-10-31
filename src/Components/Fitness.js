import React from "react";
import { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";


function Fitness(){
    const [arr] = useContext(bucket)
    return (
    <div className="parent">
        <div className="left_child">
            <h1><span className="underline">Fitn</span>ess</h1>
            {
                arr.filter((item)=>item.cat==="Fitness" && item.id<=27).map((item,index) =>{
                    return(
                    
                    <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>
                    <div className="details" style={{display:'flex' , border:'2px solid gray' , boxShadow: '5px 6px 8px gray'}}>
                
                    <img src={item.img} className='img'  />
                    
                    <div style={{padding:'10px'}}>
                    <h2 >{item.title.slice(0,70)}</h2>
                    <p style={{color:'black',margin:'10px 0'}}>{item.content.slice(0,140)}...</p>
                    <p className="ref" style={{color: 'gray' , fontWeight: 'bold'}}>FITNESS : 13-10-23</p>
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
                            <img src={arr[26].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[26].id}`}>{arr[26].title }</Link></h3>
                                <p className="toppost_ref">FITNESS</p>
                            </div>
                        </div>  
                        <div className="toppost_leftsection1 section2">
                        <img src={arr[27].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[27].id}`}>{arr[27].title}</Link></h3>
                                <p className="toppost_ref">FITNESS</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[28].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[28].id}`}>{arr[28].title}</Link></h3>
                                <p className="toppost_ref">FITNESS</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[29].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[29].id}`}>{arr[29].title}</Link></h3>
                                <p className="toppost_ref">FITNESS</p>
                            </div>
                            </div> 
                           <img src="https://marketplace.canva.com/EAFIoP1oXmA/2/0/1131w/canva-black-and-red-modern-gym-flyer-kKVnDiTYMgA.jpg" className="advertisement" alt=""></img>
                    </div>
                </div>


             


        
    )          
}
export default Fitness;