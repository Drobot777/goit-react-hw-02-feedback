
import PropTypes from 'prop-types';
import { Feedback } from "./Feedback"
import css from './Section.module.css'
export const Section=({title})=>{
    return(
        <>
        <h1 className={css.title}>{title}</h1>
        <Feedback/>
       </>
    )
}

Section.ropTypes={
    title:PropTypes.string.isRequired
}