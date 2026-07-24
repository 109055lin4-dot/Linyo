// 宥成民國 國民護照資料庫（核心與已註冊帳號）
window.passportDB = {
    "100011": {
        id: "100011",
        passCode: "109055", // 統一使用字串格式
        owner: "林宥成 (總統)",
        level: "最高元首 / 國家元帥",
        clearance: "S級 全境無限制通行與最高修改權",
        themeColor: "#e0a96d",
        customBio: "宥成民國最高元首專屬頁面。"
    },
    "100002": {
        id: "100002",
        passCode: "100002",
        owner: "盧○○",
        level: "一級國民",
        clearance: "A級 美濃國中區自由通行",
        themeColor: "#4ea8de",
        customBio: "核心國民成員。"
    }
};

/**
 * 輔助函式：註冊或新增新國民護照
 * @param {string} newId - 國民 ID (例如: "100501" 或任意字串)
 * @param {string} newCode - 通關密碼
 * @param {string} ownerName - 國民名字/綽號
 */
function registerPassport(newId, newCode, ownerName) {
    const cleanId = String(newId).trim();
    const cleanCode = String(newCode).trim();
    const cleanName = String(ownerName).trim();

    // 檢查輸入值是否為空白
    if (!cleanId || !cleanCode || !cleanName) {
        console.warn("註冊失敗：帳號、密碼與姓名不能為空白。");
        return false;
    }

    // 檢查帳號是否已經存在
    if (window.passportDB[cleanId]) {
        console.warn("註冊失敗：該護照 ID 已經被使用。");
        return false;
    }

    // 動態新增至資料庫
    window.passportDB[cleanId] = {
        id: cleanId,
        passCode: cleanCode,
        owner: cleanName,
        level: "待審核新國民",
        clearance: "C級 邊境觀察期通行權",
        themeColor: "#415a77",
        customBio: "歡迎登入！點擊下方按鈕可自訂你的專屬個人簡介與介面顏色。"
    };

    console.log(`護照 ${cleanId} 註冊成功！`);
    return true;
}
