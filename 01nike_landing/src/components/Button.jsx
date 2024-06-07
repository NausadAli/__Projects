const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full bg-coral-red text-white border-coral-red">
     {label}

     <img src={iconURL} alt="Right arrow icon" className="rounded-full ml-2 h-5 w-5" />
     </button>
  )
}

export default Button
