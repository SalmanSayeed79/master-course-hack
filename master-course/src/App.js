import './styles/base.css'
import Video from './components/video'
import Resource from './components/resource'

function App() {
  return (
    <div className="body">
      <div className="header">
        <h2><a href="#home">MasterCourseHack</a></h2>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#videos'>Videos</a></li>
          <li><a href='#resources'>Resources</a></li>
        </ul>
      </div>
      <div className="home" id="home">
        <h2>Video Editing MasterCourse</h2>
        <p>by Jubaer Talukdar</p>
        <div className="home_body">
          <img src={require('./assets/images/home.png').default} alt=""/>
        </div>
      </div>
      <div className="videos" id="videos">
        <h2>Videos</h2>
        <p>Sorted by Week</p>
        {/*Week 0*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 0</h4>
            <Video title="How to install Premiere Pro 2020" url="https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323MXfi7nGWVZ5EwZ2gcBifr71pa4XXGSAEOJxPt6zEowf1vT&playbackInfo=eyJ2aWRlb0lkIjoiNWQwMDYzODhjNzM1NDI2MDgxNzQyNjVkZDZjZWMzN2EifQ=="/>
            
          </div>
        </div>
        {/*Week 1*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 1</h4>
            <Video title="What this course is all about" url="https://youtube.com/embed/jLuqpOXi_H0"/>
            <Video title="Intro to editing" url="https://youtube.com/embed/Ow139LL1BxE"/>
            <Video title="How I got into Filming and Editing" url="https://youtube.com/embed/Vs9dnTImkls"/>
            <Video title="What is important in Editing" url="https://youtube.com/embed/R09JcHEb6MA"/>
            <Video title="Some example concepts and stories" url="https://youtube.com/embed/d_OCkX0ZjD8"/>
          </div>
        </div>
        {/*Week 2*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 2</h4>
            <Video/>
          </div>
        </div>
        {/*Week 3*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 3</h4>
            <Video/>
          </div>
        </div>
        {/*Week 4*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 4</h4>
            <Video/>
          </div>
        </div>
        {/*Week 5*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 5</h4>
            <Video/>
          </div>
        </div>
        {/*Week 6*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 6</h4>
            <Video/>
          </div>
        </div>
        {/*Week 7*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 7</h4>
            <Video/>
          </div>
        </div>
        {/*Week 8*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 8</h4>
            <Video/>
          </div>
        </div>
        {/*Week 9*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 9</h4>
            <Video/>
          </div>
        </div>
        {/*Week 10*/}
        <div className="week_container">
          <div className="title">
            <h4>Week 10</h4>
            <Video/>
          </div>
        </div>

      </div>
      <div className="resources" id="resources">
        <h2>Resources</h2>
        <p>Contains Important Links</p>
        <Resource title="Premiere Pro download Link" url="https://drive.google.com/drive/mobile/folders/1y_c1Gk5HrPwIFVMzOQ2ojd6jtOpwY2id?usp=sharing"/>
      </div>
      <div className="footer">
        <p>All rights reserved - 2021</p>
      </div>
    </div>
  );
}

export default App;
