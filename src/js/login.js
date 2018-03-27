import React,{Component} from 'react';

class Login extends React.Component{

	constructor(props){
		super(props)
			this.state={
				username:'',
				password:''
			}
	}
  render(){
    return(
    <React.Fragment>
     <div className="container">
       <div className="col-lg-6 col-lg-offset-3">
            <div className="inner-form">
                   <form role="form">
            		   <div className="row">
            		        
        			    	<div className="col-lg-12">    	    
        			    	    <div className="form-group">
        			    			<input type="email" name="email" id="email" className="form-control" placeholder="UserName" onChange={(even,newValue)=>this.setState({username:newValue})}/>
        			    		</div>
        			    	</div>
        			    	
        			    	<div className="col-lg-12">
        			    	    <div className="form-group">
        							<input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={(even,newValue)=>this.setState({password:newValue})}/>
        			    		</div>
        			    	</div>
        			    	
        					<div className="col-lg-12">
        					    <button type="submit" className="btn btn-info btn-block" onClick={(event) => this.handleClick(event)}>
        						Submit</button>
									</div>
            		</div>
            	</form>
          </div> 
		</div>   
	</div>   
    </React.Fragment>
    );
    }
  } 

  export default Login;