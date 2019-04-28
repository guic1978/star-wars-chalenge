import React from "react"

import Aux from '../../hoc/Auxiliar';

const layout = ({ children }) => {

    return (
        <Aux>
            <main>{children}</main>
        </Aux>
    )
}

export default layout