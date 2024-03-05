import { FeatureList, Button, Badge } from '@/components'

export type CardProps = {
  title: string
  description: string
  price: number
  currency: string
  mostPopular: boolean
  frequency: string
  features: string[]
  cta: string
}
export const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  currency,
  mostPopular,
  frequency,
  features,
  cta,
}) => {
  return (
    <div className='relative rounded-2xl border border-slate-200 bg-white p-8 shadow-lg flex flex-col'>
      <h3 className='text-lg font-semibold leading-5'>{title}</h3>
      <p className='mt-4 text-sm leading-6'>{description}</p>
      {mostPopular && <Badge />}
      <div className='mt-4 rounded-lg bg-slate-50 p-6 -mx-6'>
        <p className='flex items-center text-sm font-semibold text-slate-500'>
          <span>{currency}</span>
          <span className='ml-3 mr-1 text-4xl text-slate-900'>${price}</span>
          <span>{frequency}</span>
        </p>
      </div>
      {/* Features */}
      <FeatureList features={features} />
      {/* Call of action */}
      <Button mostPopular={mostPopular} cta={cta} />
    </div>
  )
}
