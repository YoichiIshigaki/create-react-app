import axios from "axios"

export const READ_EVENTS = "READ_EVENTS"

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUERYSTRING = "?token=token123"

// action ファイルはピュアなオブジェクトしか返してはいけない。
// したがってactionの中では非同期処理ができない。　 なのでreducersにevents に　redux-thunkをインポートする。　
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // console.log(response)
    
    // 関数の中でdispatchすることができる。
    dispatch({type: READ_EVENTS, response})
}