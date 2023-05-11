import React from 'react'

export default function Loader() {
   setTimeout(Button, 3000);
 function Button()
 {
 document.location.href = 'http://localhost:3000/Navbar';
 }
  return (
    <div>
    <div className='loader'>  <div class="spinner-border"></div></div>

    </div>
  )
}
