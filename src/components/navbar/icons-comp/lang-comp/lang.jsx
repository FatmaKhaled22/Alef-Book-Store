import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation} from 'react-i18next';


function LangSwitch() {

    const {i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        // document.body.dir = i18n.dir();
        // console.log( i18n.dir());
        if (lng === "en" || lng === "en-US") {
            document.body.setAttribute("dir","ltr");
        } else {
            document.body.setAttribute("dir","rtl");
        }
    };
    ////////////////////////////////////
    /// Close tap 
    const location = useLocation();
    const navigate = useNavigate(); 
    const handelGoBack = () => {
        window.location.reload(true);
        navigate(-1);
    };


  return (
    <>
        <div id="overlay">
            <button className='close d-flex justify-content-end'>
                <i className ="bi bi-x-circle p-3" id ="closeBtn" onClick={handelGoBack}></i>
            </button>
            <div className ='m-5 lang text-center'>
                <div className="d-flex justify-content-center">
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png' width={'60px'} height={'30px'} className='m-3'/>
                    <h1><a onClick={() => {changeLanguage('en'); handelGoBack();}}>English</a></h1>
                </div>
                <div className="d-flex justify-content-center">
                    <img src='https://t4.ftcdn.net/jpg/04/89/76/31/360_F_489763148_dYk2Yh4llD4zZWC8kfhx84rXiA3HJvzO.jpg' width={'60px'} height={'30px'} className='m-3'/>
                    <h1><a onClick={() => {changeLanguage('ar'); handelGoBack();}}>Arabic (العربية) - Egypt </a></h1>
                </div>
            </div>
        </div>

    </>
  );
}

export default LangSwitch;