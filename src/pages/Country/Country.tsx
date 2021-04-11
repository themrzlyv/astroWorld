import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleCountry } from '../../Global/Actions/CountryActions/CountryAction'
import { useRouter } from '../../helpers/useRouter'

const Country = () => {
    const router = useRouter()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleCountry(router.query.id))
    },[router.query])

    return (
        <div>
            
        </div>
    )
}

export default Country
