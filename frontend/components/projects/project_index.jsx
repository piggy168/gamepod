import React from 'react';
import Slider from 'react-slick';

class ProjectIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestProjects();

  }

  render (){

    const {projects} = this.props;
    const settings = {
          dots: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
          centerMode: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    const style = {width: "50%"};

    const panel = projects.map((project)=>{return(
                    <div className="panel">
                      <img className="panel-image" src={project.photo_url} />
                      <p className="panel-title">{project.title}</p>
                      <p className="panel-creater">{project.creater_id}</p>
                      <p className="panel-description">{project.description}</p>
                      <div className="panel-footer">
                        <div className="meter animate">
                          <span style={{width: (project.funded*100/project.goal)+"%"}}><span></span></span>
                        </div>
                        
                        <label className="panel-fundlabel">funded</label>
                        <p className="panel-fund">{project.funded}</p>
                        <p className="panel-enddate">{project.end_date}</p>
                      </div>
                    </div>

                  );});
    return(
      <div>
        <h1>Projects</h1>
          <Slider {...settings}>

            {projects.map((project)=>(<div><img src={project.photo_url} /></div>))}
          </Slider>
          <h1>Board Game</h1>
          <div className="category">
            {panel}
         </div>
        </div>
    );
  }
}

export default ProjectIndex;
