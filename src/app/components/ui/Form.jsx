"use client";
import FormStyle from "@/styles/form.styled";
const MyForm = props => {
    return (
        <FormStyle onSubmit={e => e.preventDefault()} {...props}>
            {props.children}
        </FormStyle>
    );
};

export default MyForm;
