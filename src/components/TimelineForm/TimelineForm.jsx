import React from 'react';
import { ReactComponent as WorkIcon } from "../../assets/svg/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/svg/school.svg";
import timelineElements from "../../elements/TimelineElements/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import '../../index.css';


const TimelineForm = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (

    <div className='font-montserrat text-base text-gray-700 justify-center max-w-screen-lg mx-auto p-8 flex flex-col w-full h-full'>
      <h1 className='text-center text-5xl font-bold italic text-white bh mt-16 mb-14 shadow-lg shadow-teal-500'>Mon parcours</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            
            <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="text-white"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          >
         
              <h3 className='text-xl font-bold'>
                {element.title}
              </h3>
              <h5 className='text-lg italic '>
                {element.location}
              </h5>
              <ul className={`pl-4 ${isWorkIcon ? 'list-disc' : ''}`}>
                <li className="my-6">{isWorkIcon ? element.mission : element.descritpion}</li>
                {element.secondMission && <li className="my-6">{isWorkIcon ? element.secondMission : ''}</li>}
                {element.thirdMission && <li className="my-6">{isWorkIcon ? element.thirdMission : ''}</li>}
              </ul>
            </VerticalTimelineElement>
          )
        })
        }
      </VerticalTimeline>
    </div>

  )
}

export default TimelineForm;
