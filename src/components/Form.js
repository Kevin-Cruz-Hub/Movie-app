import {useState, useEffect} from 'react'
function Form(props) {
	// useState
	const [formData, setFormData] = useState({searchterm: ""})

	// HandleChange
	const handleChange = (event) =>{
		setFormData({...formData, [event.target.name]: event.target.value})
	}

	// handleSubmit
	const handleSubmit =(event) =>{
		// prevents page from refreshing on form submission
		event.preventDefault()
		props.movieSearch(formData.searchterm)
	}
  return (
    <div className='mx-8 flex justify-center '>
     <form onSubmit={handleSubmit}>
        <input 
				type='text'
				name='searchterm'
				onChange={handleChange}
				value={formData.searchterm}
				className='cursor-pointer mr-5 border-black'
				/>
        <input type='submit' value='submit'/>
     </form>
    </div>
  )
}
export default Form;