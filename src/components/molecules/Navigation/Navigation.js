import React from 'react'
import { NavWrapper, StyledLink } from './Navigation.styles'
import { routes } from 'assets/routes/routes'

function Navigation() {
    return (
        <NavWrapper>
            <StyledLink to={routes.studentsList}>Students</StyledLink>
            <StyledLink to={routes.addUser}>Add Student</StyledLink>
        </NavWrapper>
    )
}

export default Navigation

