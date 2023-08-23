import {useState} from "react";
import i18n from '../i18n/index';

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    }

    return (
        <div className="lang-wrap">
            {selectedLanguage === "pl" ? <div className="button-normal" onClick={() => chooseLanguage("pl")}>pl</div> : <div className="button-inverted" onClick={() => chooseLanguage("pl")}>pl</div>}
            {selectedLanguage === "en" ? <div className="button-normal" onClick={() => chooseLanguage("en")}>en</div> : <div className="button-inverted" onClick={() => chooseLanguage("en")}>en</div>}
        </div>
    );
};

export default LanguageSelector;