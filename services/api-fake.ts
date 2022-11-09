export async function fake_getAllCountries(){
    return new Promise(res => {
        setTimeout(()=>{
            res(FAKE_ALL)
        }, 50)
    })
}
export async function fake_getCountryByCode(){
    return new Promise(res => {
        setTimeout(()=>{
            res(FAKE_ONE)
        }, 50)
    })
}
const FAKE_ONE = {
    "name": "Tanzania, United Republic of",
    "topLevelDomain": [
        ".tz"
    ],
    "alpha2Code": "TZ",
    "alpha3Code": "TZA",
    "callingCodes": [
        "255"
    ],
    "capital": "Dodoma",
    "altSpellings": [
        "TZ",
        "United Republic of Tanzania",
        "Jamhuri ya Muungano wa Tanzania"
    ],
    "subregion": "Eastern Africa",
    "region": "Africa",
    "population": 59734213,
    "latlng": [
        -6.0,
        35.0
    ],
    "demonym": "Tanzanian",
    "area": 945087.0,
    "gini": 40.5,
    "timezones": [
        "UTC+03:00"
    ],
    "borders": [
        "BDI",
        "COD",
        "KEN",
        "MWI",
        "MOZ",
        "RWA",
        "UGA",
        "ZMB"
    ],
    "nativeName": "Tanzania",
    "numericCode": "834",
    "flags": {
        "svg": "https://flagcdn.com/tz.svg",
        "png": "https://flagcdn.com/w320/tz.png"
    },
    "currencies": [
        {
            "code": "TZS",
            "name": "Tanzanian shilling",
            "symbol": "Sh"
        }
    ],
    "languages": [
        {
            "iso639_1": "sw",
            "iso639_2": "swa",
            "name": "Swahili",
            "nativeName": "Kiswahili"
        },
        {
            "iso639_1": "en",
            "iso639_2": "eng",
            "name": "English",
            "nativeName": "English"
        }
    ],
    "translations": {
        "br": "Tanzania",
        "pt": "Tanzânia",
        "nl": "Tanzania",
        "hr": "Tanzanija",
        "fa": "تانزانیا",
        "de": "Tansania",
        "es": "Tanzania",
        "fr": "Tanzanie",
        "ja": "タンザニア",
        "it": "Tanzania",
        "hu": "Tanzánia"
    },
    "flag": "https://flagcdn.com/tz.svg",
    "regionalBlocs": [
        {
            "acronym": "AU",
            "name": "African Union",
            "otherNames": [
                "الاتحاد الأفريقي",
                "Union africaine",
                "União Africana",
                "Unión Africana",
                "Umoja wa Afrika"
            ]
        }
    ],
    "cioc": "TAN",
    "independent": true
}
const FAKE_ALL = [
    {
        "name": "United States Minor Outlying Islands",
        "topLevelDomain": [
            ".us"
        ],
        "alpha2Code": "UM",
        "alpha3Code": "UMI",
        "callingCodes": [
            "246"
        ],
        "altSpellings": [
            "UM"
        ],
        "subregion": "Northern America",
        "region": "Americas",
        "population": 300,
        "demonym": "American",
        "timezones": [
            "UTC-11:00",
            "UTC-10:00",
            "UTC+12:00"
        ],
        "nativeName": "United States Minor Outlying Islands",
        "numericCode": "581",
        "flags": {
            "svg": "https://flagcdn.com/um.svg",
            "png": "https://flagcdn.com/w320/um.png"
        },
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Inizi Minor A-bell Stadoù-Unanet",
            "pt": "Ilhas Menores Distantes dos Estados Unidos",
            "nl": "Kleine afgelegen eilanden van de Verenigde Staten",
            "hr": "Mali udaljeni otoci SAD-a",
            "fa": "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا",
            "de": "Kleinere Inselbesitzungen der Vereinigten Staaten",
            "es": "Islas Ultramarinas Menores de Estados Unidos",
            "fr": "Îles mineures éloignées des États-Unis",
            "ja": "合衆国領有小離島",
            "it": "Isole minori esterne degli Stati Uniti d'America",
            "hu": "Amerikai Egyesült Államok lakatlan külbirtokai"
        },
        "flag": "https://flagcdn.com/um.svg",
        "independent": false
    },
    {
        "name": "Tanzania, United Republic of",
        "topLevelDomain": [
            ".tz"
        ],
        "alpha2Code": "TZ",
        "alpha3Code": "TZA",
        "callingCodes": [
            "255"
        ],
        "capital": "Dodoma",
        "altSpellings": [
            "TZ",
            "United Republic of Tanzania",
            "Jamhuri ya Muungano wa Tanzania"
        ],
        "subregion": "Eastern Africa",
        "region": "Africa",
        "population": 59734213,
        "latlng": [
            -6.0,
            35.0
        ],
        "demonym": "Tanzanian",
        "area": 945087.0,
        "gini": 40.5,
        "timezones": [
            "UTC+03:00"
        ],
        "borders": [
            "BDI",
            "COD",
            "KEN",
            "MWI",
            "MOZ",
            "RWA",
            "UGA",
            "ZMB"
        ],
        "nativeName": "Tanzania",
        "numericCode": "834",
        "flags": {
            "svg": "https://flagcdn.com/tz.svg",
            "png": "https://flagcdn.com/w320/tz.png"
        },
        "currencies": [
            {
                "code": "TZS",
                "name": "Tanzanian shilling",
                "symbol": "Sh"
            }
        ],
        "languages": [
            {
                "iso639_1": "sw",
                "iso639_2": "swa",
                "name": "Swahili",
                "nativeName": "Kiswahili"
            },
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Tanzania",
            "pt": "Tanzânia",
            "nl": "Tanzania",
            "hr": "Tanzanija",
            "fa": "تانزانیا",
            "de": "Tansania",
            "es": "Tanzania",
            "fr": "Tanzanie",
            "ja": "タンザニア",
            "it": "Tanzania",
            "hu": "Tanzánia"
        },
        "flag": "https://flagcdn.com/tz.svg",
        "regionalBlocs": [
            {
                "acronym": "AU",
                "name": "African Union",
                "otherNames": [
                    "الاتحاد الأفريقي",
                    "Union africaine",
                    "União Africana",
                    "Unión Africana",
                    "Umoja wa Afrika"
                ]
            }
        ],
        "cioc": "TAN",
        "independent": true
    },
    {
        "name": "United Arab Emirates",
        "topLevelDomain": [
            ".ae"
        ],
        "alpha2Code": "AE",
        "alpha3Code": "ARE",
        "callingCodes": [
            "971"
        ],
        "capital": "Abu Dhabi",
        "altSpellings": [
            "AE",
            "UAE"
        ],
        "subregion": "Western Asia",
        "region": "Asia",
        "population": 9890400,
        "latlng": [
            24.0,
            54.0
        ],
        "demonym": "Emirati",
        "area": 83600.0,
        "gini": 26.0,
        "timezones": [
            "UTC+04:00"
        ],
        "borders": [
            "OMN",
            "SAU"
        ],
        "nativeName": "دولة الإمارات العربية المتحدة",
        "numericCode": "784",
        "flags": {
            "svg": "https://flagcdn.com/ae.svg",
            "png": "https://flagcdn.com/w320/ae.png"
        },
        "currencies": [
            {
                "code": "AED",
                "name": "United Arab Emirates dirham",
                "symbol": "د.إ"
            }
        ],
        "languages": [
            {
                "iso639_1": "ar",
                "iso639_2": "ara",
                "name": "Arabic",
                "nativeName": "العربية"
            }
        ],
        "translations": {
            "br": "Emirelezhioù Arab Unanet",
            "pt": "Emirados árabes Unidos",
            "nl": "Verenigde Arabische Emiraten",
            "hr": "Ujedinjeni Arapski Emirati",
            "fa": "امارات متحده عربی",
            "de": "Vereinigte Arabische Emirate",
            "es": "Emiratos Árabes Unidos",
            "fr": "Émirats arabes unis",
            "ja": "アラブ首長国連邦",
            "it": "Emirati Arabi Uniti",
            "hu": "Egyesült Arab Emírségek"
        },
        "flag": "https://flagcdn.com/ae.svg",
        "regionalBlocs": [
            {
                "acronym": "AL",
                "name": "Arab League",
                "otherNames": [
                    "جامعة الدول العربية",
                    "Jāmiʻat ad-Duwal al-ʻArabīyah",
                    "League of Arab States"
                ]
            }
        ],
        "cioc": "UAE",
        "independent": true
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland",
        "topLevelDomain": [
            ".uk"
        ],
        "alpha2Code": "GB",
        "alpha3Code": "GBR",
        "callingCodes": [
            "44"
        ],
        "capital": "London",
        "altSpellings": [
            "GB",
            "UK",
            "Great Britain"
        ],
        "subregion": "Northern Europe",
        "region": "Europe",
        "population": 67215293,
        "latlng": [
            54.0,
            -2.0
        ],
        "demonym": "British",
        "area": 242900.0,
        "gini": 35.1,
        "timezones": [
            "UTC-08:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:00",
            "UTC-02:00",
            "UTC",
            "UTC+01:00",
            "UTC+02:00",
            "UTC+06:00"
        ],
        "borders": [
            "IRL"
        ],
        "nativeName": "United Kingdom",
        "numericCode": "826",
        "flags": {
            "svg": "https://flagcdn.com/gb.svg",
            "png": "https://flagcdn.com/w320/gb.png"
        },
        "currencies": [
            {
                "code": "GBP",
                "name": "British pound",
                "symbol": "£"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Rouantelezh-Unanet",
            "pt": "Reino Unido",
            "nl": "Verenigd Koninkrijk",
            "hr": "Ujedinjeno Kraljevstvo",
            "fa": "بریتانیای کبیر و ایرلند شمالی",
            "de": "Vereinigtes Königreich",
            "es": "Reino Unido",
            "fr": "Royaume-Uni",
            "ja": "イギリス",
            "it": "Regno Unito",
            "hu": "Nagy-Britannia"
        },
        "flag": "https://flagcdn.com/gb.svg",
        "cioc": "GBR",
        "independent": true
    },
    {
        "name": "United States of America",
        "topLevelDomain": [
            ".us"
        ],
        "alpha2Code": "US",
        "alpha3Code": "USA",
        "callingCodes": [
            "1"
        ],
        "capital": "Washington, D.C.",
        "altSpellings": [
            "US",
            "USA",
            "United States of America"
        ],
        "subregion": "Northern America",
        "region": "Americas",
        "population": 329484123,
        "latlng": [
            38.0,
            -97.0
        ],
        "demonym": "American",
        "area": 9629091.0,
        "gini": 41.4,
        "timezones": [
            "UTC-12:00",
            "UTC-11:00",
            "UTC-10:00",
            "UTC-09:00",
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC+10:00",
            "UTC+12:00"
        ],
        "borders": [
            "CAN",
            "MEX"
        ],
        "nativeName": "United States",
        "numericCode": "840",
        "flags": {
            "svg": "https://flagcdn.com/us.svg",
            "png": "https://flagcdn.com/w320/us.png"
        },
        "currencies": [
            {
                "code": "USD",
                "name": "United States dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            }
        ],
        "translations": {
            "br": "Stadoù-Unanet",
            "pt": "Estados Unidos",
            "nl": "Verenigde Staten",
            "hr": "Sjedinjene Američke Države",
            "fa": "ایالات متحده آمریکا",
            "de": "Vereinigte Staaten von Amerika",
            "es": "Estados Unidos",
            "fr": "États-Unis",
            "ja": "アメリカ合衆国",
            "it": "Stati Uniti D'America",
            "hu": "Amerikai Egyesült Államok"
        },
        "flag": "https://flagcdn.com/us.svg",
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "cioc": "USA",
        "independent": true
    },
    {
        "name": "Mexico",
        "topLevelDomain": [
            ".mx"
        ],
        "alpha2Code": "MX",
        "alpha3Code": "MEX",
        "callingCodes": [
            "52"
        ],
        "capital": "Mexico City",
        "altSpellings": [
            "MX",
            "Mexicanos",
            "United Mexican States",
            "Estados Unidos Mexicanos"
        ],
        "subregion": "North America",
        "region": "Americas",
        "population": 128932753,
        "latlng": [
            23.0,
            -102.0
        ],
        "demonym": "Mexican",
        "area": 1964375.0,
        "gini": 45.4,
        "timezones": [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00"
        ],
        "borders": [
            "BLZ",
            "GTM",
            "USA"
        ],
        "nativeName": "México",
        "numericCode": "484",
        "flags": {
            "svg": "https://flagcdn.com/mx.svg",
            "png": "https://flagcdn.com/w320/mx.png"
        },
        "currencies": [
            {
                "code": "MXN",
                "name": "Mexican peso",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "es",
                "iso639_2": "spa",
                "name": "Spanish",
                "nativeName": "Español"
            }
        ],
        "translations": {
            "br": "Mec'hiko",
            "pt": "México",
            "nl": "Mexico",
            "hr": "Meksiko",
            "fa": "مکزیک",
            "de": "Mexiko",
            "es": "México",
            "fr": "Mexique",
            "ja": "メキシコ",
            "it": "Messico",
            "hu": "Mexikó"
        },
        "flag": "https://flagcdn.com/mx.svg",
        "regionalBlocs": [
            {
                "acronym": "PA",
                "name": "Pacific Alliance",
                "otherNames": [
                    "Alianza del Pacífico"
                ]
            },
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "cioc": "MEX",
        "independent": true
    }
]

