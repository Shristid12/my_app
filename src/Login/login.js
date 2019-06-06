import React from 'react';
import img from'../dlp.png';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
    <img class="bdit" src={img}></img>
    <hr class="bdit"></hr>
    <main class="pa4 black-80">
        <form class="measure center">
         <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Login for access to all your services</legend>
            <hr></hr>
              <div class="mt3">
                 <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                 <input class="pa2 input-reset ba  hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
             </div>
             <div class="mv3">
                 <label class="db fw6 lh-copy f6" for="password">Password</label>
                 <input class="b pa2 input-reset ba hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                 <p>password is case-sensitive</p>
            </div>
                 <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"></input> Remember me</label>
                 <p>(do not check this option if you are using a shared computer)</p>
         </fieldset>
         <div class="">
             <Link to='/'><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Login Now"></input></Link>
             <a href="#0" class="f6 link dim black db">Forgot your password?</a>
         </div>
        <div class="lh-copy mt3">
          <p>Not yet registered?</p>
           <Link class="f6 link dim black db" to={`/register`}>Register Now</Link>
        </div>
       </form>
    </main>
    <div class="jht">
       <p>
       Copyright © 2016 Media Data Systems Pte Ltd (Singapore Co. Reg. No. 199001601W). All rights reserved.Terms of Use Privacy Policy Security Measures IP Policy hklogin3.globalsources.com
       </p>
    </div>
    </div>
  );
}

export default Login;
