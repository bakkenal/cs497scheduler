import { getCourseTerm } from '../utilities/times.js';
import { Course, TermButton } from './Course';
import { useState } from 'react';
import { signInWithGoogle, signOut, useUserState } from '../utilities/firebase.js';

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

const SignInButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signInWithGoogle()}>
    Sign In
  </button>
);

const SignOuButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signOut()}>
    Sign Out
  </button>
);

const TermSelector = ({term, setTerm}) => {
  const [user] = useUserState();
  return (
    <div className="btn-toolbar justify-content-between">
      <div className="btn-group">
      { 
        Object.values(terms).map(
          value => <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
        )
      }
      </div>
      { user ? <SignOuButton /> : <SignInButton /> }
    </div>
  );
};
export default CourseList;