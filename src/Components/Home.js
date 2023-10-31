import React ,{ useContext } from "react"
import { Link } from "react-router-dom";
import {bucket} from "../Store/CreateStore";


 export default function Home(){

    let news = useContext(bucket)
    console.log(news);
    return(
        <>
        <div className="posts">
            <img className="post1" src="https://english.cdn.zeenews.com/sites/default/files/2021/11/17/988495-untitled-design-2021-11-17t232757.409.jpg" ></img>
            <img className="post2" src="https://www.orfonline.org/wp-content/uploads/2022/10/mental-health-wellness-during-covid-19.jpg" alt="image not found" ></img>
            <img className="post3" src="https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg?sfvrsn=2fee0a3b_1" alt="image not found"></img>
        </div>
        <br></br>
        <h1 className="latest_heading"><span className="underline">The</span> Latest</h1>
        
         <div className="the_latest">
            <div className="latest_section1">
                <img src={news[0][12].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link" ><Link to={`/details/${news[0][12].id}`}>{news[0][12].title.slice(0,60)}</Link></h3>
                    <p className="date">Bollywood : 14-10-23</p>
                </div>
                </div>
        
            <div className="latest_section1">
                <img src={news[0][23].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link"><Link to={`/details/${news[0][23].id}`}>{news[0][23].title.slice(0,60)}</Link></h3>
                    <p className="date">Fitness : 07-10-23</p>
                </div>
                </div>
    
            <div className="latest_section1">
                <img src={news[0][34].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link"><Link to={`/details/${news[0][34].id}`}>{news[0][34].title.slice(0,60)}</Link></h3>
                    <p className="date">Technology : 01-10-23</p>
                </div>
                </div>
            
            <div className="latest_section1">
                <img src={news[0][45].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link"><Link to={`/details/${news[0][45].id}`}>{news[0][45].title.slice(0,60)}</Link></h3>
                    <p className="date">Food : 03-10-23</p>
                </div>
                </div>
    
        
        </div>
        <br></br>
        <div className="latest_articles">
            <div className="left_article">
                 <h1 className="heading_1"><span className="underline">The</span> Latest Articles</h1> 
                
                
                <div className="left_part1">
                    <img src={news[0][26].img} className="image_article" alt="not found"></img>
                    <div className="info_article">
                        <h3 className="title"><Link to={`/details/${news[0][26].id}`}>{news[0][26].title}</Link></h3>
                        <p className="content">{news[0][26].content.slice(0,150)}....</p>
                        <p className="date">Fitness : 10-09-23</p>
                    </div>
                    </div>
                    <div className="left_part1">
                    <img src={news[0][36].img} className="image_article" alt="not found"></img>
                    <div className="info_article">
                        <h3 className="title"><Link to={`/details/${news[0][36].id}`}>{news[0][36].title}</Link></h3>
                        <p className="content">{news[0][36].content.slice(0,150)}....</p>
                        <p className="date">Bollywood : 11-10-23</p>
                    </div>
                    </div>
                    <div className="left_part1">
                    <img src={news[0][18].img} className="image_article" alt="not found"></img>
                    <div className="info_article">
                        <h3 className="title"><Link to={`/details/${news[0][18].id}`}>{news[0][18].title}</Link></h3>
                        <p className="content">{news[0][18].content.slice(0,150)}....</p>
                        <p className="date">Hollywood : 09-09-23</p>
                    </div>
                    </div>
                    <div className="left_part1">
                    <img src={news[0][48].img} className="image_article" alt="not found"></img>
                    <div className="info_article">
                        <h3 className="title"><Link to={`/details/${news[0][48].id}`}>{news[0][48].title}</Link></h3>
                        <p className="content">{news[0][48].content.slice(0,150)}....</p>
                        <p className="date">Food : 09-09-23</p>
                    </div>
                    </div>
                    <div className="left_part1">
                    <img src={news[0][8].img} className="image_article" alt="not found"></img>
                    <div className="info_article">
                        <h3 className="title"><Link to={`/details/${news[0][8].id}`}>{news[0][8].title}</Link></h3>
                        <p className="content">{news[0][8].content.slice(0,150)}....</p>
                        <p className="date">Bollywood : 09-09-23</p>
                    </div>
                    </div>
                </div>
                <div className="right_article">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJtujycQwJQUGIkC-UsvkhUotVVCn3e8lQQ&usqp=CAU" className="advertisement" alt=""></img>
                    <div className="right_part">
                        

                         <div className="top_posts"><h1><span className="underline">Top P</span>osts</h1></div> 
                         <div className="toppost_leftsection1">
                            <img src={news[0][14].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${news[0][14].id}`}>{news[0][14].title }</Link></h3>
                                <p className="toppost_ref">Bollywood</p>
                            </div>
                        </div>  
                        <div className="toppost_leftsection1 section2">
                        <img src={news[0][29].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${news[0][29].id}`}>{news[0][29].title}</Link></h3>
                                <p className="toppost_ref">Fitness</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={news[0][35].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${news[0][35].id}`}>{news[0][35].title}</Link></h3>
                                <p className="toppost_ref">Technology</p>
                            </div>
                            </div> 
                            <div className="toppost_leftsection1 section2">
                        <img src={news[0][43].img} className="toppost_image"></img>
                            <div className="toppost_info">
                                <h3><Link className="info" to={`/details/${news[0][43].id}`}>{news[0][43].title}</Link></h3>
                                <p className="toppost_ref">Food</p>
                            </div>
                            </div> 
                           
                    </div>
                </div>


                </div>
                <h1 className="latest_heading"><span className="underline">The</span> Stories</h1> 
         <div className="the_latest">
            <div className="latest_section1">
                <img src={news[0][9].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link" ><Link to={`/details/${news[0][9].id}`}>{news[0][9].title.slice(0,60)}</Link></h3>
                    <p className="date">Bollywood : 14-10-23</p>
                </div>
                </div>
            
            <div className="latest_section1">
                <img src={news[0][22].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link"><Link to={`/details/${news[0][22].id}`}>{news[0][22].title.slice(0,60)}</Link></h3>
                    <p className="date">Fitness : 07-10-23</p>
                </div>
                </div>
        
    
            <div className="latest_section1">
                <img src={news[0][33].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link"><Link to={`/details/${news[0][33].id}`}>{news[0][33].title.slice(0,60)}</Link></h3>
                    <p className="date">Technology : 01-10-23</p>
                </div>
                </div>
            
            <div className="latest_section1">
                <img src={news[0][49].img} className="image_home" alt="image not found"></img><hr></hr>
                <div className="home_content">
                    <h3 className="title_link"><Link to={`/details/${news[0][49].id}`}>{news[0][49].title.slice(0,60)}</Link></h3>
                    <p className="date">Food : 03-10-23</p>
                </div>
                </div>
    
        
        </div>

            
        </>
    )
}


