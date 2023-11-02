import { Result } from '@/request/Result'
import { get, post, del, put } from '@/request/index'
import type { datasetListRequest } from '@/api/type/dataset'

const prefix = '/dataset'

/**
 * 获取分页数据集
 * @param 参数  {
              "current_page": "string",
              "page_size": "string",
              "search_text": "string",
            }
 */
const getDateset: (param: datasetListRequest) => Promise<Result<any[]>> = (param) => {
  return get(`${prefix}`, param)
}

/**
 * 获取全部数据集
 * @param 参数 search_text
 */
const getAllDateset: (param?: String) => Promise<Result<any[]>> = (param) => {
  return get(`${prefix}`, param && { search_text: param })
}

/**
 * 删除数据集
 * @param 参数 dataset_id
 */
const delDateset: (dataset_id: String) => Promise<Result<boolean>> = (dataset_id) => {
  return del(`${prefix}/${dataset_id}`)
}

/**
 * 创建数据集
 * @param 参数 
 * {
  "name": "string",
  "desc": "string",
  "documents": [
    {
      "name": "string",
      "paragraphs": [
        {
          "content": "string",
          "title": "string",
          "is_active": true,
          "problem_list": [
            {
              "id": "string",
              "content": "string"
            }
          ]
        }
      ]
    }
  ]
}
 */
const postDateset: (data: any) => Promise<Result<any>> = (data) => {
  return post(`${prefix}`, data)
}

/**
 * 分段预览（上传文档）
 * @param 参数  file:file,limit:number,patterns:array,with_filter:boolean
 */
const postSplitDocument: (data: any) => Promise<Result<any>> = (data) => {
  console.log(data)
  return post(`${prefix}/document/split`, data)
}

export default {
  getDateset,
  getAllDateset,
  delDateset,
  postDateset,
  postSplitDocument
}
