

type TitleProps = {
    title: string
}

const Title = ({title}: TitleProps) => {
  return (
    <div className='font-[700] text-[20px] text-[#3D3D3D] pb-[8px]'>{title}</div>
  )
}

export default Title