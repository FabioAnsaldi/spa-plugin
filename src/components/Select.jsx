import React, {useState, useEffect} from 'react'

const Select = ({data}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        if (!window.beePluginInstance || !window.beePluginInstance.start) return;
        $.get(`/${e}.json`)
            .done(function(data) {
                window.beePluginInstance.start(data);
                window.template = window.localStorage.getItem("template") || JSON.stringify({});
                let obj = JSON.parse(window.template);
                obj.name = e;
                setValue(e);
                window.localStorage.setItem("template", JSON.stringify(obj));
            });
    };
    const initSelect = () => {
        setValue(data.value || 'promo');
    };
    useEffect(() => {
        initSelect();
    }, [data]);
    return (
        <>
            <label htmlFor="template">Change Template</label>
            <span>&nbsp;</span>
            <select id="template" value={value} onChange={e => handleChange(e.target.value)}>
                <option value="promo">Promo</option>
                <option value="base-m-bee">Base Bee</option>
                <option value="newsletter">Newsletter</option>
                <option value="one-column">One Column</option>
            </select>
        </>
    );
};

export default Select;
