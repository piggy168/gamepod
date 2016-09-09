import React from 'react';
import {hashHistory} from 'react-router';
import { DateField, Calendar } from 'react-date-picker';


class StartForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title:"",
      photo_url:"",
      category:"",
      description: "",
      short: "",
      goal:0,
      funded:0,
      creater_id:-1,
      end_date: "",
      reward: [{
        title: "",
        description: "",
        amount: 0,
        limit: 0
      }]
    };

  }




  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({photo_url: results[0].url});
      }
    }.bind(this));
  }

  setName(e){
    this.setState({title: e.target.value});
  }

  setCategory(e){
    this.setState({category: e.target.value});
  }

  setGoal(e){
    this.setState({goal: e.target.value});
  }

  setText(e){
    this.setState({description: e.target.value});
  }

  setShort(e){
    this.setState({short: e.target.value});
  }

  setAmount(index,e){
    this.state.reward[index].amount=e.target.value;
  }

  setTitle(index,e){

    this.state.reward[index].title=e.target.value;
  }


  setReward(index,e){
    this.state.reward[index].description=e.target.value;
  }

  setLimit(index,e){
    this.state.reward[index].limit=e.target.value;
  }

  addReward(){
    this.state.reward.push({
      title: "",
      description: "",
      amount: 0,
      limit: 0
    });
    this.setState(this.state);
  }

  setDate(e){
    this.setState({end_date: e});
  }


  submit(){
    this.state.creater_id = this.props.currentUser.id;
    this.props.createProject(this.state);
  }

  render (){

    let error;
    if (this.props.detail.error.length>0){
      error = <p className="form-error">{this.props.detail.error[0]}</p>;
    } else {
      error = <div></div>;
    }

    let today;
    if (this.state.end_date === "") {
       today =  new Date();
    } else {
       today = this.state.end_date;
    }
    const reward = this.state.reward.map((rewards, index) => {
      return(
        <div key={index}>
        <p className="form-title">Reward {index+1}</p>
        <div className="form-reward-container">
          <div className='form-layer'>
              <p className="sub-title">Title</p>
              <input className="input-text" type="text" onChange={this.setTitle.bind(this,index)}/>
          </div>
            <div className='form-layer'>
              <p className="sub-title">Amount</p>
              <input className="input-text" type="number" onChange={this.setAmount.bind(this,index)}/>
            </div>
            <div className='form-layer'>
              <p className="sub-title">Limit</p>
              <input className="input-text" type="number" onChange={this.setLimit.bind(this,index)}/>
            </div>
            <div className='form-layer'>
              <p className="sub-title">Description</p>
              <textarea className="form-textarea2" placeholder="Reward description starts here" onChange={this.setReward.bind(this,index)}></textarea>
            </div>
          </div>
      </div>
      );
    });
    let content;
    if (this.props.currentUser){
      content = <div className="detail-container">
        <h1 className="form-legend">Starting your project</h1>
         <div className='wrapper'>
          <p className="form-title">Project Title</p>
          <input className="input-text" type="text" onChange={this.setName.bind(this)}/>
          </div>
        <div className='wrapper'>
          <p className="form-title">Project Category</p>
            <select className="input-text" defaultvalue="boardgame" type="text" onChange={this.setCategory.bind(this)}>
              <option value="boardgame">Board Game</option>
              <option value="videogame">Console Game</option>
              <option value="mobilegame">Mobile Game</option>
            </select>
        </div>
        <div className='wrapper'>
          <p className="form-title">Funding Target</p>
          <input className='input-text' type='number' onChange={this.setGoal.bind(this)}/>
        </div>
        <div className="wrapper">
          <p className="form-title">project photo</p>
          <img className="form-image" src={this.state.photo_url}/>
          <button className="reward-buy" onClick={this.upload.bind(this)}>Upload Image</button>
        </div>
        <div className="wrapper">
          <p className="form-title">Project description</p>
          <div className="form-reward-container">
            <p className="sub-title2">Short Description (limit 180 letters)</p>
          <textarea className="form-textarea-short" placeholder="short description limit 180 letters" onChange={this.setShort.bind(this)} maxLength="180"></textarea>
            <p className="sub-title2">Project Detail</p>
          <textarea className="form-textarea" placeholder="Project description starts here" onChange={this.setText.bind(this)}></textarea>
          </div>
        </div>
        <div className="wrapper">
          {reward}
          <button className="form-add" onClick={this.addReward.bind(this)}>Add Reward</button>
        </div>
        <div className="wrapper">
          <p className="form-title">Project End Date</p>
          <Calendar
            dateFormat='YYYY-MM-DD'
            date={today}
            onChange={this.setDate.bind(this)}
            />
        </div>
      <button className="form-submit" onClick={this.submit.bind(this)}>Submit</button>
      {error}
      </div>;
    } else {
    content = <div className='warning'>Please Log in to Start a Proejct or continue browsing other projects by clicking the logo</div>;
    }
    return(
      content
    );
  }
}

export default StartForm;
