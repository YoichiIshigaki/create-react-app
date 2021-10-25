import axios from "axios"

export const READ_EVENTS = "READ_EVENTS"
export const CREATE_EVENTS = "CREATE_EVENTS"

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

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
    dispatch({type: CREATE_EVENTS, response})
}