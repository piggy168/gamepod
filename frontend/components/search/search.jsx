import React from 'react';
import {hashHistory} from 'react-router';

class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    this.showDetail = this.showDetail.bind(this);
  }
  componentDidMount(){

  }

  showDetail(id){
    hashHistory.push(`/projects/${id}`);
  }

  render (){
    const {search} = this.props;
    let result;
    if (search.length < 1){
      result = <h1>No match found</h1>;
     } else {
      result = <h1>Search Result</h1>;
     }
    const panel = search.
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
         {result}
          <div className="category">
            {panel}
         </div>
        </div>
    );
  }
}

export default SearchIndex;
