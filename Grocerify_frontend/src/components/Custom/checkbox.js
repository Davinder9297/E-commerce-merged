import React from 'react'
import "./checkbox.css"

const Checkbox = (value) => {
    return (
        <div class="checkbox-wrapper-33">
            <label class="checkbox">
                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                <span class="checkbox__symbol">
                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 14l8 7L24 7"></path>
                    </svg>
                </span>
                <h5 class="checkbox__textwrapper">{value.value}</h5>
            </label>
        </div>
    )
}

export default Checkbox









