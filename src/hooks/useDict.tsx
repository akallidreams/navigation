import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const DictContext = createContext<{ [key: string]: any } | {}>({});
const LangContext = createContext<{
  lang: string;
  setLang: (lang: string) => void;
}>({
  lang: "en",
  setLang: () => {},
});

export const DictProvider = (props: {
  children: ReactNode | ReactNode[];
  dicts: { [key: string]: any };
  defaultLang?: string;
}) => {
  const [lang, setLang] = useState(props.defaultLang || "en");

  useEffect(() => {
    getLanguage();
  }),
    [];

  const getLanguage = async () => {
    AsyncStorage.getItem("lang")
      .then((lang) => {
        if (lang) {
          setLang(lang);
        } else {
          AsyncStorage.setItem("lang", props.defaultLang || "english");
          setLang(props.defaultLang || "english");
        }
      })
      .catch((err) => {
        console.log(err, "at Provider > useDict error");
      });
  };

  const setLanguage = (lang: string) => {
    AsyncStorage.setItem("lang", lang);
    setLang(lang);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: setLanguage }}>
      <DictContext.Provider value={props.dicts}>
        {props.children}
      </DictContext.Provider>
    </LangContext.Provider>
  );
};

export const useDict = (moduleName: string) => {
  const dictionary = useContext(DictContext);
  const { lang, setLang } = useContext(LangContext);
  const module = dictionary[moduleName as keyof typeof dictionary];
  if (!module) {
    throw new Error(`Module ${moduleName} not found in dictionary`);
  }

  const dict = module[lang as keyof typeof module];

  return {
    dict: dict as unknown as { [key: string]: any },
    setLang,
    lang,
  };
};
