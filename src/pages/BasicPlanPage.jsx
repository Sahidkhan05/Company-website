import React, { useEffect } from 'react'

import BasicPlan from '../components/BasicPlan'


const BasicPlanPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0) // page top se start ho
      }, [])
  return (
    <div>
        
        <BasicPlan/>
        
    </div>
  )
}

export default BasicPlanPage