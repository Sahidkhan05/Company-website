import React, { useEffect } from 'react'
import StandardPlan from '../components/StandardPlan'

const StandardPlanPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0) // page top se start ho
  }, [])

  return (
    <div>
    <StandardPlan/>
    </div>
  )
}

export default StandardPlanPage