import React from 'react'
import "./Footer.css"
function Footer() {
  return (
   <>
      <div className="footer" id='small'>
        <div className="footer-t-mobile">
          <h2>Got a project?</h2>
        </div>
         <div className="footer-t">
         <h1>
        Let's Get To Work
        </h1>
         </div>
       
       <div className="container">
        <div className="row-footer">
            <div className="details">
                <div className="datahexafooter">
                    <img src="https://datahex.in/wp-content/uploads/2023/04/DataNex_Logo1-768x85-1-1.png" alt="" />
                </div>
                <div>
                    <h6>DataHex Digital Solution</h6>
                    <h6>3rd Floor, Hilite Business Park</h6>
                    <h6>Calicut, Kerala</h6>
                    <h6>673001</h6>
                </div>
            </div>
            <div className='mail'>
                <h6>mail@datanex.in</h6>
                <h6>+91 6238 274 734</h6>
            </div>
            <div className="socialmedia">
                <h6>Instagram</h6>
                <h6>Facebook</h6>
                <h6>Linkedin</h6>
                <h6>Twitter</h6>
            </div>
        </div>
       </div>
         <div id='lastcontainer'>
         <div className="footerhr">
            <hr />
          </div>
           <div className="last">
            <p>© DataHex Digital Solution</p>
           </div>
         </div>
      </div>
   </>
  )
}

export default Footer
