import React from 'react'
import { Input } from './textInput';
import { courses } from '../../../utils/courses';

export const Form = (props) => {
    const { onAddCourse } = props;
    const [course, setCourse] = React.useState({
        cycle: '',
        classe: '',
        matiere: ''
    });
    const { cycle, classe, matiere } = course;

    const handleChange = (e) => {
        setCourse((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSameCourse = () => {
        courses.push(course);
        onAddCourse(course);
        setCourse({ cycle: '', classe: '', matiere: '' });
    }

    return (
        <div>
            <Input type="text"
                name="cycle"
                placeholder="entrer votre cycle"
                value={cycle}
                onChange={handleChange} />
            <Input type="text"
                name="classe"
                placeholder="entrer votre classe"
                value={classe}
                onChange={handleChange} />
            <Input type="text"
                name="matiere"
                placeholder="entrer la matiere"
                value={matiere}
                onChange={handleChange} />
            <div className='mt-5'>
                <button className='btn btn-primary'
                    disabled={matiere.trim().length === 0}
                    onClick={handleSameCourse}>
                    Ajouter
                </button>
            </div>
        </div>
    )
}