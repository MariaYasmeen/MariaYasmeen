// import React from 'react';
import './CaseStudCss.css';
import { Link } from 'react-router-dom';


function Typeathon() {

  return (
    <>
 <div className="CaseStudCss "> 
 <div className=" ">



                <div className="item">  
<img src='/typeathon1.png' className='item-img'/>
                  </div>
                <div className="" style={{backgroundColor:"black"}}>
                  <div className="heading1" >
 <div class="" style={{width: "43rem"}}>
  <div class="textcard">
    <h3 style={{ fontSize:"23px"}}>Typeathon is a speed typing web app to enhance user's typing speed effectively.</h3>
    <p class="">This website was designed to improve user's typing speed and accuracy. Where user can track their typing performance with instant feedback, choose from different customizable typing modes to match their skill level and goals.</p>
  </div>
</div>
<div class="" style={{width: "45rem"}}>
  <div class="textcard">
   
    <p class="">Multiple Typing Modes each designed to challenge users in unique. These modes are customizable, allowing users to select the test that best suits their needs.</p>
   
  </div>
</div>
<div class="" style={{width: "15rem"}}>
  <div class="textcard">
  <p style={{fontWeight:"800"}}>Live App 
  <Link to= "https://typeathon.web.app" target="_blank" ><i class="fa-solid fa-link linkicon"></i>
  </Link></p>
    <p >https://typeathon.web.app</p>
    <p style={{fontWeight:"800"}}> Developer</p>
    <p>Maria Yasmeen</p>
  </div>
</div>
                  </div>
                </div>

     <div  className=" blacktxtitem" >
      <div className="typeimage">
     <img src="/type2.png" class="img-fluid" alt="" style={{width:"850px"}} />
     </div>
     <div class="textcard">
    <p style={{fontWeight:"800"}}> Developer</p>
    <p>Maria Yasmeen</p>
  </div>
                </div>

                <div class="blacktxtitem" style={{paddingLeft:"40px"}}>
 <div class="textcard" >
    <p style={{fontWeight:"800"}}> Design & Development</p>
    <p><p style={{fontSize:"20px"}}>
Design: The user interface was crafted to be clean and simple, focusing on ease of use and minimizing distractions. The choice of colors and fonts was intentional to enhance readability and user engagement.

Development: The app was developed with a focus on responsiveness and performance. JavaScript was used to handle the typing test logic, while Firebase provided real-time capabilities and hosted the app.
</p></p>
  </div>
  <div class="textcard" >
    <p style={{fontWeight:"800"}}> Outcomes & Impact</p>
    <p style={{fontSize:"20px"}}>
    Typeathon successfully achieved its goal of providing a robust platform for improving typing skills. The app's ability to deliver instant feedback and track progress has been well-received by users. The project has also allowed me to refine my skills in web development, particularly in integrating real-time features and creating a responsive design.
</p>
  </div>
  </div>


                <div className="item">
                  <h3>Challenges VS Solutions VS Results</h3>
                  <div class="main">
  <ul class="comparecards">
    <li class="c-cards_item">
      <div class="c-card">
        {/* <div class="c-card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. " /></div> */}
        <div class="c-card_content">
          <h2 class="c-card_title" style={{backgroundColor:"gold"}}><i class="fa-solid fa-triangle-exclamation"></i>Challenges</h2>
          <div class="c-card_text">
            <p>I kept writing almost identical code to print different statements in multiple places.</p>
          <p>I found myself writing the same function over and over again in different components.</p>
           <p>Passing data down multiple component levels via props was hard to manage.</p>
           <p> Fetching data quickly without slowing the app was challenging.</p>
         
            <p>Ensuring accurate real-time performance tracking.</p>
          <p>Designing a user-friendly interface for different skill levels.</p>
          <p> As the app expanded, keeping the codebase modular and clean started to become difficult.</p>
             
            </div>
        </div>
      </div>
    </li>

    <li class="c-cards_item">
      <div class="c-card">
        {/* <div class="c-card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. " /></div> */}
        <div class="c-card_content" >
          <h2 class="c-card_title" style={{backgroundColor:"pink"}}><i className="fa-solid fa-lightbulb" title="Solutions" />Solutions</h2>
          <div class="c-card_text">
            <p> I used the map function to loop through an array and generate the statements dynamically.</p>
          <p>I extracted the common function into a separate utility file and imported it wherever needed. 
          </p>
           <p>I implemented the Context API to provide and consume data across component.
           </p>
           <p>I utilized useEffect for data fetching and loading states.</p>
            <p>Implemented efficient algorithms to measure typing speed and accuracy.</p>
            <p>Created various modes with adjustable difficulty. </p>
            <p>I focused on creating smaller, reusable components and functions, ensuring that each piece of code had a single responsibility.</p>
               </div>
        </div>
      </div>
    </li>
    <li class="c-cards_item">
      <div class="c-card">
        <div class="c-card_content" >
          <h2 class="c-card_title" style={{backgroundColor:"lightblue"}}> <i className="fa-solid fa-chart-line" title="Results" />Results</h2>
          <div class="c-card_text">
            <p>This made the code cleaner and more efficient.</p>
          <p style={{marginTop:"2.5em"}}>This reduced redundancy and made the code easier to maintain.</p>
           <p style={{marginTop:"2.4em"}}>It streamlined data flow and made state management much simpler.</p>
           <p>Data was loaded asynchronously and the UI remained responsive.</p>
            <p>As a result Web App got optimized for performance.</p>
            <p>User got exciting customization options to cater. </p>
            <p> This made the app easier to maintain and extend in the future.</p>
               </div>
        </div>
      </div>
    </li>
  
  </ul>
</div>  
 </div>

                <div className="item"><h3>Technologies Used </h3>
                <p>
</p>
<div className="txtscroll">
      <div className="scroll-content">
        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Frontend</h5>
   <li>HTML</li>
   <li>CSS</li>
   <li>JavaScript</li>
    </div>
</div>
        </div>
        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Backend</h5>
   <li>Firebase</li>
   <li>(for real-time user </li>
   <li>data authentication)</li>
    </div>
</div>
        </div>

        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Library</h5>
   <li>React.js</li>
    </div>
</div>
        </div>
        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Concepts</h5>
   <li>Context API</li>
   <li>React Hooks</li>
   <li>React Router</li>
   <li>Prop Drilling</li>
    </div>
</div>
        </div>
        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body" >
    <h5 class="card-title">Deployment</h5>
   <li>Firebase Hosting</li>
    </div>
</div>
        </div>
         <div className="scroll-item">
        <div class="card" style={{width: "19rem"}}>
  <div class="card-body">
    <h5 class="card-title">Tools </h5>
   <li>VS Code</li>
   <li>Bootstrap</li>
   <li>Git</li>
    </div>
</div>
        </div>
        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Frontend</h5>
   <li>HTML</li>
   <li>CSS</li>
   <li>JavaScript</li>
    </div>
</div>
        </div>
       
        <div className="scroll-item">
        <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Backend</h5>
   <li>Firebase</li>
   <li>(for real-time user </li>
   <li>data authentication)</li>
    </div>
</div>
        </div>
      </div>
    </div>
                </div>
  

                <div className="item">
                  <h3>Conclusion</h3>
                  <p>
                  Typeathon is a testament to my capability to design and develop a functional web application. It highlights my skills in creating engaging user experiences and solving real-world problems through technology. This project not only showcases my technical abilities but also my commitment to continuous learning and improvement.
                  </p>
                  <h4 style={{float:"inline-end", marginRight:"10px"}}>Next Project</h4>
                  <Link to="/work/M.Yasmeen"  className="project-link nextproject" >M.Yasmeen</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Typeathon;
