import React, {useState} from "react";
import "./EditMerchants.css";
import StoreTimeSettings from "./StoreTimeSettings/StoreTimeSettings";
import CommissionSettings from "./CommissionSettings/CommissionSettings";
import TagsSettings from "./TagsSettings/TagsSettings";
import CategorySettings from "./CategorySettings/CategorySettings";
import StoreDetails from "./StoreDetails";

function EditMerchants(){

    // State to manage the active component
    const [activeComponent, setActiveComponent] = useState('StoreDetails');

    const renderComponent = (componentName) => {
        setActiveComponent(componentName);
    };

    return(
        <div className="edit-merchants">

            {/* List of button that render pages */}
            <div className="nav-buttons">
                <button className={activeComponent === 'StoreDetails' ? 'active' : ''} 
                        onClick={() => renderComponent('StoreDetails')}>Store Details</button>
                <button className={activeComponent === 'StoreTimeSettings' ? 'active' : ''} 
                        onClick={() => renderComponent('StoreTimeSettings')}>Store Time Settings</button>
                <button className={activeComponent === 'CommissionSettings' ? 'active' : ''} 
                        onClick={() => renderComponent('CommissionSettings')}>Commission Settings</button>
                <button className={activeComponent === 'TagsSettings' ? 'active' : ''} 
                        onClick={() => renderComponent('TagsSettings')}>Tags Settings</button>
                <button className={activeComponent === 'CategorySettings' ? 'active' : ''} 
                        onClick={() => renderComponent('CategorySettings')}>Category Settings</button>
            </div>

            <div className="component">
            {activeComponent === 'StoreDetails' && <StoreDetails />}
            {activeComponent === 'StoreTimeSettings' && <StoreTimeSettings />}
            {activeComponent === 'CommissionSettings' && <CommissionSettings />}
            {activeComponent === 'TagsSettings' && <TagsSettings />}
            {activeComponent === 'CategorySettings' && <CategorySettings />} 
            
            </div>
      </div>
    )
}

export default EditMerchants;