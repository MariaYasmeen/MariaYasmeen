// import React from 'react';
import './CaseStudCss.css';

function Typeathon() {

  return (
    <>
 <div className="CaseStudCss "> 
 <div className=" ">
                <div className="item">
                
<img src='/typeathon1.png' className='item-img'/>
                  </div>
                <div className="item" style={{backgroundColor:"black"}}>
                  <div className="heading1">
                    <p  style={{textTransform:"uppercase", fontSize:"27px"}}>
                Developed to provide users with various customizeable modes to practice and evaluate their typing performance in real-time.
                </p>
                  </div>
                </div>
                <div className="item"> <h3>Key Objectives </h3>
                <p>
The primary objective of Typeathon is to offer users a platform where they can:

Improve their typing speed and accuracy.
Track their typing performance with instant feedback.
Choose from different typing modes to match their skill level and goals.
</p>
<p>
The main objective of Typeathon is to help users improve their typing speed and accuracy in a fun and interactive way. The application aims to provide instant feedback and detailed performance metrics to keep users engaged and motivated. Additionally, it allows users to store and review their scores, making it a valuable tool for those looking to improve their typing skills over time.
</p>
<h2>Fundamental Feature</h2>
<p>
The primary objective of Typeathon is to offer users a platform where they can:
 typing performance with instant feedback.
Choose from different typing modes to match their skill level and goals.
</p>
                </div>
                <div  className="item blacktxtitem" >
                  <h3>Key Features </h3>
                <p>
                  
<h2>User Typing Practice Board</h2>
<img src="/board.png" class="img-fluid" alt="Image 7" />

<h2>Multiple Typing Modes</h2>
<li>Variety of Tests: Typeathon offers different typing modes, each designed to challenge users in unique w\]\\ These modes are customizable, allowing users to select the test that best suits their needs.</li>
<img src="/modes.png" class="img-fluid" alt="Image 7" />

<h2>Instant Feedback:</h2>
<img src="/result.png" class="img-fluid" alt="Image 7" />


<h2>Real-Time Results</h2>
<li>: After each test, users receive immediate feedback on their typing speed (words per minute) and accuracy.</li>
<img src="/score.png" alt="Image 7" class="img-fluid"/>

<li>Performance Metrics: The app displays detailed statistics, including the number of errors, correct words, and overall performance, which helps users identify areas for improvement.</li>
Users receive real-time feedback on their typing speed, accuracy, and errors.
Performance metrics are displayed immediately after completing a test.
User-Friendly Interface:

Clean and intuitive design ensuring a seamless user experience.
Responsive layout for compatibility across devices.
Performance Tracking:

Users can track their progress over time.
Historical performance data is accessible for continuous improvement.
</p>
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
        {/* <div class="c-card_image"><img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper. " /></div> */}
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
                <div className="item"  style={{backgroundColor:"#1f140d", color:"black", borderRadius:"10px"}}><h3>Design & Development</h3>
                <p>
Design: The user interface was crafted to be clean and simple, focusing on ease of use and minimizing distractions. The choice of colors and fonts was intentional to enhance readability and user engagement.

Development: The app was developed with a focus on responsiveness and performance. JavaScript was used to handle the typing test logic, while Firebase provided real-time capabilities and hosted the app.
</p> 
                </div>
              

                <div className="item">
                  <h3>Outcomes & Impact</h3>
                  <p>
                  Typeathon successfully achieved its goal of providing a robust platform for improving typing skills. The app's ability to deliver instant feedback and track progress has been well-received by users. The project has also allowed me to refine my skills in web development, particularly in integrating real-time features and creating a responsive design.
                  </p>
                </div>

                <div className="item">
                  <h3>Conclusion</h3>
                  <p>
                  Typeathon is a testament to my capability to design and develop a functional web application. It highlights my skills in creating engaging user experiences and solving real-world problems through technology. This project not only showcases my technical abilities but also my commitment to continuous learning and improvement.
                  </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Typeathon;
