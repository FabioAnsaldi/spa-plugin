import React from 'react'

const handleClick = (e) => {
    if (!window.beePluginInstance || !window.beePluginInstance.start) return;
    window.beePluginInstance.save();
};

const Save = () => (
    <>
        <label htmlFor="save">Save Template</label>
        <span>&nbsp;</span>
        <button id="save" type="button" onClick={handleClick}>Save</button>
    </>
);

export default Save;
