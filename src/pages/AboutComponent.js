import React from 'react';
import '../assets/css/about.css';

function AboutComponent() {
    return (
        <section className="about">
            <h1 className="text-center mb-1">About</h1>
            <p class="text-center"> 
                <b class="fw-bold">ScriptSprite Software Pvt. Ltd. </b> is a dynamic and innovative software development company dedicated to delivering cutting-edge solutions that empower businesses to achieve their digital transformation goals. Founded by a team of experienced professionals, we specialize in providing high-quality software development, IT consulting, and custom solutions to organizations across various industries.
            </p>
            <br/>
            <p class="text-center">
            At ScriptSprite, we believe in blending creativity with technology. Our team of skilled developers and engineers work collaboratively 
            to build reliable, scalable, and user-friendly solutions tailored to meet the unique needs of our clients. Whether it's 
            web development, mobile applications, enterprise solutions, or AI-based systems, we are committed to delivering products 
            that drive efficiency and growth.
            </p><br />
            <p class="text-center">
            Our mission is to provide innovative technology solutions that not only meet the current needs of our clients but also 
            anticipate future demands. We are passionate about helping businesses evolve in a rapidly changing digital landscape, 
            ensuring they remain competitive and thrive in their respective markets.
            </p><br />
            <p class="text-center">
            We take pride in building strong, lasting relationships with our clients, based on trust, transparency, and a shared 
            vision of success. At ScriptSprite, excellence is at the core of everything we do, and we continuously strive to exceed 
            our clients' expectations with every project we undertake.
            </p>
            <br /><br /><br /><br />
            
        
            <h1 className="text-center mb-1">Our Services:</h1>

<ul class="list-group">
  <li class="list-group-item">Custom Software Development</li>
  <li class="list-group-item list-group-item-primary">Web and Mobile Application Development</li>
  <li class="list-group-item list-group-item-secondary">Cloud Solutions</li>
  <li class="list-group-item list-group-item-success">IT Consulting</li>
  <li class="list-group-item list-group-item-danger">Enterprise Software Solutions</li>
  <li class="list-group-item list-group-item-warning">AI and Machine Learning Solutions</li>
  <li class="list-group-item list-group-item-info">Software Maintenance and Support</li>
</ul>

<br /><br />




            <br/>

            <h1 className="text-center mb-1 background-color: rgb(10 143 69 / 50%)">Why Choose Us?</h1>
            <p class="text-center">
            <br />Experienced Team: A team of highly skilled professionals with expertise across various technologies and industries.
<br /><br />Client-Centric Approach: We focus on understanding your business objectives to craft solutions that align with your goals.</p>
            <div className="follow text-center">
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/people/Scriptsprite-Software/61561258229944/?mibextid=rS40aB7S9Ucbxw6v">Facebook</a>
                <a href="https://www.youtube.com/@scriptspritesoftware">Youtube</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
            </div>
        </section>
    );
}

export default AboutComponent;
