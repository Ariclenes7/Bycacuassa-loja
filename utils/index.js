/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
export const formatMoney = (value) => "Kz " + Number(value || 0).toFixed(2).replace(".", ",");

export const codigosCorreios = {
    "40010": "Sedex",
    "41106": "PAC"
};

export const ESTADOS = {
    "BGO": "Bengo",
    "BGU": "Benguela",
    "BIE": "Bié",
    "CAB": "Cabinda",
    "CCU": "Cuando-Cubango",
    "CNO": "Cuanza Norte",
    "CUS": "Cuanza Sul",
    "CNN": "Cunene",
    "HUA": "Huambo",
    "HUI": "Huila",
    "LUA": "Luanda",
    "LNO": "Lunda Norte",
    "LSU": "Lunda Sul",
    "MAL": "Malanje",
    "MOX": "Moxico",
    "NAM": "Namibe",
    "UIG": "Uige",
    "ZAI": "Zaire"
};