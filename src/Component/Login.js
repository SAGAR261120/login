import React from 'react'

function Login(props) {
let name = ['text-center']
if(props.type)
{
name.push("bg-success")
}
else{
    name.push("bg-danger")
}

function load()
{
if(props.message=="log in successfully")
 {

 document.location.href = 'http://localhost:3000/Loader';
 }
 else{
console.log(" ")
 }
}
  return (

    
    <div className='container-fluid'>
    <div className='col-md-5 m-auto'>
    <div className='mt-3'>
    <div className='card text-left'>
    <div className='card-body'>
 
        <form className='grey' onSubmit={props.login}   >
          <span className=' badge-pill badge-primary bg-dark text-white'><b>LOGIN PAGE</b></span>
          <br></br>
          <hr></hr>
           <h1 className={name.join(" ")}>{props.message}</h1>
            <div className='form-group'>
                <label htmlFor=" " className='badge badge-pill badge-primary bg-success'> { " " }<b>1.</b>Email:</label>
  <br></br>
                <input  required className='from-control badge-pill badge- w-100' type="Email" autoComplete="off" placeholder='Email' name='email'></input>
            </div>
<br></br>
               <div className='form-group'>
                  <label htmlFor=" " className='badge badge-pill badge-primary bg-success' >{ " " } <b>2.</b>Password:</label>
                  <br></br>
                <input required className='from-control badge-pill badge- w-100' type="password" autoComplete="off" placeholder='Password' name='password'></input>
               </div>
  <br></br>
               <div>
                <button type='submit' className='btn btn-warning w-auto' onClick={props.redirect}><a onClick={load()}>Login</a></button>

                <br></br>
               </div>

        </form>

        <center className='r'>
                 <a href='#' onClick={props.switch1} className='  from-control badge-pill badge-secondary r'>GO TO REGISTRATION PAGE</a>
        </center>
        
       
        
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Login;