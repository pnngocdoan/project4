import React from "react";

const Dog = ({onSubmit}) => { 
    return (
        <div>
            <button type="submit" className="button" onClick={onSubmit}>
                Discover!
            </button>
        </div>
    );
};
export default Dog;