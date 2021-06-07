import React from "react";
import '../src/footer.css';

const Footer = () => {
    return (
        <footer>
        <section id="lab_social_icon_footer">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
        <div class="container">
            <div class="text-center center-block">
                <a href="https://www.facebook.com"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
            </div>
        </div>
        <p>ToDoApp @2021</p>
        </section>
        </footer>
      )
  }
  export default Footer;