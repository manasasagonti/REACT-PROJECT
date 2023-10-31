import React from "react";
import { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";


function Food(){
    const [arr] = useContext(bucket)
    return (
    <div className="parent">
        <div className="left_child">
            <h1 className="underline">Food</h1>
            {
                arr.filter((item)=>item.cat==="Food" && item.id<=47).map((item,index) =>{
                    return(
                    
                    <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>
                    <div className="details" style={{display:'flex' , border:'2px solid gray' , boxShadow: '5px 6px 8px gray'}}>
                
                    <img src={item.img} className='img'  />
                    
                    <div style={{padding:'10px'}}>
                    <h2 >{item.title.slice(0,70)}</h2>
                    <p style={{color:'black',margin: '10px 0'}}>{item.content.slice(0,140)}...</p>
                    <p className="ref" style={{color: 'gray' , fontWeight: 'bold'}}>Food : 13-10-23</p>
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
                            <img src={arr[46].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[46].id}`}>{arr[46].title }</Link></h3>
                                <p className="toppost_ref">Food</p>
                            </div>
                        </div>  
                        <div className="toppost_leftsection1 section2">
                        <img src={arr[48].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[48].id}`}>{arr[48].title}</Link></h3>
                                <p className="toppost_ref">Food</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[49].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[49].id}`}>{arr[49].title}</Link></h3>
                                <p className="toppost_ref">Food</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[50].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[50].id}`}>{arr[50].title}</Link></h3>
                                <p className="toppost_ref">Food</p>
                            </div>
                            </div> 
                           <img src="https://cdn2.vectorstock.com/i/1000x1000/32/51/street-food-advertising-banner-realistic-vector-34863251.jpg" className="advertisement" alt=""></img>
                    </div>
                </div>


             


        
    )          
}
export default Food;