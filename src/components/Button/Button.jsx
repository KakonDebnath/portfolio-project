const Button = ({children, icon}) => {
    return (
        <button className={`flex items-center gap-3 border-2 border-orange-500 rounded-md  hover:bg-orange-500 transition-all hover:text-white px-10 py-3 text-xl` }> {children} {icon}
        </button>
    );
};
export default Button;