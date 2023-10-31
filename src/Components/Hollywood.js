import React from "react";
import { useContext } from "react";
import { bucket } from "../Store/CreateStore";
import { Link } from "react-router-dom";


function Hollywood(){
    const [arr] = useContext(bucket)
    return (
    <div className="parent">
        <div className="left_child">
            <h1><span className="underline">Hollyw</span>ood</h1>
            {
                arr.filter((item)=>item.cat==="Hollywood" && item.id<=18).map((item,index) =>{
                    return(
                    
                    <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>
                    <div className="details" style={{display:'flex' , border:'2px solid gray' , boxShadow: '5px 6px 8px gray'}}>
                
                    <img src={item.img} className='img'  />
                    
                    <div style={{padding:'10px'}}>
                    <h2 >{item.title.slice(0,70)}</h2>
                    <p style={{color:'black',margin: '10px 0'}}>{item.content.slice(0,140)}...</p>
                    <p className="ref" style={{color: 'gray' , fontWeight: 'bold'}}>HOLLYWOOD : 13-10-23</p>
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
                            <img src={arr[20].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[20].id}`}>{arr[20].title }</Link></h3>
                                <p className="toppost_ref">Hollywood</p>
                            </div>
                        </div>  
                        <div className="toppost_leftsection1 section2">
                        <img src={arr[19].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[19].id}`}>{arr[19].title}</Link></h3>
                                <p className="toppost_ref">Hollywood</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[18].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[18].id}`}>{arr[18].title}</Link></h3>
                                <p className="toppost_ref">Hollywood</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={arr[17].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${arr[17].id}`}>{arr[17].title}</Link></h3>
                                <p className="toppost_ref">Hollywood</p>
                            </div>
                            </div> 
                           <img src="https://api.time.com/wp-content/uploads/2017/02/170213-vintage-movie-poster-09.jpg" className="advertisement" alt=""></img>
                    </div>
                </div>


             


        
    )          
}
export default Hollywood;