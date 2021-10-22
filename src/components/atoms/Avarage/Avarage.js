import React from 'react'
import PropTypes from 'prop-types'

function Avarage({avarage}) {
    return (
        <div>
            {avarage}
        </div>
    )
}

Avarage.propTypes = {
    avarage: PropTypes.string
}

export default Avarage

