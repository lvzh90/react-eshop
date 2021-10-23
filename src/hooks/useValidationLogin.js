import React, {useRef} from "react";

const useValidationLogin = () => {
    const formRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();

        const formData = new FormData(formRef.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log('Data: ', data);
    }

    return { formRef, handleClick}
}

export default useValidationLogin