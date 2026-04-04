// ==========================================
// 🚇 MTA 地铁线路基础配置
// ==========================================
const LINE_MAP = {
    "A": { feed: "ace", color: "#0039A6" }, "C": { feed: "ace", color: "#0039A6" }, "E": { feed: "ace", color: "#0039A6" },
    "B": { feed: "bdfm", color: "#FF6319" }, "D": { feed: "bdfm", color: "#FF6319" }, "F": { feed: "bdfm", color: "#FF6319" }, "M": { feed: "bdfm", color: "#FF6319" },
    "N": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, "Q": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, "R": { feed: "nqrw", color: "#FCCC0A", textColor: "black" }, "W": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "1": { feed: "1234567", color: "#EE352E" }, "2": { feed: "1234567", color: "#EE352E" }, "3": { feed: "1234567", color: "#EE352E" }, 
    "4": { feed: "1234567", color: "#00933C" }, "5": { feed: "1234567", color: "#00933C" }, "6": { feed: "1234567", color: "#00933C" }, 
    "7": { feed: "1234567", color: "#B933AD" }, "L": { feed: "l", color: "#A7A9AC" }, "G": { feed: "g", color: "#6CBE45" }, "J": { feed: "jz", color: "#996633" }, "Z": { feed: "jz", color: "#996633" }
};

// ==========================================
// 🚌 MTA 巴士地区分类大厅数据
// ==========================================
const BUS_BOROUGHS = {
    "Brooklyn": ["B1", "B4", "B6", "B9", "B15", "B35", "B41", "B44", "B44-SBS", "B46", "B63", "B70", "B82"],
    "Manhattan": ["M1", "M2", "M3", "M4", "M7", "M14A-SBS", "M14D-SBS", "M15", "M15-SBS", "M34-SBS"],
    "Queens": ["Q4", "Q5", "Q44-SBS", "Q53-SBS", "Q58", "Q59", "Q88"],
    "Bronx": ["BX1", "BX2", "BX9", "BX12", "BX12-SBS", "BX41-SBS"],
    "Staten Island": ["S40", "S44", "S46", "S53", "S79-SBS", "S93", "SIM1", "SIM1C"]
};
// 用于搜索框的扁平化全量数据
const ALL_BUS_ROUTES = [].concat(...Object.values(BUS_BOROUGHS));

// ==========================================
// 📍 MTA 地铁物理字典
// ==========================================
const STATION_DICT = {
    "1": [ 
        { id: "120", name: "Times Sq-42 St", borough: "Manhattan" }, 
        { id: "127", name: "34 St-Penn Station", borough: "Manhattan" },
        { id: "132", name: "14 St", borough: "Manhattan" } 
    ],
    "R": [
        { id: "G08", name: "Forest Hills-71 Av", borough: "Queens" }, { id: "G14", name: "Jackson Hts-Roosevelt Av", borough: "Queens" },
        { id: "R11", name: "Lexington Av/59 St", borough: "Manhattan" }, { id: "R16", name: "Times Sq-42 St", borough: "Manhattan" },
        { id: "R17", name: "34 St-Herald Sq", borough: "Manhattan" }, { id: "R20", name: "14 St-Union Sq", borough: "Manhattan" },
        { id: "R23", name: "Canal St", borough: "Manhattan" }, { id: "R31", name: "Atlantic Av-Barclays Ctr", borough: "Brooklyn" },
        { id: "R36", name: "36 St", borough: "Brooklyn" }, { id: "R41", name: "59 St", borough: "Brooklyn" },
        { id: "R45", name: "Bay Ridge-95 St", borough: "Brooklyn" }
    ],
    "A": [ { id: "A09", name: "59 St-Columbus Circle", borough: "Manhattan" }, { id: "A12", name: "W 4 St-Wash Sq", borough: "Manhattan" }, { id: "A24", name: "Fulton St", borough: "Manhattan" } ],
    "7": [ { id: "701", name: "Flushing-Main St", borough: "Queens" }, { id: "712", name: "74 St-Broadway", borough: "Queens" }, { id: "725", name: "Times Sq-42 St", borough: "Manhattan" } ]
};
// 共享字典以测试换乘
STATION_DICT["N"] = STATION_DICT["R"]; STATION_DICT["Q"] = STATION_DICT["R"]; STATION_DICT["W"] = STATION_DICT["R"];
STATION_DICT["C"] = STATION_DICT["A"]; STATION_DICT["E"] = STATION_DICT["A"];
