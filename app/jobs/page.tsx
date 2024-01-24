'use client'

import type { FC } from 'react'
import TitleHeader from '@/components/common/title-header'
import InfoBox from '@/components/common/info-box'

const Jobs: FC = () => {
  return (
    <section>
      <TitleHeader
        title="Join the team"
        subtitle="Help us create awesome mods for the best servers in the world"
      />
      <InfoBox text="No jobs to show" />
    </section>
  )
}

export default Jobs
