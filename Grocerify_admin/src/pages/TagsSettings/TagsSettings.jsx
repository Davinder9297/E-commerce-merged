import React, {useState} from 'react';
import Select from 'react-select';
import "./TagsSettings.css"
function TagsSettings(){

    const options = [
        { value: 'Milk', label: 'Milk' },
        { value: 'Milk', label: 'Milk' },
        { value: 'Milk', label: 'Milk' },
        { value: 'Milk', label: 'Milk' },
      ];
      
     
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [error, setError] = useState("");

    
    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        if (selectedOptions.length > 0) {
            setError(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOptions.length === 0) {
            setError("Please select at least one tag");
            return;
        }
    };
    

    return(
        <div className="tags-settings">

        <form onSubmit={handleSubmit}>
            <p>Select Tags<span className='required'>*</span></p>
            <div className='select-tags'>
                <Select isMulti options={options} value={selectedOptions} 
                onChange={handleChange} placeholder="Select..." className='select-tags-options'
              />
            </div>

            <div className="error-block">
                {error && <div className="error-message">{error}</div>}
                <hr />
            </div>

            <div className='save-btn'>
                <button type='submit'>Save</button>
            </div>
        </form>
     </div>
    )
}
export default TagsSettings;