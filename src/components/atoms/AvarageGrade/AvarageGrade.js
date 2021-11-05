import React from 'react'
import PropTypes from 'prop-types'
import { GradeContainer } from './AvarageGrade.styles';

function AvarageGrade({avarage}) {
    return (
        <GradeContainer avarage={avarage}>
            {avarage}
        </GradeContainer>
    )
}

AvarageGrade.propTypes = {
    avarage: PropTypes.string
}

export default AvarageGrade;

