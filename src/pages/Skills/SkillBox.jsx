import { ProgressBar } from '@syncfusion/ej2-react-progressbar';
import { FaHtml5 } from 'react-icons/fa';

const SkillBox = ({ textColor, size, percentage, Label}) => {
    return (
        <div className="shadow-xl p-5 rounded-lg">
            <ProgressBar width="230" trackWidth="20" percentage={percentage} />
            <div className="flex justify-center">
                <FaHtml5 size={size} className={textColor} />
            </div>
            <h2 className="text-center font-bold text-2xl">{Label}</h2>
        </div>
    );
};

export default SkillBox;