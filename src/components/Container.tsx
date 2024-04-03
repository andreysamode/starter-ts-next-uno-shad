const Container:React.FC<{children?: React.ReactNode, className?: string}> = ({children, className}) => {
  return (
    <div className={`max-w-screen-md mx-auto my-10 px-7 ${className}`}>
      {children}
    </div>
  )
}
export default Container;