import React, { useEffect } from 'react'
import PremiumPlan from '../components/PremiumPlan'

const PremiumPlanPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0) // page top se start ho
      }, [])

  return (
    <div>
        <PremiumPlan/>
    </div>
  )
}

export default PremiumPlanPage