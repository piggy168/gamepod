import React from 'react';
import Slider from 'react-slick';
import {hashHistory} from 'react-router';

class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }
  componentDidMount(){
    this.props.requestProjects();
  }

  showDetail(id){
    hashHistory.push(`/projects/${id}`);
  }

  boardgame(){
    hashHistory.push("/category/boardgame");
  }
  videogame(){
    hashHistory.push("/category/videogame");
  }
  mobilegame(){
    hashHistory.push("/category/mobilegame");
  }
  gameOne(){
    hashHistory.push("/projects/1");
  }

  gameTwo(){
    hashHistory.push("/projects/3");
  }

  render (){
    const {projects} = this.props;
    const settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          centerMode: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,

        };


    const boardgamepanel = projects.boardgames.
    map((project)=>{return(
                    <div key={project.id} className="panel" onClick={this.showDetail.bind(this, project.id)}>
                      <img className="panel-image" src={project.photo_url} />
                      <p className="panel-title">{project.title}</p>
                      <p className="panel-creater">{project.owner}</p>
                      <p className="panel-description">{project.short}</p>
                      <div className="panel-footer">
                        <div className="meter animate">
                          <span style={{width: Math.min((project.funded*100/project.goal),100)+"%"}}><span></span></span>
                        </div>

                        <label className="panel-fundlabel">funded</label>
                        <p className="panel-fund">{project.funded}</p>
                        <p className="panel-enddate">{project.end_date}</p>
                      </div>
                    </div>

                  );});
  const videogamepanel = projects.videogames.
  map((project)=>{return(
                  <div key={project.id} className="panel" onClick={this.showDetail.bind(this, project.id)}>
                    <img className="panel-image" src={project.photo_url} />
                    <p className="panel-title">{project.title}</p>
                    <p className="panel-creater">{project.owner}</p>
                    <p className="panel-description">{project.short}</p>
                    <div className="panel-footer">
                      <div className="meter animate">
                        <span style={{width: Math.min((project.funded*100/project.goal),100)+"%"}}><span></span></span>
                      </div>

                      <label className="panel-fundlabel">funded</label>
                      <p className="panel-fund">{project.funded}</p>
                      <p className="panel-enddate">{project.end_date}</p>
                    </div>
                  </div>

                );});

  const mobilegamepanel = projects.mobilegames.
  map((project)=>{return(
                  <div key={project.id} className="panel" onClick={this.showDetail.bind(this, project.id)}>
                    <img className="panel-image" src={project.photo_url} />
                    <p className="panel-title">{project.title}</p>
                    <p className="panel-creater">{project.owner}</p>
                    <p className="panel-description">{project.short}</p>
                    <div className="panel-footer">
                      <div className="meter animate">
                        <span style={{width: Math.min((project.funded*100/project.goal),100)+"%"}}><span></span></span>
                      </div>

                      <label className="panel-fundlabel">funded</label>
                      <p className="panel-fund">{project.funded}</p>
                      <p className="panel-enddate">{project.end_date}</p>
                    </div>
                  </div>

                );});
    return(
      <div className="content">
          <Slider {...settings}>
            <div><img src="http://1.bp.blogspot.com/-quzFSWfLPNM/UmEUrmB0L9I/AAAAAAAAAg0/RMsy8_VQ1Z8/s1600/Banner+15.jpg"/>
            <p className="site-banner">Game Pod - Where your game dreams come true</p>
          </div>
              <div><img src="http://smythstoysblog.com/wp-content/uploads/2016/03/Over-watch-banner.jpg" />
                <p className="title-button" onClick={this.gameOne.bind(this)}>View Project</p>
            </div>
            <div><img src="https://lambdamugames.files.wordpress.com/2015/02/bannerart_pixelpowers.png?w=1200" />
            <p className="title-button" onClick={this.gameTwo.bind(this)}>View Project</p>
            </div>
          </Slider>
          <h1 className="h1">Board Game</h1>
          <button className="see-all" onClick={this.boardgame.bind(this)}>See all</button>
          <div className="category">
            {boardgamepanel}
         </div>
         <h1 className="h1">Video Game</h1>
         <button className="see-all" onClick={this.videogame.bind(this)}>See all</button>
         <div className="category">
           {videogamepanel}
        </div>
        <h1 className="h1">Mobile Game</h1>
        <button className="see-all" onClick={this.mobilegame.bind(this)}>See all</button>
        <div className="category">
          {mobilegamepanel}
       </div>
        </div>
    );
  }
}

export default ProjectIndex;
