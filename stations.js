// ==========================================
// 🚇 MTA 线路基础配置
// ==========================================
const LINE_MAP = {
    "A": { feed: "ace", color: "#0039A6" }, 
    "C": { feed: "ace", color: "#0039A6" }, 
    "E": { feed: "ace", color: "#0039A6" },
    "B": { feed: "bdfm", color: "#FF6319" }, 
    "D": { feed: "bdfm", color: "#FF6319" }, 
    "F": { feed: "bdfm", color: "#FF6319" }, 
    "M": { feed: "bdfm", color: "#FF6319" },
    "N": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, 
    "Q": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, 
    "R": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, 
    "W": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "1": { feed: "1234567", color: "#EE352E" }, 
    "2": { feed: "1234567", color: "#EE352E" }, 
    "3": { feed: "1234567", color: "#EE352E" }, 
    "4": { feed: "1234567", color: "#00933C" }, 
    "5": { feed: "1234567", color: "#00933C" }, 
    "6": { feed: "1234567", color: "#00933C" }, 
    "7": { feed: "1234567", color: "#B933AD" },
    "L": { feed: "l", color: "#A7A9AC" }, 
    "G": { feed: "g", color: "#6CBE45" }, 
    "J": { feed: "jz", color: "#996633" }, 
    "Z": { feed: "jz", color: "#996633" }
};

// ==========================================
// 📍 MTA 车站物理字典
// ==========================================
const STATION_DICT = {
    "1": [ 
        { id: "120", name: "Times Sq-42 St", borough: "Manhattan" }, 
        { id: "127", name: "34 St-Penn Station", borough: "Manhattan" },
        { id: "132", name: "14 St", borough: "Manhattan" } 
    ],
    // 🟨 R 线完整版 (Forest Hills - Bay Ridge)
    "R": [
        { id: "G08", name: "Forest Hills-71 Av", borough: "Queens" },
        { id: "G09", name: "67 Av", borough: "Queens" },
        { id: "G10", name: "63 Dr-Rego Park", borough: "Queens" },
        { id: "G11", name: "Woodhaven Blvd", borough: "Queens" },
        { id: "G12", name: "Grand Av-Newtown", borough: "Queens" },
        { id: "G13", name: "Elmhurst Av", borough: "Queens" },
        { id: "G14", name: "Jackson Hts-Roosevelt Av", borough: "Queens" },
        { id: "G15", name: "65 St", borough: "Queens" },
        { id: "G16", name: "Northern Blvd", borough: "Queens" },
        { id: "G18", name: "46 St", borough: "Queens" },
        { id: "G19", name: "Steinway St", borough: "Queens" },
        { id: "G20", name: "36 St", borough: "Queens" },
        { id: "G21", name: "Queens Plaza", borough: "Queens" },
        { id: "R11", name: "Lexington Av/59 St", borough: "Manhattan" },
        { id: "R13", name: "5 Av/59 St", borough: "Manhattan" },
        { id: "R14", name: "57 St-7 Av", borough: "Manhattan" },
        { id: "R15", name: "49 St", borough: "Manhattan" },
        { id: "R16", name: "Times Sq-42 St", borough: "Manhattan" },
        { id: "R17", name: "34 St-Herald Sq", borough: "Manhattan" },
        { id: "R18", name: "28 St", borough: "Manhattan" },
        { id: "R19", name: "23 St", borough: "Manhattan" },
        { id: "R20", name: "14 St-Union Sq", borough: "Manhattan" },
        { id: "R21", name: "8 St-NYU", borough: "Manhattan" },
        { id: "R22", name: "Prince St", borough: "Manhattan" },
        { id: "R23", name: "Canal St", borough: "Manhattan" },
        { id: "R24", name: "City Hall", borough: "Manhattan" },
        { id: "R25", name: "Cortlandt St", borough: "Manhattan" },
        { id: "R26", name: "Rector St", borough: "Manhattan" },
        { id: "R27", name: "Whitehall St-South Ferry", borough: "Manhattan" },
        { id: "R28", name: "Court St", borough: "Brooklyn" },
        { id: "R29", name: "Jay St-MetroTech", borough: "Brooklyn" },
        { id: "B08", name: "DeKalb Av", borough: "Brooklyn" },
        { id: "R31", name: "Atlantic Av-Barclays Ctr", borough: "Brooklyn" },
        { id: "R32", name: "Union St", borough: "Brooklyn" },
        { id: "R33", name: "9 St", borough: "Brooklyn" },
        { id: "R34", name: "Prospect Av", borough: "Brooklyn" },
        { id: "R35", name: "25 St", borough: "Brooklyn" },
        { id: "R36", name: "36 St", borough: "Brooklyn" },
        { id: "R39", name: "45 St", borough: "Brooklyn" },
        { id: "R40", name: "53 St", borough: "Brooklyn" },
        { id: "R41", name: "59 St", borough: "Brooklyn" },
        { id: "R42", name: "Bay Ridge Av", borough: "Brooklyn" },
        { id: "R43", name: "77 St", borough: "Brooklyn" },
        { id: "R44", name: "86 St", borough: "Brooklyn" },
        { id: "R45", name: "Bay Ridge-95 St", borough: "Brooklyn" }
    ],
    "A": [ 
        { id: "A09", name: "59 St-Columbus Circle", borough: "Manhattan" }, 
        { id: "A12", name: "W 4 St-Wash Sq", borough: "Manhattan" }, 
        { id: "A24", name: "Fulton St", borough: "Manhattan" } 
    ],
    "7": [
        { id: "701", name: "Flushing-Main St", borough: "Queens" },
        { id: "712", name: "74 St-Broadway", borough: "Queens" },
        { id: "725", name: "Times Sq-42 St", borough: "Manhattan" }
    ]
};

// 补充关联逻辑：为了测试换乘面板，让 N/Q/W 暂时借用 R 线的字典数据
STATION_DICT["N"] = STATION_DICT["R"];
STATION_DICT["Q"] = STATION_DICT["R"];
STATION_DICT["W"] = STATION_DICT["R"];
STATION_DICT["C"] = STATION_DICT["A"];
STATION_DICT["E"] = STATION_DICT["A"];
