import options from '@/components/options'

export function initFormBean (forEdit) {
  const formBean = {
    name: '',
    templateType: 1,
    templateVersion: '',
    sysLowVersion: '',
    remark: ''
  }
  if (forEdit) {
    formBean['templateId'] = null
  }
  return formBean
}

export function getRules () {
  return {
    name: [
      { required: true, message: '请输入模板名称', trigger: 'blur' },
      { max: 32, message: '长度不能超过32个字符', trigger: 'blur' }
    ],
    templateType: [
      { required: true, type: 'number', message: '请选择模板类型', trigger: 'change' }
    ],
    templateVersion: [
      { max: 10, message: '长度不能超过10个字符', trigger: 'blur' },
      { validator: (rule, value, callback) => {
        if (!/^([1-9]\d|[0-9])(\.([1-9]\d|\d)){2}$/.test(value)) {
          callback(new Error('不符合版本号格式'))
        }
        callback()
      },
      trigger: 'blur' }
    ],
    sysLowVersion: [
      { max: 10, message: '长度不能超过10个字符', trigger: 'blur' },
      { validator: (rule, value, callback) => {
        if (!/^([1-9]\d|[0-9])(\.([1-9]\d|\d)){2}$/.test(value)) {
          callback(new Error('不符合版本号格式'))
        }
        callback()
      },
      trigger: 'blur' }
    ],
    remark: [
      { max: 256, message: '长度不能超过256个字符', trigger: 'blur' }
    ]
  }
}

export function initTemplateFileFormBean (forEdit) {
  const formBean = {
    // 文件名
    fileName: '',
    // 文件目录
    fileDir: '',
    // 上下文类型
    contextType: options.contextType[0].value,
    // 是否抽象文件
    abstracted: false,
    // 文件内容
    content: ''
  }
  if (forEdit) {
    formBean['fileId'] = null
  }
  return formBean
}
