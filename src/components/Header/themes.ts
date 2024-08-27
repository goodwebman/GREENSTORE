export const theme = {
	"root": {
	  "base": "relative h-full w-full rounded-[0px]",
	  "leftControl": "hidden ",
	  "rightControl": "hidden "
	},
	"indicators": {
	  "active": {
		"off": "bg-white/50 hover:bg-white dark:bg-[#46A358]/30 dark:hover:bg-[#46A358]",
		"on": "bg-white dark:bg-[#46A358]"
	  },
	  "base": "h-3 w-3 rounded-full",
	  "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
	},
	"item": {
	  "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
	  "wrapper": {
		"off": "w-full flex-shrink-0 transform cursor-default snap-center",
		"on": "w-full flex-shrink-0 transform cursor-grab snap-center"
	  }
	},
	"control": {
	  "base": "inline-flex h-8 w-8 items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-[#46A358] dark:group-hover:bg-[#46A358]dark:group-focus:ring-[#46A358] sm:h-10 sm:w-10",
	  "icon": "h-5 w-5 text-white dark:text-[#46A358] sm:h-6 sm:w-6"
	},
	"scrollContainer": {
	  "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
	  "snap": "snap-x"
	}
  }