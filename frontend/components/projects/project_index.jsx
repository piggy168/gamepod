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
          respondTo: "min"
        };

    const panel = projects.
    map((project)=>{return(
                    <div className="panel" onClick={this.showDetail.bind(this, project.id)}>
                      <img className="panel-image" src={project.photo_url} />
                      <p className="panel-title">{project.title}</p>
                      <p className="panel-creater">{project.owner}</p>
                      <p className="panel-description">{project.description}</p>
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
        <h1>Projects</h1>
          <Slider {...settings}>

            {projects.map((project)=>(<div><img src={project.photo_url} /></div>))}
          </Slider>
          <h1 className="h1">Board Game</h1>
          <button className="see-all">See all</button>
          <div className="category">
            {panel}
         </div>
        </div>
    );
  }
}

export default ProjectIndex;
