const Container = props => {
    const { children, className, ...restprop } = props;
    return (
        <div {...restprop} className={`container ${className ? className : ""}`}>
            {children}
        </div>
    );
};

export default Container;
