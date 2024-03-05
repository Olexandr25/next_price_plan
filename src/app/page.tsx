import React from 'react'
import { pricePlans } from './data'
import { List, PriceWrapper, PricePlanBG, CardProps, Card } from "@/components"

export default function Home() {
  return (
    <div className='relative h-dvh'>
      <PricePlanBG />
      <PriceWrapper>
        <List
          data={pricePlans.plans}
          renderItem={(data: CardProps) => <Card {...data} />}
        />
      </PriceWrapper>
    </div>
  )
}

