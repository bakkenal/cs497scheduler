import { getCourseTerm } from '../utilities/times.js';
import { Course, TermButton } from './Course';
import { useState } from 'react';

const CourseList = ({ courses }) => {
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course));
    return(
      <>
        <TermSelector term = { term } setTerm = { setTerm }/> 
        <div className= "course-list">
          { termCourses.map(course => 
              <Course key = { course.id } course = { course } 
                selected = { selected } setSelected={ setSelected }
              />)
          }
        </div>
      </>
    
    );
};

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' };

const TermSelector = ({ term, setTerm }) => (
    <div className="btn-group">
      {
        Object.values(terms)
          .map(value => <TermButton key = { value } term = { value } setTerm = { setTerm } checked = { value === term }/>)
      }
    </div>
)

export default CourseList;