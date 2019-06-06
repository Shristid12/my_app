import React,{Component} from 'react';
import './messages.css';
import img from'../dlp.png';
import { Link } from 'react-router-dom';

class Messages extends Component {
 render(){
  return (
     <div class="messages">
       <img class="bdit" src={img}></img>
       <hr class="bdit"></hr>
       <h4 class="bdit">Login</h4>
       <hr class="bdit"></hr>
       <div class="jhg">
          <p class="hg">Already registered ?</p>
          <p class="hg">Not yet registered ?</p>
       </div>
       <div class="jhg">
          <div class="ptg">
            <p>Login for access to all your Global Sources services.</p>
            <p>You must have cookies enabled to login.<Link to='/ht'> Find out how</Link></p>
            <div class="dpt">
            <form class="ptyi">
              <label>E-mail(or Username):</label>
              <input class="dti" type="text"></input>
            </form>
            <form class="ptyi">
              <label>Password:</label>
              <input class="dti" type="text"></input>
            </form>
            <p>Password is case sensitive</p>
            <Link to='/'><input class="uyt" type="submit" value="Login Now"></input></Link>
            </div>
            <p><b>Help:</b><Link>Forgot password?</Link></p>
            <div class="ptf">
              <p>Don't want to login again?</p>
              <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"></input> Remember me</label>
              <p>(do not check this option if you are using a shared computer)</p>
            </div>
          </div>
          <div class="ptg">
             <p>Register with Global Sources to:</p>
             <li>Send inquiries direct to suppliers</li>
             <li>Sign up for Product Alert e-mail updates on new products and suppliers</li>
             <li>Save time by enjoying the convenience of using forms already filled in with your details when contacting suppliers.</li>
             <div class="uytii">
              <Link to='/'><input class="uyt" type="submit" value="Login Now"></input></Link></div>
              <div class="uytii"><Link to='/yt'>Learn More</Link>
             </div>
          </div>
       </div>
     </div>
  );
}
}

export default Messages;
