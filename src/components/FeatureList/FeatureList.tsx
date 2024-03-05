import { List, FeatureItemProps, FeatureItem } from '@/components'

export type FeatureListProps = {
  features: string[]
}
export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className='mt-6 space-y-4 flex-1'>
      <List
        data={features}
        renderItem={({ feature }: FeatureItemProps) => (
          <FeatureItem feature={feature} />
        )}
      />
    </ul>
  )
}
