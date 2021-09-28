import { hasConflict, getCourseTerm } from '../utilities/times.js';

export const Course = ({ course, selected, setSelected }) => 
{
  const isSelected = selected.includes(course);
  const isDisabled = !isSelected && hasConflict(course, selected);
  const style = {
    backgroundColor: isDisabled ? 'lightgrey' : isSelected ? 'lightgreen' : 'white'
  };
  return(
    <div className="card m-1 p-2"
    style = { style }
      onClick = { isDisabled ? null : ()=> setSelected(toggle(course, selected)) }>
      <div className="card-body">
        <div className="card-title">{ getCourseTerm(course) } CS { getCourseNumber(course) }</div>
        <div className="card-text">{ course.title }</div>
        <div className="card-text">{ course.meets }</div>
      </div>
    </div>
  );
}

export const TermButton = ({ term, setTerm, checked }) => (
    <>
      <input type = "radio" id = { term } className = "btn-check" autoComplete = "off" 
        checked = { checked } onChange = {() => setTerm(term)} />
  
      <label class = "btn btn-success m-1 p-2" htmlFor = { term }>
      { term }
      </label>
    </>
)
  
const getCourseNumber = course => (
    course.id.slice(1,4)
);
  
const toggle = (x, lst) => (
    lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
);
