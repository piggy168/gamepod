import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';


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

  delete(id){
    this.props.delete(id);
    hashHistory.push("/");
  }

  render(){
    let popText;

    if (this.state.clickOnReward === -1) {
       popText =  "";
    } else if ((this.props.currentUser) && (this.props.currentUser.id === this.props.detail.creater_id)){
       popText = "You can't fund your own project!";
    }else{
       popText = `Fund $ ${this.props.detail.reward[this.state.clickOnReward].amount} to this project
       and receive ${this.props.detail.reward[this.state.clickOnReward].title}`;
    }
    let buy;
    if (this.props.currentUser && this.state.clickOnReward !== -1){
      if (this.props.currentUser.money < this.props.detail.reward[this.state.clickOnReward].amount){
        buy = <p className="popwarning">Not enough credit to purchase the reward</p>;
      } else {
      buy = <div>
        <p className="poptext">{popText}</p>
      <button className="reward-confirm" onClick={this.fund.bind(this)}>Fund</button></div>;
      }
    } else {
      buy = <p className="popwarning">Please login to purchase reward</p>;
    }
    let control;
    if ((this.props.currentUser) && (this.props.currentUser.id === this.props.detail.creater_id)){
      control = <div className="control">
        <button className="edit" onClick={()=>hashHistory.push(`/edit/${this.props.detail.id}`)}>Edit Project</button>
        <button className="delete" onClick={this.delete.bind(this,this.props.detail.id)}>Delete Project</button>
      </div>;
    } else {
      control = <div></div>;
      }
    const today = new Date();
    const {detail} = this.props;
    const panel = <div className="detail-container">
        <div className="detail-banner">
          <div className="deatail-topleft">
            <p className="detail-cat"> --{detail.category}-- </p>
            <p className="detail-title"> {detail.title} </p>
        </div>
        <div className="detail-creater">
        <img className="detail-pic" src={detail.owner_photo_url} onClick={()=>hashHistory.push(`/user/${detail.creater_id}`)}/>
        <p className="detail-owner"> by {detail.owner} </p>
        </div>
        {control}
        </div>
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
            <div key={reward.id} className="reward-container">
              <p className="reward-amount">${reward.amount}</p>
              <p className="reward-title">{reward.title}</p>
              <p className="reward-description">{reward.description}</p>
              {(()=>{if(reward.limit < 1){  return <div>
                <p className="reward-sold">{reward.sold} sold</p>
                <button className="reward-buy" onClick={this.openModal.bind(this, index)}>Purchase</button></div>
              } else if(reward.limit - reward.sold > 0 ) { return <div>
                <p className="reward-sold">{reward.sold} out of {reward.limit} sold</p>
                <button className="reward-buy" onClick={this.openModal.bind(this, index)}>Purchase</button></div>
              } else { return<div>
              <p className="sold-out">Sold out!</p></div>
              }})()}
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)} style={this.state.style}>

        {buy}
      </Modal>
      </div>
    ;
  return(
    panel
  );

  }
}



export default Detail;
