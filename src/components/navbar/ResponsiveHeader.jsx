import { useEffect ,useState} from "react";
import { useTranslation } from "react-i18next";

function ResponsiveHeader(){
  const { t } = useTranslation();
  const [name, setName] = useState("");
  // const orgName = "Alef Bookstore - New Cairo."
  const orgName = t('home.hero.title');
  
  useEffect(()=>{
    if(name === orgName){
      return ;
    }
    const id = setInterval(()=>{
      setName(name => name.concat(orgName.at(name.length)))
    }, 150)
    
    return ()=> clearInterval(id);
  }, [name, orgName])

  return (
    <h1 style={{fontSize:'7vw'}}  className="text-white sm:text-7xl text-5xl md:text-8xl lg:text-9xl font-bold text-center text-shadow-black text-shadow-lg">
      {name}
    </h1>
  )
}

export default ResponsiveHeader;