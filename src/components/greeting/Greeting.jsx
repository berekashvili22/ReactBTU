function Greeting({title, subtitle}) {
    return (
     <div className="greeting-header">
         <h1>{title}</h1>
         <h2 className='text-muted'>{subtitle}</h2>
     </div>
    )
}

export default Greeting