// 宥成民國 500 個預設空白國民護照資料庫
window.passportDB = {};

// 自動生成 100001 到 100500 共 500 個空白帳號
for (let i = 1; i <= 500; i++) {
    let id = (100000 + i).toString();
    
    // 前幾號預設帶入國家核心成員，其餘全數為空白可註冊帳號
    if (id === "100011") {
        window.passportDB[id] = {
            id: id, password: mnpp3886lin, owner: "林宥成 (總統)",
            level: "最高元首 / 國家元帥", clearance: "S級 全境無限制通行與最高修改權",
            themeColor: "#e0a96d", customBio: "宥成民國最高元首專屬頁面。"
        };
    } else if (id === "100002") {
        window.passportDB[id] = {
            id: id, password: id, owner: "盧○○",
            level: "一級國民", clearance: "A級 美濃國中區自由通行",
            themeColor: "#4ea8de", customBio: "核心國民成員。"
        };
    } else {
        // 空白預設帳號，開放國民註冊與客製化
        window.passportDB[id] = {
            id: id,
            password: id, // 帳號密碼預設相同
            owner: "【未註冊空白帳號】",
            level: "待審核新國民",
            clearance: "C級 邊境觀察期通行權",
            themeColor: "#415a77", // 預設主題色
            customBio: "歡迎登入！點擊下方按鈕可自訂你的專屬個人簡介與介面顏色。"
        };
    }
}
