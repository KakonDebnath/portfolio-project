
const SectionTitle = ({children}) => {
    return (
        <div className="py-20">
            <h2 className="text-center py-5 md:py-10 text-2xl md:text-5xl uppercase bor border-y-4 border-orange-500 w-1/2 mx-auto font-bold italic">{children}</h2>
        </div>
    );
};

export default SectionTitle;