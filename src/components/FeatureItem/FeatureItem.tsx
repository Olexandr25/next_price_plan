export type FeatureItemProps = {
  feature: string
}
export const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <li key={feature} className='flex text-sm leading-6 text-slate-700'>
      <svg
        className='shrink-0 fill-cyan-500'
        height='24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'>
        <path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
      </svg>
      <span className='ml-3'>{feature}</span>
    </li>
  )
}

