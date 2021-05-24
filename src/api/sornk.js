import axios from "@/utils/axios";

export function sornk(){
  return axios({
    url: 'sornk.cn',
    method: 'get'
  })
}
