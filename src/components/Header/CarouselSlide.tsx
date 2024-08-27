type Props = {}

function CarouselSlide() {
	// todo: reuseable component
	return (
		<div className='bg-[#F5F5F5] pl-[90px]  flex items-center justify-between max-[900px]:bg-white max-[900px]:min-h-[360px] max-[900px]:rounded-[33px] max-[900px]:pl-[10px] max-[900px]:pb-[50px]'>
			<div className='z-50'>
				<div className='text-[#3D3D3D] font-[600] text-[15px] uppercase light-font tracking-[0.2em] pb-[7px] pt-[120px] max-[1320px]:pt-[60px] max-[900px]:pt-[10px] max-[800px]:'>
					Welcome to GreenShop
				</div>

				<div className='text-[70px] uppercase leading-[70px] text-[#3D3D3D] bold-font pb-[5px] max-[1320px]:text-[55px]  max-[900px]:leading-[50px] max-[900px]:text-[35px]'>
					Let's Make a <br className='max-[1080px]:hidden max-[900px]:block' />
					Better <span className='text-[#46A358] bold-font '>PLANET</span>
				</div>

				<div className='text-[#727272] light-font font-[15px] pb-[44px] max-[900px]:pb-[12px]	'>
					<span className='max-[900px]:hidden'>
						We are an online plant shop offering a wide range of cheap and
						trendy plants. <br className='max-[1090px]:hidden' /> Use our plants
						to create an unique Urban Jungle. Order your favorite plants!
					</span>

					<span className='hidden max-[900px]:block max-[900px]:pb-[10px]'>
						We are an online plant <br className='hidden max-[900px]:block' />{' '}
						shop offering <br className='hidden max-[350px]:block' /> a wide
						range{' '}
					</span>
				</div>

				<button className='text-white bg-[#46A358] px-[30px] py-[11px] rounded-[10px] mb-[120px] max-[900px]:mb-[70px] max-[900px]:hidden'>
					SHOP NOW
				</button>

				{/* mobile button */}

				<button className='hidden max-[900px]:flex items-center gap-[2px]'>
					<div className='text-[#46A358] '>SHOP NOW</div>
					<img src='/src/assets/Header/Arrow - Right.svg' alt='' />
				</button>
			</div>

			<div className='pr-[50px] max-[1475px]:pr-[0px] max-[900px]:relative'>
				<img
					className='min-w-[320px] min-h-[320px] max-[900px]:min-w-[380px] max-[900px]:absolute -right-[107px] -bottom-[183px] max-[600px]:-right-[132px] max-[465px]:min-w-[280px] max-[465px]:-right-[100px]'
					src='/src/assets/Header/banner.png'
					alt=''
				/>
			</div>
		</div>
	)
}

export default CarouselSlide
