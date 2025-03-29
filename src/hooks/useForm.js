import { useState } from "react";

export const useForm = (initialValues, onSubmit) => {
    const [values, setvalues] = useState(initialValues);
    const handleChange = e => {
        const { name, value, files } = e.target;
        setvalues(prev => ({ ...prev, [name]: files ? files[0] : value.trim() }));
    };
    return { handleChange, values };
};
