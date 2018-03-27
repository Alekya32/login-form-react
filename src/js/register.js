import React,{Component} from 'react';

class Register extends React.Component{
    render(){
        return(
           <React.Fragment>
             <div className="container row centered-form ">
             <form role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                            <input type="text" name="first_name" className="form-control input-sm" placeholder="First Name"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="text" name="last_name" className="form-control input-sm" placeholder="Last Name"/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
			    				<input type="email" name="email" className="form-control input-sm" placeholder="Email Address"/>
			    			</div>

			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password_confirmation" className="form-control input-sm" placeholder="Confirm Password"/>
			    					</div>
			    				</div>
			    			</div>
			    			<input type="submit" value="Register" className="btn btn-info btn-block"/>
			    		</form>
                    </div>
           </React.Fragment>
        );
    }
}


export default  Register;