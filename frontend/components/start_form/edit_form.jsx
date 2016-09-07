import React from 'react';
import {hashHistory} from 'react-router';
import { DateField, Calendar } from 'react-date-picker';

class EditForm extends React.Component{
  constructor(props){
    super(props);
    this.update=false;
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

  componentDidMount(){
    this.props.requestDetail(this.props.params.projectId);
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
    this.setState({reward: this.state.reward});
  }

  setTitle(index,e){
    this.state.reward[index].title=e.target.value;
    this.setState({reward: this.state.reward});
  }


  setReward(index,e){
    this.state.reward[index].description=e.target.value;
    this.setState({reward: this.state.reward});
  }

  setLimit(index,e){
    this.state.reward[index].limit=e.target.value;
    this.setState({reward: this.state.reward});
  }


  setDate(e){
    this.setState({end_date: e});
  }


  save(){
    this.props.updateDetail(this.state);
  }

  render (){

    if (this.update === false && this.props.detail.title !== undefined){
      const {detail} = this.props;
      this.state={
        id : detail.id,
        title: detail.title,
        photo_url: detail.photo_url,
        category: detail.category,
        description: detail.description,
        short: detail.short,
        goal: detail.goal,
        funded: detail.funded,
        end_date: detail.end_date,
        reward: detail.reward
      };
      this.update = true;
    }
    let reward = this.state.reward.map((rewards, index) => {
      return(
        <div>
        <p className="form-title">Reward {index+1}</p>
        <div className="form-reward-container">
          <div className='form-layer'>
              <p className="sub-title">Title</p>
              <input className="input-text" type="text" value={this.state.reward[index].title} onChange={this.setTitle.bind(this,index)}/>
          </div>
            <div className='form-layer'>
              <p className="sub-title">Amount</p>
              <input className="input-text" type="number" value={this.state.reward[index].amount} onChange={this.setAmount.bind(this,index)}/>
            </div>
            <div className='form-layer'>
              <p className="sub-title">Limit</p>
              <input className="input-text" type="number" value={this.state.reward[index].limit} onChange={this.setLimit.bind(this,index)}/>
            </div>
            <div className='form-layer'>
              <p className="sub-title">Description</p>
              <textarea className="form-textarea2" value={this.state.reward[index].description} onChange={this.setReward.bind(this,index)}></textarea>
            </div>
          </div>
      </div>
      );
    });
    return(
      <div className="detail-container">
        <h1 className="form-legend">Edit Project</h1>
         <div className='wrapper'>
          <p className="form-title">Project Title</p>
          <input className="input-text" type="text" value={this.state.title} onChange={this.setName.bind(this)}/>
          </div>
        <div className='wrapper'>
          <p className="form-title">Project Category</p>
            <select className="input-text" value={this.state.category} type="text" onChange={this.setCategory.bind(this)}>
              <option value="board game">Board Game</option>
              <option value="video game">Console Game</option>
              <option value="mobile game">Mobile Game</option>
            </select>
        </div>
        <div className='wrapper'>
          <p className="form-title">Funding Target</p>
          <input className='input-text' type='number' value={this.state.goal} onChange={this.setGoal.bind(this)}/>
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
          <textarea className="form-textarea-short" value={this.state.short} onChange={this.setShort.bind(this)} maxLength="180"></textarea>
            <p className="sub-title2">Project Detail</p>
          <textarea className="form-textarea" value={this.state.description} onChange={this.setText.bind(this)}></textarea>
          </div>
        </div>
        <div className="wrapper">
          {reward}
        </div>
        <div className="wrapper">
          <p className="form-title">Project End Date</p>
          <Calendar
            dateFormat='YYYY-MM-DD'
            date={this.state.end_date}
            onChange={this.setDate.bind(this)}
            />
        </div>
      <button className="form-submit" onClick={this.save.bind(this)}>Save</button>
      </div>

    );
  }
}

export default EditForm;
