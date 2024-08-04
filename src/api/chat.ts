import http from "@/utils/axios.js";
import {ElNotification} from "element-plus";

// user list 部分
export const apiUserList = (word: string = '', wxids: string[] = [], labels: string[] = []) => {
    return http.post('/api/rs/user_list', {
        'word': word,
        'wxids': wxids,
        'labels': labels
    }).then((res: any) => {
        return res;
    }).catch((err: any) => {
        console.log(err);
        return '';
    })
}

export const apiUserSessionList = () => {
    return http.post('/api/rs/user_session_list', {})
        .then((res: any) => {
            return res;
        })
        .catch((err: any) => {
            console.log(err);
            return [];
        })
}
export const apiMyWxid = () => {
    return http.get('/api/rs/mywxid').then((res: any) => {
        return res.my_wxid;
    }).catch((err: any) => {
        console.log(err);
        return '';
    })
}

// 消息部分

export const apiRealTime = () => {
    return http.post('/api/ls/realtimemsg', {}).then((res: any) => {
        console.log(res);
        // 滚动消息提醒
        ElNotification({
            title: 'Success',
            message: '获取实时消息成功!',
            type: 'success',
        })
        return true;
    }).catch((err: any) => {
        console.log(err);
        ElNotification({
            title: 'Error',
            message: '获取实时消息失败!',
            type: 'error',
        })
        return false;
    })
}

export const apiMsgCount = (wxids: string[]) => {
    return http.post('/api/rs/msg_count', {
        "wxids": wxids
    }).then((res: any) => {
        return res;
    }).catch((err: any) => {
        console.log(err);
        return '';
    })
}
export const apiMsgCountSolo = (wxid: string) => {
    return apiMsgCount([wxid]).then((res: any) => {
        return res[wxid];
    }).catch((err: any) => {
        console.log(err);
        return 0;
    })
}


export const apiMsgs = (wxid: string, start: number, limit: number) => {
    return http.post('/api/rs/msg_list', {
        'start': start,
        'limit': limit,
        'wxid': wxid,
    }).then((res: any) => {
        return res;
    }).catch((err: any) => {
        console.log(err);
        return '';
    })
}