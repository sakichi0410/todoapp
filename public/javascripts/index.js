// 取得用API実行メソッド
const httpGet = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET", // GET
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 登録用API実行メソッド
const httpPost = async function (url, data) {
  console.log(url);
  console.log(data);
  try {
    const response = await fetch(url, {
      method: "POST", // POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 更新用API実行メソッド
const httpUpdate = async function (url, data) {
  try {
    const response = await fetch(url, {
      method: "PATCH", // PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 削除用API実行メソッド
const httpDelete = async function (url) {
  console.log (url);
  try {
    const response = await fetch(url, {
      method: "DELETE", // DELETE
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

//未処理タスク取得用
const getTasks_yet = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET", // GET
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
}; 

//作業中タスク取得用
const getTasks_now = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET", // GET
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

//締切間近タスク取得用
const getTasks_simekiri = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET", // GET
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};
