import React from "react";
import { Form } from "../../components/Courses/Forms";
import { CourseItem } from "../../components/Courses/CourseItem";
import { Input } from "../../components/Courses/Forms/textInput";
import { courses } from "../../utils/courses";

export const Courses = () => {
    const [isAddCourse,setIsAddCourse]=React.useState(false);
  return (
    <div>
        <h1 className='center'>Course Management</h1>
        <div className='mt-5'>
            <div className='grid'>
                <div>
                    <h5>Visualisation</h5>
                    <Input type="search"
                    name="search"
                    value=""
                    placeholder="Effectuer une recherche"
                    onChange={()=>{}}/>
                    {
                        courses.map((course,index)=>(
                            <CourseItem course={course}/>

                        ))
                    }
                </div>
                <div className='mt-5'>
                    <h5 className='center'>Registration Form</h5>
                    <Form onAddCourse={() => setIsAddCourse(!isAddCourse)}/>
                </div>
            </div>
        </div>
    </div>
  )
}