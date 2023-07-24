import {useState} from "react";
import i18n from '../i18n/index';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chooseLanguage = (e: any) => {
        e.preventDefault();
        i18n.changeLanguage(e?.target?.value);
        setSelectedLanguage(e?.target?.value);
    }

    return (
        <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="pl">Polish</option>
            <option value="en">English</option>
        </select>
    );
};

export default LanguageSelector;