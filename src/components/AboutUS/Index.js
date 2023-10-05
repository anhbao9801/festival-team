import SlideShow from '../SlideShow'
import './style.scss'
import React from 'react'
// import { Card, Col, Container, Row } from 'react-bootstrap'
// // import HomePageList from '../../Catology/catology.json'
// import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom'


function AboutUs() {
    // const { id } = useParams();
    //   let items = HomePageList.filter((items) => items.Detail.ED == id);
    //   console.log(items);
    return (
      <div className='wrapper_slideshow'>
        <SlideShow />
        <div>
        <ul className='align_center1 catology'>
          <li>
            <a href='/catology/1' className=' link'>Culture Festival</a>
          </li>
          <li >
            <a href='/catology/2' className=' link'>Region Festival</a>
          </li>
          <li >
            <a href='/catology/5' className=' link'>Some other Festival</a>
          </li>
          <li >
            <a href='/catology/3' className=' link'>Flower Festival</a>
          </li>
          <li >
            <a href='/catology/4' className=' link'>Music and Art Festival</a>
          </li>
          <li >
            <a href='/Catologies/1' className=' link'>ALL Festival</a>
          </li>
        </ul>
        </div>
        <div className='content'>

          <div className='welcome'>
            <h1>Welcome to our festival website</h1>
            <p>
            Festival is an exciting parts of the culture and we would like to introduce the most famous festival around the world which is categorized to different theme and taste for the visitors.
            Furthermore, we also provide online store with various souvernirs for visitors to choose and shopping with us with convinience and reliable.
            </p>
            <p>
            So, join us on this exciting journey as we explore the vibrant world of festivals. Stay tuned for captivating stories, useful tips, and inspiring photographs that will ignite your wanderlust and make you eager to experience the magic of festivals firsthand.
            </p>
          </div>
         
          <ul>
            <li>
              <h1>What Is A Festival?</h1>
              <p>
              Events take place around us all the time, yet there is something different about a festival that transcends everyday experiences and creates a mirror that reflects our own humanity. Similar to love, it is a state that is hard to describe, but we all know it when we feel it.
              </p>
              <p>
              At Everfest, we have created a Fest Test to help guide our mission. We refer to the Fest Test to decide if an event is merely that — or if it is something greater: a festival. These are not absolute criteria that will apply in every case, but rather philosophical qualities that are representative in most, and certainly the best, festivals.
              </p>
            </li>
            <li>
              <h1>The Teamfest Fest Test</h1>
              <ol>
                <li>Festivals have an ethos of discovery and are about having fun.</li>
                <li>Festivals are multi-dimensional, encourage participation, and offer various types of activities and stimuli.</li>
                <li>Festivals can include anyone with the means to attend. They may charge for admission but should not discriminate by race, age, gender, religion, or otherwise be private clubs.</li>
                <li>Festivals physically occur in the real world. They remind us that there is a human social network where we meet old and new friends.</li>
                <li>Festivals should be celebrations worthy of the test of time. They should recur or intend to recur.</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default AboutUs