import React from 'react';
import Modal from 'react-modal';


class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      modal: false,
      clickOnReward: -1,
      style:  {
        overlay : {
            position        : 'fixed',
            top             : 50,
            left            : 0,
            right           : 0,
            bottom          : 0,
            backgroundColor : 'rgba(0, 0, 0, 0.6)',
          },
        content : {
            margin          : 'auto',
            width           : '250px',
            height          : '270px',
            padding         : '20px',
            border          : 'none',
            backgroundColor : 'rgba(0, 0, 0, 0.7)',
          }
        }
    };
  }
  componentDidMount(){
    this.props.requestDetail(this.props.params.projectId);
  }

  openModal(index){
    this.setState({modal: true, clickOnReward: index});
  }

  closeModal(){
    this.setState({modal: false});
  }

  fund(){

    this.props.fund(this.props.currentUser.id, this.props.detail.reward[this.state.clickOnReward].id);

    this.closeModal();
  }

  render(){
    let popText;
    if (this.state.clickOnReward === -1) {
       popText =  "";
    } else {
       popText = `Fund $ ${this.props.detail.reward[this.state.clickOnReward].amount} to this project
       and receive ${this.props.detail.reward[this.state.clickOnReward].title}`;
    }
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
            <p className="detail-funded"> {detail.backers} </p>
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
          {detail.reward.map((reward, index)=>(
            <div className="reward-container">
              <p className="reward-amount">${reward.amount}</p>
              <p className="reward-title">{reward.title}</p>
              <p className="reward-description">{reward.description}</p>
              <button className="reward-buy" onClick={this.openModal.bind(this, index)}>Purchase</button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)} style={this.state.style}>

        <p className="poptext">{popText}</p>
        <button className="reward-confirm" onClick={this.fund.bind(this)}>Fund</button>
      </Modal>
      </div>
    ;
  return(
    panel
  );

  }
}



export default Detail;
