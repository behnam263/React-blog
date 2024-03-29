import React from 'react';
import {  validateAll } from 'indicative/validator'

class Signup extends React.Component{
constructor (){
super();
this.state={
 name:'',
 email:'',
 password:'',
 password_confirmation:'',
 errors:{}
};

}
handleSubmit = (event)=>{
event.preventDefault();
const data=this.state;
const rules={
name:'required|string',
email:'required|email',
password:'required|string|min:6|confirmed'
};
const messages={
  required: (field) => `${field} is required`,
'password.confirmed':'Confirmation is not correct',
'email.email':'email is not correct',
};
validateAll(data,rules,messages)
 .then(()=>{
  console.log('suceess');
 })
 .catch(errors=>{
  const formattedErrors={};
  errors.forEach(error=>formattedErrors[error.field] = error.message)
  this.setState({
    errors:formattedErrors
  })
  })
}


handleInputchange=(event)=>{
this.setState({
 [event.target.name]:event.target.value
});

}
render(){

    return (<div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}> 
    <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
      <h5 className="text-uppercase text-center">Register</h5>
      <br />
      <br />
      <form className="form-type-material" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <input type="text" name="name" className="form-control" placeholder="Username" onChange={this.handleInputchange} />
          <small className="text-danger">{this.state.errors['name']}</small>
        </div>
        <div className="form-group">
          <input type="text" name="email" className="form-control" placeholder="Email address" onChange={this.handleInputchange} />
          <small className="text-danger">{this.state.errors['email']}</small>
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleInputchange} />
          <small className="text-danger">{this.state.errors['password']}</small>
        </div>
        <div className="form-group">
          <input type="password"   name="password_confirmation" className="form-control" placeholder="Password (confirm)" onChange={this.handleInputchange} />
        </div>
        <br />
        <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
      </form>
      <hr className="w-30" />
      <p className="text-center text-muted fs-13 mt-20">Already have an account?
        <a href="login.html">Sign in</a>
      </p>
    </div>
    </div>
    );
}

}
export default Signup;