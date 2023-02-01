import React from 'react'
import { Link } from 'react-router-dom'
import { useDesignsContext } from '../contexts/designs_context.js'
import { mediaUrl } from '../asset/urls.js'

export default function Logo() {
    const { designsData } = useDesignsContext()

    const url = mediaUrl(designsData.logo?.image.data.attributes.url)


    return (
        <Link to='/'>
            <img src={url} alt={designsData.logo?.name} />
        </Link>
    )
}
