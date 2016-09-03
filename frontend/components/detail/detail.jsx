import React from 'react';


class Detail extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){

    this.props.requestDetail(this.props.params.projectId);
  }

  render(){
    const today = new Date();
    const {detail} = this.props;
    const panel = <div className="detail-container">
        <p className="detail-title"> {detail.title} </p>
        <p className="detail-owner"> by {detail.owner} </p>
        <div className="detail-upper">
          <img className="detail-img" src={detail.photo_url} />
          <div className="detail-point">
            <p className="detail-funded"> {Math.ceil((new Date(detail.end_date)-today)/60/60/24/1000)}</p>
            <p className="detail-label"> days to go </p>
            <p className="detail-funded"> 145 </p>
            <p className="detail-label"> backers </p>
            <p className="detail-funded"> ${detail.funded} </p>
            <p className="detail-label"> funded towrads ${detail.goal} </p>
          </div>
        </div>
        <div className="dmeter danimate">
          <span style={{width: Math.min((detail.funded*100/detail.goal),100)+"%"}}><span></span></span>
        </div>
        <div className="detail-lower">
        <div className="detail-discontainer">
          <p className="detail-sublabel">About this project</p>
          <p className="detail-description"> {detail.description}</p>
        </div>
        <div className="reward-section">
          <p className="detail-sublabel">Support this project</p>
          {detail.reward.map((reward)=>(
            <div className="reward-container">
              <p className="reward-amount">${reward.amount}</p>
              <p className="reward-title">{reward.title}</p>
              <p className="reward-description">{reward.description}</p>
              <button className="reward-buy">Purchase</button>
            </div>
          ))}
        </div>
      </div>
      </div>
    ;
  return(
    panel
  );

  }
}



export default Detail;
