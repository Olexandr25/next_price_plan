export type ButtonProps = {
  mostPopular: boolean
  cta: string
}
export const Button: React.FC<ButtonProps> = ({ mostPopular, cta }) => {
  return (
    <a
      href='#'
      className={`mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 ${
        mostPopular
          ? 'text-white bg-cyan-500 hover:bg-cyan-600 shadow-md'
          : 'text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
      }`}>
      {cta}
    </a>
  )
}
