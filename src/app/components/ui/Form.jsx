import FormStyle from "@/styles/form.styled";
const MyForm = props => {
    return <FormStyle {...props}>{props.children}</FormStyle>;
};

export default MyForm;
