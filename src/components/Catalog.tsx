import React from 'react'
import { useSelector } from 'react-redux'

const Catalog: React.FC = () => {
    const catalog = useSelector(state => state)

    console.log(catalog)

    return (
        <h1>Catalogo</h1>
    )
}

export default Catalog