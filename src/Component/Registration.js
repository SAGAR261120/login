import React  from 'react'

 function Registration(props) {
let name = ['text-center']
if(props.type == 1)
{
name.push("bg-success")
}
else{
    name.push("bg-danger")
}
    return (
      <div>
    <div className='container-fluid'>
    <div className='col-md-5 m-auto'>
    <div className='mt-3'>
    <div className='card text-left'>
    <div className='card-body'>
 
        <form className='grey' onSubmit={props.registration}>
           <span className='badge-pill badge-primary bg-dark text-white'><b>REGISTRATION PAGE</b></span>
                <hr></hr>
        <h6><b className='badge badge-pill bg-danger text-dark'>CREATE YOUR LOGISTICK ACCOUNT</b></h6>
        <h1 className={name.join(" ")}>{props.message}</h1>
            <div className='form-group'>
                <label htmlFor=" " className='badge badge-pill badge-primary bg-success'> { " " }<b>1.</b>Email:</label>
<br></br>
                <input  required className='from-control badge-pill badge- w-100' type="text" autoComplete="off" placeholder='name' name='email'></input>
            </div>
<br></br>
               <div className='form-group'>
                  <label htmlFor=" " className='badge badge-pill badge-primary bg-success' >{ " " } <b>2.</b>Password:</label>
                  <br></br>
                <input required className='from-control badge-pill badge- w-100' id='password' type='password' autoComplete="off" placeholder='Password' name='password'></input>
               </div>
  <br></br>
   <div className='form-group'>
                  <label htmlFor=" " className='badge badge-pill badge-primary bg-success' >{ " " } <b>2.</b>Confirm-Password:</label>
                  <br></br>
                <input required className='from-control badge-pill  badge- w-100' id='ConfirmPassword' type='password' autoComplete="off" placeholder='Confirm-Password' name='confirmpassword'></input>
               </div>
                <br></br>
               <div>
                <button type='submit' className='btn btn-warning text'>Register</button>      
            </div>

        </form>

        <center>
   
             <a href='#' onClick={props.switch} className='bg-black text-white from-control badge-pill badge-secondary'>GO TO LOGIN PAGE</a>
                   <button href='' onClick={props.google} className='btn btn-block btn-twitter from-control badge-pill badge-primary'><i className="fab fa-twitter from-control"></i> SIGNUP VIA GOOGLE</button>
               
        </center>
        
    </div>
    </div>
    </div>
    </div>
    </div>
  
</div>
    )
  }
export default Registration