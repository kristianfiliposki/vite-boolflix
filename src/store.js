import { reactive } from "vue";
export const store = reactive({
    cerca: "",
    films: [],
    series: [],
    flag:[],
    img:"",
    src:"https://image.tmdb.org/t/p/w342",
    availableLanguage: [    
        "ar",
        "ja",
        "cn",
        "de",
        "en",
        "es",
        "th",
        "hu",
        "tr",
        "fi",
        "fr",
        "it",
        "no",
        "pt",
        "ko",
        "sv",
        "nl",
        "ml",
        "pl",
        "ro",
        "be",
        "br",
        "hi",
        "cz",
    ],
    stars:"",


})