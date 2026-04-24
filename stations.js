// 🚇 SB MTA - 终极物理拓扑与路由字典 (V3.5 完整全收录版)

const LINE_MAP = {
    "1": { feed: "1234567", color: "#EE352E", textColor: "white" },
    "2": { feed: "1234567", color: "#EE352E", textColor: "white" },
    "3": { feed: "1234567", color: "#EE352E", textColor: "white" },
    "4": { feed: "1234567", color: "#00933C", textColor: "white" },
    "5": { feed: "1234567", color: "#00933C", textColor: "white" },
    "6": { feed: "1234567", color: "#00933C", textColor: "white" },
    "7": { feed: "1234567", color: "#B933AD", textColor: "white" },
    "A": { feed: "ace", color: "#0039A6", textColor: "white" },
    "C": { feed: "ace", color: "#0039A6", textColor: "white" },
    "E": { feed: "ace", color: "#0039A6", textColor: "white" },
    "B": { feed: "bdfm", color: "#FF6319", textColor: "white" },
    "D": { feed: "bdfm", color: "#FF6319", textColor: "white" },
    "F": { feed: "bdfm", color: "#FF6319", textColor: "white" },
    "M": { feed: "bdfm", color: "#FF6319", textColor: "white" },
    "N": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "Q": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "R": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "W": { feed: "nqrw", color: "#FCCC0A", textColor: "black" },
    "L": { feed: "l", color: "#A7A9AC", textColor: "white" },
    "G": { feed: "g", color: "#6CBE45", textColor: "white" },
    "J": { feed: "jz", color: "#996633", textColor: "white" },
    "Z": { feed: "jz", color: "#996633", textColor: "white" }
};

const STATION_DICT = {
    // 🟨 N线：Astoria -> Broadway -> 4th Ave Exp -> Sea Beach
    "N": [
        { "id": "RQ01", "name": "Astoria-Ditmars Blvd" }, { "id": "RQ02", "name": "Astoria Blvd" }, { "id": "RQ03", "name": "30 Av" }, { "id": "RQ04", "name": "Broadway" }, { "id": "RQ05", "name": "36 Av" }, { "id": "RQ06", "name": "39 Av-Dutch Kills" }, { "id": "RQ07", "name": "Queensboro Plaza" },
        { "id": "R11", "name": "Lexington Av/59 St" }, { "id": "R13", "name": "5 Av/59 St" }, { "id": "R14", "name": "57 St-7 Av" }, { "id": "R15", "name": "49 St" }, { "id": "R16", "name": "Times Sq-42 St" }, { "id": "R17", "name": "34 St-Herald Sq" }, { "id": "R18", "name": "28 St" }, { "id": "R19", "name": "23 St" }, { "id": "R20", "name": "14 St-Union Sq" }, { "id": "R21", "name": "8 St-NYU" }, { "id": "R22", "name": "Prince St" }, { "id": "R23", "name": "Canal St" },
        { "id": "R31", "name": "Atlantic Av-Barclays Ctr" }, { "id": "R36", "name": "36 St" }, { "id": "R41", "name": "59 St" },
        { "id": "N02", "name": "8 Av" }, { "id": "N03", "name": "Fort Hamilton Pkwy" }, { "id": "N04", "name": "New Utrecht Av" }, { "id": "N05", "name": "18 Av" }, { "id": "N06", "name": "20 Av" }, { "id": "N07", "name": "Bay Pkwy" }, { "id": "N08", "name": "Kings Hwy" }, { "id": "N09", "name": "Avenue U" }, { "id": "N10", "name": "86 St" },
        { "id": "D43", "name": "W 8 St-NY Aquarium" }, { "id": "D44", "name": "Coney Island-Stillwell Av" }
    ],

    // 🟨 Q线：2nd Ave -> Broadway Exp -> DeKalb -> Brighton
    "Q": [
        { "id": "Q05", "name": "96 St" }, { "id": "Q04", "name": "86 St" }, { "id": "Q03", "name": "72 St" }, { "id": "B08", "name": "Lexington Av/63 St" },
        { "id": "R14", "name": "57 St-7 Av" }, { "id": "R16", "name": "Times Sq-42 St" }, { "id": "R17", "name": "34 St-Herald Sq" }, { "id": "R20", "name": "14 St-Union Sq" }, { "id": "R23", "name": "Canal St" },
        { "id": "R30", "name": "DeKalb Av" }, { "id": "D24", "name": "Atlantic Av-Barclays Ctr" },
        { "id": "D25", "name": "7 Av" }, { "id": "D26", "name": "Prospect Park" }, { "id": "D27", "name": "Parkside Av" }, { "id": "D28", "name": "Church Av" }, { "id": "D29", "name": "Beverley Rd" }, { "id": "D30", "name": "Cortelyou Rd" }, { "id": "D31", "name": "Newkirk Plaza" }, { "id": "D32", "name": "Avenue H" }, { "id": "D33", "name": "Avenue J" }, { "id": "D34", "name": "Avenue M" }, { "id": "D35", "name": "Kings Hwy" }, { "id": "D37", "name": "Avenue U" }, { "id": "D38", "name": "Neck Rd" }, { "id": "D39", "name": "Sheepshead Bay" }, { "id": "D40", "name": "Brighton Beach" }, { "id": "D42", "name": "Ocean Pkwy" },
        { "id": "D43", "name": "W 8 St-NY Aquarium" }, { "id": "D44", "name": "Coney Island-Stillwell Av" }
    ],

    // 🟨 R线：Queens Blvd Loc -> Broadway Loc -> Whitehall -> 4th Ave Loc
    "R": [
        { "id": "G08", "name": "Forest Hills-71 Av" }, { "id": "G09", "name": "67 Av" }, { "id": "G10", "name": "63 Dr-Rego Park" }, { "id": "G11", "name": "Woodhaven Blvd" }, { "id": "G12", "name": "Grand Av-Newtown" }, { "id": "G13", "name": "Elmhurst Av" }, { "id": "G14", "name": "Jackson Hts-Roosevelt Av" }, { "id": "G15", "name": "65 St" }, { "id": "G16", "name": "Northern Blvd" }, { "id": "G18", "name": "46 St" }, { "id": "G19", "name": "Steinway St" }, { "id": "G20", "name": "36 St" }, { "id": "G21", "name": "Queens Plaza" },
        { "id": "R11", "name": "Lexington Av/59 St" }, { "id": "R13", "name": "5 Av/59 St" }, { "id": "R14", "name": "57 St-7 Av" }, { "id": "R15", "name": "49 St" }, { "id": "R16", "name": "Times Sq-42 St" }, { "id": "R17", "name": "34 St-Herald Sq" }, { "id": "R18", "name": "28 St" }, { "id": "R19", "name": "23 St" }, { "id": "R20", "name": "14 St-Union Sq" }, { "id": "R21", "name": "8 St-NYU" }, { "id": "R22", "name": "Prince St" }, { "id": "R23", "name": "Canal St" }, { "id": "R24", "name": "City Hall" }, { "id": "R25", "name": "Cortlandt St" }, { "id": "R26", "name": "Rector St" }, { "id": "R27", "name": "Whitehall St-South Ferry" },
        { "id": "R28", "name": "Court St" }, { "id": "R29", "name": "Jay St-MetroTech" }, { "id": "R30", "name": "DeKalb Av" }, { "id": "R31", "name": "Atlantic Av-Barclays Ctr" }, { "id": "R32", "name": "Union St" }, { "id": "R33", "name": "9 St" }, { "id": "R34", "name": "Prospect Av" }, { "id": "R35", "name": "25 St" }, { "id": "R36", "name": "36 St" }, { "id": "R39", "name": "45 St" }, { "id": "R40", "name": "53 St" }, { "id": "R41", "name": "59 St" }, { "id": "R42", "name": "Bay Ridge Av" }, { "id": "R43", "name": "77 St" }, { "id": "R44", "name": "86 St" }, { "id": "R45", "name": "Bay Ridge-95 St" }
    ],

    // 🟨 W线：Astoria -> Broadway Loc -> Whitehall
    "W": [
        { "id": "RQ01", "name": "Astoria-Ditmars Blvd" }, { "id": "RQ02", "name": "Astoria Blvd" }, { "id": "RQ03", "name": "30 Av" }, { "id": "RQ04", "name": "Broadway" }, { "id": "RQ05", "name": "36 Av" }, { "id": "RQ06", "name": "39 Av-Dutch Kills" }, { "id": "RQ07", "name": "Queensboro Plaza" },
        { "id": "R11", "name": "Lexington Av/59 St" }, { "id": "R13", "name": "5 Av/59 St" }, { "id": "R14", "name": "57 St-7 Av" }, { "id": "R15", "name": "49 St" }, { "id": "R16", "name": "Times Sq-42 St" }, { "id": "R17", "name": "34 St-Herald Sq" }, { "id": "R18", "name": "28 St" }, { "id": "R19", "name": "23 St" }, { "id": "R20", "name": "14 St-Union Sq" }, { "id": "R21", "name": "8 St-NYU" }, { "id": "R22", "name": "Prince St" }, { "id": "R23", "name": "Canal St" }, { "id": "R24", "name": "City Hall" }, { "id": "R25", "name": "Cortlandt St" }, { "id": "R26", "name": "Rector St" }, { "id": "R27", "name": "Whitehall St-South Ferry" }
    ],

    // 🟧 B线：Concourse -> CPW Loc -> 6th Ave Exp -> Brighton
    "B": [
        { "id": "D03", "name": "Bedford Park Blvd" }, { "id": "D04", "name": "Kingsbridge Rd" }, { "id": "D05", "name": "Fordham Rd" }, { "id": "D06", "name": "182-183 Sts" }, { "id": "D07", "name": "Tremont Av" }, { "id": "D08", "name": "174-175 Sts" }, { "id": "D09", "name": "170 St" }, { "id": "D10", "name": "167 St" }, { "id": "D11", "name": "161 St-Yankee Stadium" }, { "id": "D13", "name": "145 St" },
        { "id": "A15", "name": "135 St" }, { "id": "A16", "name": "125 St" }, { "id": "A17", "name": "116 St" }, { "id": "A18", "name": "Cathedral Pkwy (110 St)" }, { "id": "A19", "name": "103 St" }, { "id": "A20", "name": "96 St" }, { "id": "A21", "name": "86 St" }, { "id": "A22", "name": "81 St-Museum of Natural History" }, { "id": "A23", "name": "72 St" }, { "id": "A24", "name": "59 St-Columbus Circle" },
        { "id": "D15", "name": "7 Av" }, { "id": "D16", "name": "47-50 Sts-Rockefeller Ctr" }, { "id": "D17", "name": "42 St-Bryant Pk" }, { "id": "D18", "name": "34 St-Herald Sq" }, { "id": "D20", "name": "W 4 St-Wash Sq" }, { "id": "D21", "name": "Broadway-Lafayette St" }, { "id": "D22", "name": "Grand St" },
        { "id": "R30", "name": "DeKalb Av" }, { "id": "D24", "name": "Atlantic Av-Barclays Ctr" }, { "id": "D25", "name": "7 Av" }, { "id": "D26", "name": "Prospect Park" }, { "id": "D28", "name": "Church Av" }, { "id": "D31", "name": "Newkirk Plaza" }, { "id": "D35", "name": "Kings Hwy" }, { "id": "D39", "name": "Sheepshead Bay" }, { "id": "D40", "name": "Brighton Beach" }
    ],

    // 🟧 D线：Concourse Exp -> CPW Exp -> West End
    "D": [
        { "id": "D01", "name": "Norwood-205 St" }, { "id": "D03", "name": "Bedford Park Blvd" }, { "id": "D04", "name": "Kingsbridge Rd" }, { "id": "D05", "name": "Fordham Rd" }, { "id": "D07", "name": "Tremont Av" }, { "id": "D11", "name": "161 St-Yankee Stadium" }, { "id": "D13", "name": "145 St" },
        { "id": "A16", "name": "125 St" }, { "id": "A24", "name": "59 St-Columbus Circle" },
        { "id": "D15", "name": "7 Av" }, { "id": "D16", "name": "47-50 Sts-Rockefeller Ctr" }, { "id": "D17", "name": "42 St-Bryant Pk" }, { "id": "D18", "name": "34 St-Herald Sq" }, { "id": "D20", "name": "W 4 St-Wash Sq" }, { "id": "D21", "name": "Broadway-Lafayette St" }, { "id": "D22", "name": "Grand St" },
        { "id": "R31", "name": "Atlantic Av-Barclays Ctr" }, { "id": "R36", "name": "36 St" },
        { "id": "B12", "name": "9 Av" }, { "id": "B13", "name": "Fort Hamilton Pkwy" }, { "id": "B14", "name": "50 St" }, { "id": "B15", "name": "55 St" }, { "id": "B16", "name": "62 St" }, { "id": "B17", "name": "71 St" }, { "id": "B18", "name": "79 St" }, { "id": "B19", "name": "18 Av" }, { "id": "B20", "name": "20 Av" }, { "id": "B21", "name": "Bay Pkwy" }, { "id": "B22", "name": "25 Av" }, { "id": "B23", "name": "Bay 50 St" }, { "id": "D44", "name": "Coney Island-Stillwell Av" }
    ],

    // 🟧 F线：Queens Blvd Exp -> 6th Ave Loc -> Culver
    "F": [
        { "id": "F01", "name": "Jamaica-179 St" }, { "id": "F02", "name": "169 St" }, { "id": "F03", "name": "Parsons Blvd" }, { "id": "F04", "name": "Sutphin Blvd" }, { "id": "F05", "name": "Briarwood" }, { "id": "F06", "name": "Kew Gardens-Union Tpke" }, { "id": "F07", "name": "75 Av" }, { "id": "G08", "name": "Forest Hills-71 Av" }, { "id": "G14", "name": "Jackson Hts-Roosevelt Av" }, { "id": "F09", "name": "21 St-Queensbridge" },
        { "id": "B08", "name": "Lexington Av/63 St" }, { "id": "D16", "name": "47-50 Sts-Rockefeller Ctr" }, { "id": "D17", "name": "42 St-Bryant Pk" }, { "id": "D18", "name": "34 St-Herald Sq" }, { "id": "D19", "name": "23 St" }, { "id": "D20", "name": "W 4 St-Wash Sq" }, { "id": "D21", "name": "Broadway-Lafayette St" }, { "id": "F14", "name": "2 Av" }, { "id": "F15", "name": "Delancey St-Essex St" }, { "id": "F16", "name": "East Broadway" },
        { "id": "F18", "name": "York St" }, { "id": "F20", "name": "Jay St-MetroTech" }, { "id": "F21", "name": "Bergen St" }, { "id": "F22", "name": "Carroll St" }, { "id": "F23", "name": "Smith-9 Sts" }, { "id": "F24", "name": "4 Av-9 St" }, { "id": "F25", "name": "7 Av" }, { "id": "F26", "name": "15 St-Prospect Park" }, { "id": "F27", "name": "Fort Hamilton Pkwy" }, { "id": "F29", "name": "Church Av" }, { "id": "F30", "name": "Ditmas Av" }, { "id": "F31", "name": "18 Av" }, { "id": "F32", "name": "Avenue I" }, { "id": "F33", "name": "Bay Pkwy" }, { "id": "F34", "name": "Avenue N" }, { "id": "F35", "name": "Avenue P" }, { "id": "F36", "name": "Kings Hwy" }, { "id": "F38", "name": "Avenue U" }, { "id": "F39", "name": "Avenue X" }, { "id": "D43", "name": "W 8 St-NY Aquarium" }, { "id": "D44", "name": "Coney Island-Stillwell Av" }
    ],

    // 🟧 M线：Queens Blvd Loc -> 6th Ave Loc -> Williamsburg -> Myrtle
    "M": [
        { "id": "G08", "name": "Forest Hills-71 Av" }, { "id": "G09", "name": "67 Av" }, { "id": "G10", "name": "63 Dr-Rego Park" }, { "id": "G11", "name": "Woodhaven Blvd" }, { "id": "G12", "name": "Grand Av-Newtown" }, { "id": "G13", "name": "Elmhurst Av" }, { "id": "G14", "name": "Jackson Hts-Roosevelt Av" }, { "id": "G15", "name": "65 St" }, { "id": "G16", "name": "Northern Blvd" }, { "id": "G18", "name": "46 St" }, { "id": "G19", "name": "Steinway St" }, { "id": "G20", "name": "36 St" }, { "id": "G21", "name": "Queens Plaza" },
        { "id": "F11", "name": "Lexington Av/53 St" }, { "id": "F12", "name": "5 Av/53 St" }, { "id": "D16", "name": "47-50 Sts-Rockefeller Ctr" }, { "id": "D17", "name": "42 St-Bryant Pk" }, { "id": "D18", "name": "34 St-Herald Sq" }, { "id": "D19", "name": "23 St" }, { "id": "D20", "name": "W 4 St-Wash Sq" }, { "id": "D21", "name": "Broadway-Lafayette St" }, { "id": "F14", "name": "2 Av" }, { "id": "F15", "name": "Delancey St-Essex St" },
        { "id": "M11", "name": "Marcy Av" }, { "id": "M12", "name": "Hewes St" }, { "id": "M13", "name": "Lorimer St" }, { "id": "M14", "name": "Flushing Av" }, { "id": "M16", "name": "Myrtle Av" },
        { "id": "M01", "name": "Middle Village-Metropolitan Av" }, { "id": "M02", "name": "Fresh Pond Rd" }, { "id": "M03", "name": "Forest Av" }, { "id": "M04", "name": "Seneca Av" }, { "id": "M05", "name": "Myrtle-Wyckoff Avs" }, { "id": "M06", "name": "Knickerbocker Av" }, { "id": "M08", "name": "Central Av" }
    ],

    // 🟦 A线：8th Ave Exp -> Fulton Exp -> Rockaways
    "A": [
        { "id": "A02", "name": "Inwood-207 St" }, { "id": "A03", "name": "Dyckman St" }, { "id": "A05", "name": "190 St" }, { "id": "A06", "name": "181 St" }, { "id": "A07", "name": "175 St" }, { "id": "A09", "name": "168 St" }, { "id": "A12", "name": "145 St" }, { "id": "A15", "name": "125 St" }, { "id": "A24", "name": "59 St-Columbus Circle" }, { "id": "A27", "name": "42 St-Port Authority" }, { "id": "A28", "name": "34 St-Penn Station" }, { "id": "A31", "name": "14 St" }, { "id": "A32", "name": "W 4 St-Wash Sq" }, { "id": "A34", "name": "Canal St" }, { "id": "A36", "name": "Chambers St" }, { "id": "A38", "name": "Fulton St" },
        { "id": "A40", "name": "High St" }, { "id": "A41", "name": "Jay St-MetroTech" }, { "id": "A42", "name": "Hoyt-Schermerhorn" }, { "id": "A46", "name": "Nostrand Av" }, { "id": "A51", "name": "Euclid Av" }, { "id": "A55", "name": "Ozone Pk-Lefferts Blvd" }, { "id": "A65", "name": "Far Rockaway-Mott Av" }
    ],

    // 🟦 C线：8th Ave Loc -> Fulton Loc
    "C": [
        { "id": "A09", "name": "168 St-Washington Hts" }, { "id": "A10", "name": "163 St-Amsterdam Av" }, { "id": "A11", "name": "155 St" }, { "id": "A12", "name": "145 St" }, { "id": "A14", "name": "135 St" }, { "id": "A15", "name": "125 St" }, { "id": "A16", "name": "116 St" }, { "id": "A17", "name": "Cathedral Pkwy (110 St)" }, { "id": "A18", "name": "103 St" }, { "id": "A19", "name": "96 St" }, { "id": "A20", "name": "86 St" }, { "id": "A21", "name": "81 St-Museum of Natural History" }, { "id": "A22", "name": "72 St" }, { "id": "A24", "name": "59 St-Columbus Circle" }, { "id": "A25", "name": "50 St" }, { "id": "A27", "name": "42 St-Port Authority" }, { "id": "A28", "name": "34 St-Penn Station" }, { "id": "A30", "name": "23 St" }, { "id": "A31", "name": "14 St" }, { "id": "A32", "name": "W 4 St-Wash Sq" }, { "id": "A33", "name": "Spring St" }, { "id": "A34", "name": "Canal St" }, { "id": "A36", "name": "Chambers St" }, { "id": "A38", "name": "Fulton St" },
        { "id": "A40", "name": "High St" }, { "id": "A41", "name": "Jay St-MetroTech" }, { "id": "A42", "name": "Hoyt-Schermerhorn" }, { "id": "A43", "name": "Lafayette Av" }, { "id": "A44", "name": "Clinton-Washington Avs" }, { "id": "A45", "name": "Franklin Av" }, { "id": "A46", "name": "Nostrand Av" }, { "id": "A47", "name": "Kingston-Throop Avs" }, { "id": "A48", "name": "Utica Av" }, { "id": "A49", "name": "Ralph Av" }, { "id": "A50", "name": "Rockaway Av" }, { "id": "A51", "name": "Euclid Av" }
    ],

    // 🟦 E线：Queens Blvd Exp -> 8th Ave Loc -> WTC
    "E": [
        { "id": "G05", "name": "Jamaica Ctr-Parsons/Archer" }, { "id": "G06", "name": "Sutphin Blvd-Archer Av-JFK" }, { "id": "G07", "name": "Jamaica-Van Wyck" }, { "id": "G08", "name": "Forest Hills-71 Av" }, { "id": "G14", "name": "Jackson Hts-Roosevelt Av" }, { "id": "G21", "name": "Queens Plaza" },
        { "id": "F11", "name": "Lexington Av/53 St" }, { "id": "F12", "name": "5 Av/53 St" }, { "id": "A24", "name": "59 St-Columbus Circle" }, { "id": "A25", "name": "50 St" }, { "id": "A27", "name": "42 St-Port Authority" }, { "id": "A28", "name": "34 St-Penn Station" }, { "id": "A30", "name": "23 St" }, { "id": "A31", "name": "14 St" }, { "id": "A32", "name": "W 4 St-Wash Sq" }, { "id": "A33", "name": "Spring St" }, { "id": "A34", "name": "Canal St" }, { "id": "E01", "name": "World Trade Center" }
    ],

    // 🟩 G线：Brooklyn-Queens Crosstown
    "G": [
        { "id": "G22", "name": "Court Sq" }, { "id": "G24", "name": "21 St" }, { "id": "G26", "name": "Greenpoint Av" }, { "id": "G28", "name": "Nassau Av" }, { "id": "G29", "name": "Metropolitan Av" }, { "id": "G30", "name": "Broadway" }, { "id": "G31", "name": "Flushing Av" }, { "id": "G32", "name": "Myrtle-Willoughby Avs" }, { "id": "G33", "name": "Bedford-Nostrand Avs" }, { "id": "G34", "name": "Classon Av" }, { "id": "G35", "name": "Clinton-Washington Avs" }, { "id": "G36", "name": "Fulton St" },
        { "id": "A42", "name": "Hoyt-Schermerhorn" }, { "id": "F21", "name": "Bergen St" }, { "id": "F22", "name": "Carroll St" }, { "id": "F23", "name": "Smith-9 Sts" }, { "id": "F24", "name": "4 Av-9 St" }, { "id": "F25", "name": "7 Av" }, { "id": "F26", "name": "15 St-Prospect Park" }, { "id": "F27", "name": "Church Av" }
    ],

    // 🟫 J线：Jamaica -> Williamsburg -> Nassau St
    "J": [
        { "id": "G05", "name": "Jamaica Ctr-Parsons/Archer" }, { "id": "G06", "name": "Sutphin Blvd-Archer Av-JFK" }, { "id": "J12", "name": "121 St" }, { "id": "J13", "name": "111 St" }, { "id": "J14", "name": "104 St" }, { "id": "J15", "name": "Woodhaven Blvd" }, { "id": "J16", "name": "85 St-Forest Pkwy" }, { "id": "J17", "name": "75 St-Elderts Ln" }, { "id": "J19", "name": "Cypress Hills" }, { "id": "J20", "name": "Crescent St" }, { "id": "J21", "name": "Norwood Av" }, { "id": "J22", "name": "Cleveland St" }, { "id": "J23", "name": "Van Siclen Av" }, { "id": "J24", "name": "Alabama Av" }, { "id": "J27", "name": "Broadway Junction" }, { "id": "J28", "name": "Chauncey St" }, { "id": "J29", "name": "Halsey St" }, { "id": "J30", "name": "Gates Av" }, { "id": "J31", "name": "Kosciuszko St" },
        { "id": "M11", "name": "Marcy Av" }, { "id": "M12", "name": "Hewes St" }, { "id": "M13", "name": "Lorimer St" }, { "id": "M14", "name": "Flushing Av" }, { "id": "M16", "name": "Myrtle Av" },
        { "id": "M18", "name": "Delancey St-Essex St" }, { "id": "M19", "name": "Bowery" }, { "id": "M20", "name": "Canal St" }, { "id": "M21", "name": "Chambers St" }, { "id": "M22", "name": "Fulton St" }, { "id": "M23", "name": "Broad St" }
    ],

    // 🟫 Z线：Jamaica -> Williamsburg -> Nassau St (Skip-stop)
    "Z": [
        { "id": "G05", "name": "Jamaica Ctr-Parsons/Archer" }, { "id": "G06", "name": "Sutphin Blvd-Archer Av-JFK" }, { "id": "J12", "name": "121 St" }, { "id": "J14", "name": "104 St" }, { "id": "J15", "name": "Woodhaven Blvd" }, { "id": "J17", "name": "75 St-Elderts Ln" }, { "id": "J20", "name": "Crescent St" }, { "id": "J21", "name": "Norwood Av" }, { "id": "J23", "name": "Van Siclen Av" }, { "id": "J27", "name": "Broadway Junction" }, { "id": "J28", "name": "Chauncey St" }, { "id": "J30", "name": "Gates Av" },
        { "id": "M11", "name": "Marcy Av" }, { "id": "M16", "name": "Myrtle Av" }, { "id": "M18", "name": "Delancey St-Essex St" }, { "id": "M19", "name": "Bowery" }, { "id": "M20", "name": "Canal St" }, { "id": "M21", "name": "Chambers St" }, { "id": "M22", "name": "Fulton St" }, { "id": "M23", "name": "Broad St" }
    ],

    // ⚪ L线：14th St-Canarsie
    "L": [
        { "id": "L01", "name": "8 Av" }, { "id": "L02", "name": "6 Av" }, { "id": "L03", "name": "14 St-Union Sq" }, { "id": "L05", "name": "3 Av" }, { "id": "L06", "name": "1 Av" },
        { "id": "L08", "name": "Bedford Av" }, { "id": "L10", "name": "Lorimer St" }, { "id": "L11", "name": "Graham Av" }, { "id": "L12", "name": "Grand St" }, { "id": "L13", "name": "Montrose Av" }, { "id": "L14", "name": "Morgan Av" }, { "id": "L15", "name": "Jefferson St" }, { "id": "L16", "name": "DeKalb Av" }, { "id": "L17", "name": "Myrtle-Wyckoff Avs" }, { "id": "L19", "name": "Halsey St" }, { "id": "L20", "name": "Wilson Av" }, { "id": "L21", "name": "Bushwick Av-Aberdeen St" }, { "id": "L22", "name": "Broadway Junction" }, { "id": "L24", "name": "Atlantic Av" }, { "id": "L25", "name": "Sutter Av" }, { "id": "L26", "name": "Livonia Av" }, { "id": "L27", "name": "New Lots Av" }, { "id": "L28", "name": "East 105 St" }, { "id": "L29", "name": "Canarsie-Rockaway Pkwy" }
    ],

    // 🟥 1线：Broadway-7th Ave Local
    "1": [
        { "id": "101", "name": "Van Cortlandt Park-242 St" }, { "id": "103", "name": "238 St" }, { "id": "104", "name": "231 St" }, { "id": "106", "name": "Marble Hill-225 St" }, { "id": "107", "name": "215 St" }, { "id": "108", "name": "207 St" }, { "id": "109", "name": "Dyckman St" }, { "id": "110", "name": "191 St" }, { "id": "111", "name": "181 St" }, { "id": "112", "name": "168 St-Washington Hts" }, { "id": "113", "name": "157 St" }, { "id": "114", "name": "145 St" }, { "id": "115", "name": "137 St-City College" }, { "id": "116", "name": "125 St" }, { "id": "117", "name": "116 St-Columbia University" }, { "id": "118", "name": "Cathedral Pkwy (110 St)" }, { "id": "119", "name": "103 St" }, { "id": "120", "name": "96 St" }, { "id": "121", "name": "86 St" }, { "id": "122", "name": "79 St" }, { "id": "123", "name": "72 St" }, { "id": "124", "name": "66 St-Lincoln Center" }, { "id": "125", "name": "59 St-Columbus Circle" }, { "id": "126", "name": "50 St" }, { "id": "127", "name": "Times Sq-42 St" }, { "id": "128", "name": "34 St-Penn Station" }, { "id": "129", "name": "28 St" }, { "id": "130", "name": "23 St" }, { "id": "131", "name": "18 St" }, { "id": "132", "name": "14 St" }, { "id": "133", "name": "Christopher St-Sheridan Sq" }, { "id": "134", "name": "Houston St" }, { "id": "135", "name": "Canal St" }, { "id": "136", "name": "Franklin St" }, { "id": "137", "name": "Chambers St" }, { "id": "138", "name": "WTC Cortlandt" }, { "id": "139", "name": "Rector St" }, { "id": "142", "name": "South Ferry" }
    ],

    // 🟥 2线：7th Ave Exp
    "2": [
        { "id": "201", "name": "Wakefield-241 St" }, { "id": "204", "name": "Nereid Av" }, { "id": "205", "name": "233 St" }, { "id": "206", "name": "225 St" }, { "id": "207", "name": "219 St" }, { "id": "208", "name": "Gun Hill Rd" }, { "id": "209", "name": "Burke Av" }, { "id": "210", "name": "Allerton Av" }, { "id": "211", "name": "Pelham Pkwy" }, { "id": "212", "name": "Bronx Park East" }, { "id": "213", "name": "E 180 St" }, { "id": "214", "name": "West Farms Sq-E Tremont Av" }, { "id": "215", "name": "174 St" }, { "id": "216", "name": "Freeman St" }, { "id": "217", "name": "Simpson St" }, { "id": "218", "name": "Intervale Av" }, { "id": "219", "name": "Prospect Av" }, { "id": "220", "name": "Jackson Av" }, { "id": "221", "name": "3 Av-149 St" }, { "id": "222", "name": "149 St-Grand Concourse" }, { "id": "224", "name": "135 St" },
        { "id": "116", "name": "125 St" }, { "id": "120", "name": "96 St" }, { "id": "123", "name": "72 St" }, { "id": "127", "name": "Times Sq-42 St" }, { "id": "128", "name": "34 St-Penn Station" }, { "id": "132", "name": "14 St" }, { "id": "137", "name": "Chambers St" }, { "id": "228", "name": "Park Place" }, { "id": "229", "name": "Fulton St" }, { "id": "230", "name": "Wall St" },
        { "id": "231", "name": "Clark St" }, { "id": "234", "name": "Borough Hall" }, { "id": "235", "name": "Nevins St" }, { "id": "236", "name": "Atlantic Av-Barclays Ctr" }, { "id": "237", "name": "Bergen St" }, { "id": "238", "name": "Grand Army Plaza" }, { "id": "239", "name": "Eastern Pkwy-Brooklyn Museum" }, { "id": "241", "name": "Franklin Av-Medgar Evers College" }, { "id": "242", "name": "President St-Medgar Evers College" }, { "id": "243", "name": "Sterling St" }, { "id": "244", "name": "Winthrop St" }, { "id": "245", "name": "Church Av" }, { "id": "246", "name": "Beverly Rd" }, { "id": "247", "name": "Newkirk Av-Little Haiti" }, { "id": "248", "name": "Flatbush Av-Brooklyn College" }
    ],

    // 🟥 3线：7th Ave Exp
    "3": [
        { "id": "301", "name": "Harlem-148 St" }, { "id": "302", "name": "145 St" }, { "id": "224", "name": "135 St" },
        { "id": "116", "name": "125 St" }, { "id": "120", "name": "96 St" }, { "id": "123", "name": "72 St" }, { "id": "127", "name": "Times Sq-42 St" }, { "id": "128", "name": "34 St-Penn Station" }, { "id": "132", "name": "14 St" }, { "id": "137", "name": "Chambers St" }, { "id": "228", "name": "Park Place" }, { "id": "229", "name": "Fulton St" }, { "id": "230", "name": "Wall St" },
        { "id": "231", "name": "Clark St" }, { "id": "234", "name": "Borough Hall" }, { "id": "235", "name": "Nevins St" }, { "id": "236", "name": "Atlantic Av-Barclays Ctr" }, { "id": "237", "name": "Bergen St" }, { "id": "238", "name": "Grand Army Plaza" }, { "id": "239", "name": "Eastern Pkwy-Brooklyn Museum" }, { "id": "241", "name": "Franklin Av-Medgar Evers College" }, { "id": "248", "name": "Nostrand Av" }, { "id": "249", "name": "Kingston Av" }, { "id": "250", "name": "Crown Hts-Utica Av" }, { "id": "251", "name": "Sutter Av-Rutland Rd" }, { "id": "252", "name": "Saratoga Av" }, { "id": "253", "name": "Rockaway Av" }, { "id": "254", "name": "Junius St" }, { "id": "255", "name": "Pennsylvania Av" }, { "id": "256", "name": "Van Siclen Av" }, { "id": "257", "name": "New Lots Av" }
    ],

    // 🟩 4线：Lexington Ave Exp
    "4": [
        { "id": "401", "name": "Woodlawn" }, { "id": "402", "name": "Mosholu Pkwy" }, { "id": "405", "name": "Bedford Park Blvd-Lehman College" }, { "id": "406", "name": "Kingsbridge Rd" }, { "id": "407", "name": "Fordham Rd" }, { "id": "408", "name": "183 St" }, { "id": "409", "name": "Burnside Av" }, { "id": "410", "name": "176 St" }, { "id": "411", "name": "Mt Eden Av" }, { "id": "412", "name": "170 St" }, { "id": "413", "name": "167 St" }, { "id": "414", "name": "161 St-Yankee Stadium" }, { "id": "415", "name": "149 St-Grand Concourse" }, { "id": "416", "name": "138 St-Grand Concourse" },
        { "id": "621", "name": "125 St" }, { "id": "626", "name": "86 St" }, { "id": "629", "name": "59 St" }, { "id": "631", "name": "Grand Central-42 St" }, { "id": "635", "name": "14 St-Union Sq" }, { "id": "639", "name": "Brooklyn Bridge-City Hall" }, { "id": "418", "name": "Fulton St" }, { "id": "419", "name": "Wall St" }, { "id": "420", "name": "Bowling Green" },
        { "id": "234", "name": "Borough Hall" }, { "id": "235", "name": "Nevins St" }, { "id": "236", "name": "Atlantic Av-Barclays Ctr" }, { "id": "239", "name": "Franklin Av-Medgar Evers College" }, { "id": "241", "name": "Crown Hts-Utica Av" }
    ],

    // 🟩 5线：Lexington Ave Exp
    "5": [
        { "id": "501", "name": "Eastchester-Dyre Av" }, { "id": "502", "name": "Baychester Av" }, { "id": "503", "name": "Gun Hill Rd" }, { "id": "504", "name": "Pelham Pkwy" }, { "id": "505", "name": "Morris Park" }, { "id": "213", "name": "E 180 St" }, { "id": "214", "name": "West Farms Sq-E Tremont Av" }, { "id": "215", "name": "174 St" }, { "id": "216", "name": "Freeman St" }, { "id": "217", "name": "Simpson St" }, { "id": "218", "name": "Intervale Av" }, { "id": "219", "name": "Prospect Av" }, { "id": "220", "name": "Jackson Av" }, { "id": "221", "name": "3 Av-149 St" }, { "id": "222", "name": "149 St-Grand Concourse" }, { "id": "416", "name": "138 St-Grand Concourse" },
        { "id": "621", "name": "125 St" }, { "id": "626", "name": "86 St" }, { "id": "629", "name": "59 St" }, { "id": "631", "name": "Grand Central-42 St" }, { "id": "635", "name": "14 St-Union Sq" }, { "id": "639", "name": "Brooklyn Bridge-City Hall" }, { "id": "418", "name": "Fulton St" }, { "id": "419", "name": "Wall St" }, { "id": "420", "name": "Bowling Green" },
        { "id": "234", "name": "Borough Hall" }, { "id": "235", "name": "Nevins St" }, { "id": "236", "name": "Atlantic Av-Barclays Ctr" }, { "id": "241", "name": "Franklin Av-Medgar Evers College" }, { "id": "248", "name": "Flatbush Av-Brooklyn College" }
    ],

    // 🟩 6线：Lexington Ave Loc
    "6": [
        { "id": "601", "name": "Pelham Bay Park" }, { "id": "602", "name": "Buhre Av" }, { "id": "603", "name": "Middletown Rd" }, { "id": "604", "name": "Westchester Sq-E Tremont Av" }, { "id": "606", "name": "Zerega Av" }, { "id": "607", "name": "Castle Hill Av" }, { "id": "608", "name": "Parkchester" }, { "id": "609", "name": "St Lawrence Av" }, { "id": "610", "name": "Morrison Av-Soundview" }, { "id": "611", "name": "Elder Av" }, { "id": "612", "name": "Whitlock Av" }, { "id": "613", "name": "Hunts Point Av" }, { "id": "614", "name": "Longwood Av" }, { "id": "615", "name": "E 149 St" }, { "id": "616", "name": "E 143 St-St Mary's St" }, { "id": "617", "name": "Cypress Av" }, { "id": "618", "name": "Brook Av" }, { "id": "619", "name": "3 Av-138 St" },
        { "id": "621", "name": "125 St" }, { "id": "622", "name": "116 St" }, { "id": "623", "name": "110 St" }, { "id": "624", "name": "103 St" }, { "id": "625", "name": "96 St" }, { "id": "626", "name": "86 St" }, { "id": "627", "name": "77 St" }, { "id": "628", "name": "68 St-Hunter College" }, { "id": "629", "name": "59 St" }, { "id": "630", "name": "51 St" }, { "id": "631", "name": "Grand Central-42 St" }, { "id": "632", "name": "33 St" }, { "id": "633", "name": "28 St" }, { "id": "634", "name": "23 St" }, { "id": "635", "name": "14 St-Union Sq" }, { "id": "636", "name": "Astor Pl" }, { "id": "637", "name": "Bleecker St" }, { "id": "638", "name": "Spring St" }, { "id": "639", "name": "Canal St" }, { "id": "640", "name": "Brooklyn Bridge-City Hall" }
    ],

    // 🟪 7线：Flushing
    "7": [
        { "id": "701", "name": "Flushing-Main St" }, { "id": "702", "name": "Mets-Willets Point" }, { "id": "705", "name": "111 St" }, { "id": "706", "name": "103 St-Corona Plaza" }, { "id": "707", "name": "Junction Blvd" }, { "id": "708", "name": "90 St-Elmhurst Av" }, { "id": "709", "name": "82 St-Jackson Hts" }, { "id": "710", "name": "74 St-Broadway" }, { "id": "711", "name": "69 St" }, { "id": "712", "name": "61 St-Woodside" }, { "id": "713", "name": "52 St" }, { "id": "714", "name": "46 St-Bliss St" }, { "id": "715", "name": "40 St-Lowery St" }, { "id": "716", "name": "33 St-Rawson St" }, { "id": "718", "name": "Queensboro Plaza" }, { "id": "719", "name": "Court Sq" }, { "id": "720", "name": "Hunters Point Av" }, { "id": "721", "name": "Vernon Blvd-Jackson Av" }, { "id": "723", "name": "Grand Central-42 St" }, { "id": "724", "name": "5 Av" }, { "id": "725", "name": "Times Sq-42 St" }, { "id": "726", "name": "34 St-Hudson Yards" }
    ]
};

// 🚌 五大区巴士线路池 (完整保留)
const BUS_BOROUGHS = {
    "Brooklyn": ["B1","B2","B3","B4","B6","B7","B8","B9","B11","B12","B13","B14","B15","B16","B17","B20","B24","B25","B26","B31","B32","B35","B36","B38","B39","B41","B42","B43","B44","B44-SBS","B45","B46","B46-SBS","B47","B48","B49","B52","B54","B57","B60","B61","B62","B63","B64","B65","B67","B68","B69","B70","B74","B82","B82-SBS","B83","B84","B100","B103"],
    "Manhattan": ["M1","M2","M3","M4","M5","M7","M8","M9","M10","M11","M12","M14A-SBS","M14D-SBS","M15","M15-SBS","M20","M21","M22","M23-SBS","M31","M34-SBS","M34A-SBS","M35","M42","M50","M55","M57","M66","M72","M79-SBS","M86-SBS","M96","M98","M100","M101","M102","M103","M104","M106","M116","M125"],
    "Queens": ["Q1","Q2","Q3","Q4","Q5","Q6","Q7","Q8","Q9","Q10","Q11","Q12","Q13","Q15","Q15A","Q16","Q17","Q18","Q19","Q20A","Q20B","Q21","Q22","Q23","Q24","Q25","Q26","Q27","Q28","Q29","Q30","Q31","Q32","Q33","Q34","Q35","Q36","Q37","Q38","Q39","Q40","Q41","Q42","Q43","Q44-SBS","Q46","Q47","Q48","Q49","Q50","Q52-SBS","Q53-SBS","Q54","Q55","Q56","Q58","Q59","Q60","Q64","Q65","Q66","Q67","Q69","Q70-SBS","Q72","Q76","Q77","Q83","Q84","Q85","Q88","Q100","Q101","Q102","Q103","Q104","Q111","Q112","Q113","Q114"],
    "Bronx": ["Bx1","Bx2","Bx3","Bx4","Bx4A","Bx5","Bx6","Bx6-SBS","Bx7","Bx8","Bx9","Bx10","Bx11","Bx12","Bx12-SBS","Bx13","Bx15","Bx16","Bx17","Bx18","Bx19","Bx21","Bx22","Bx24","Bx26","Bx27","Bx28","Bx29","Bx30","Bx31","Bx32","Bx33","Bx34","Bx35","Bx36","Bx38","Bx39","Bx40","Bx41","Bx41-SBS","Bx42","Bx46"],
    "Staten Island": ["S40","S42","S44","S46","S48","S51","S52","S53","S54","S55","S56","S57","S59","S61","S62","S66","S74","S76","S78","S79-SBS","S81","S84","S86","S89","S90","S93"]
};

let ALL_BUS_ROUTES = [];
for (let b in BUS_BOROUGHS) { ALL_BUS_ROUTES = ALL_BUS_ROUTES.concat(BUS_BOROUGHS[b]); }
