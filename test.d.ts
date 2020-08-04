/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface definitions {
  HpImage: {
    deep?: boolean;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 图片介绍
     */
    imageContent?: string;
    /**
     * 图片路径
     */
    imageImg?: string;
    /**
     * 图片名称
     */
    imageName?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 展示模块
     */
    showModule?: string;
  };
  "Page«RaceActivityInfo»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["RaceActivityInfo"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "公共REST返回Body对象«Page«RaceActivity»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«RaceActivity»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  CompanyAftermarket: {
    /**
     * 介绍
     */
    aftermarketContent?: string;
    /**
     * 图片
     */
    aftermarketImg?: string;
    /**
     * 标题
     */
    aftermarketTitle?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«HpProductType»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProductType"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpNews»": {
    /**
     * 响应实体
     */
    data?: definitions["HpNews"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  GetNewsResponse: {
    /**
     * 新闻列表
     */
    newsList?: definitions["HpNews"][];
    /**
     * 类别
     */
    newsType?: string;
  };
  "公共REST返回Body对象«List«CompanyAftermarket»»": {
    /**
     * 响应实体
     */
    data?: definitions["CompanyAftermarket"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  BPhotoInfo: {
    /**
     * 账号
     */
    code?: string;
    /**
     * 图片相对地址
     */
    url?: string;
  };
  QueryListResponse: {
    /**
     * 类别名称
     */
    activityCategory?: string;
    /**
     * 活动信息
     */
    activityList?: definitions["RaceActivity"][];
  };
  "公共REST返回Body对象«List«RaceActivityInfo»»": {
    /**
     * 响应实体
     */
    data?: definitions["RaceActivityInfo"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«TypicalCustomer»»": {
    /**
     * 响应实体
     */
    data?: definitions["TypicalCustomer"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«IurSchool»": {
    /**
     * 响应实体
     */
    data?: definitions["IurSchool"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«Page«TypicalCustomer»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«TypicalCustomer»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "Page«HpProduct»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["HpProduct"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  ChangeUserInfoRequest: {
    /**
     * 年龄
     */
    age?: string;
    /**
     * 账号
     */
    code: string;
    /**
     * 院系id
     */
    departmentId?: string;
    /**
     * 是否禁用(true or false)
     */
    disable?: string;
    /**
     * 新邮箱
     */
    email?: string;
    /**
     * 新姓名
     */
    name?: string;
    /**
     * 专业id
     */
    professionId?: string;
    /**
     * 新自我介绍
     */
    selfIntroduction?: string;
    /**
     * 性别(0:女;1:男)
     */
    sex?: string;
  };
  RaceActivityNews: {
    /**
     * 创建时间
     */
    createDate?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 新闻摘要
     */
    newsAbstract?: string;
    /**
     * 新闻内容
     */
    newsContent?: string;
    /**
     * 新闻标题
     */
    newsTitle?: string;
    /**
     * 关联InfoId
     */
    raceActivityInfoId?: string;
    /**
     * 阅读数
     */
    readCount?: number;
    /**
     * 发布时间
     */
    releaseDate?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«List«HpSchoolBadge»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpSchoolBadge"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "BaseResponseBody«Page«登录历史»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«登录历史»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  HpProductCategory: {
    /**
     * 类别图
     */
    categoryImg?: string;
    /**
     * 产品类别
     */
    categoryName?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«Page«OnlineMessage»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«OnlineMessage»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  HpColumn: {
    /**
     * 栏目英文名称
     */
    columnEnName?: string;
    /**
     * 栏目名称
     */
    columnName?: string;
    /**
     * 栏目链接
     */
    columnUrl?: string;
    /**
     * 创建时间
     */
    createDate?: string;
    deep?: boolean;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
    show?: boolean;
    /**
     * 修改时间
     */
    updateDate?: string;
  };
  HpProduct: {
    /**
     * 创建时间
     */
    createDate?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 产品类别
     */
    productCategory?: string;
    /**
     * 产品介绍
     */
    productContent?: string;
    /**
     * 产品封面图
     */
    productImg?: string;
    /**
     * 产品名称
     */
    productName?: string;
    /**
     * 产品title图
     */
    productTitleImg?: string;
    /**
     * 产品类型
     */
    productType?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 是否启用-true启用
     */
    status?: boolean;
  };
  IurDeclareGuide: {
    /**
     * 介绍
     */
    declareGuideContent?: string;
    /**
     * 英文名
     */
    declareGuideEnName?: string;
    /**
     * 介绍图片
     */
    declareGuideImg?: string;
    /**
     * 介绍名称
     */
    declareGuideName?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 产学关联Id
     */
    iurId?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«GetAboutWoResponse»": {
    /**
     * 响应实体
     */
    data?: definitions["GetAboutWoResponse"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«HpProductInfo»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProductInfo"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  HpNews: {
    /**
     * 创建时间
     */
    createDate?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 新闻摘要
     */
    newsAbstract?: string;
    /**
     * 新闻内容
     */
    newsContent?: string;
    /**
     * 新闻封面图
     */
    newsImg?: string;
    /**
     * 新闻标题
     */
    newsTitle?: string;
    /**
     * 新闻类别
     */
    newsType?: string;
    /**
     * 下一篇Id@Transient
     */
    nextNewsId?: string;
    /**
     * 上一篇Id@Transient
     */
    preNewsId?: string;
    /**
     * 阅读数
     */
    readCount?: number;
    /**
     * 发布时间
     */
    releaseDate?: string;
    /**
     * 序号@Transient
     */
    rowsNumber?: number;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 是否启用-true启用
     */
    status?: boolean;
    top?: boolean;
  };
  HpSchoolBadge: {
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 校徽图片
     */
    schoolBadgeImg?: string;
    /**
     * 校徽名
     */
    schoolBadgeName?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  RaceActivity: {
    /**
     * 活动简介
     */
    activityContent?: string;
    /**
     * 活动封面图
     */
    activityImg?: string;
    /**
     * 活动名称
     */
    activityName?: string;
    /**
     * 举办时间-止
     */
    endDate?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 阅读数量
     */
    readCount?: number;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 举办时间-起
     */
    startDate?: string;
    /**
     * 是否启用-true启用
     */
    status?: boolean;
  };
  SoftConfigResult: {
    /**
     * copyRight Value
     */
    copyRightValue?: string;
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 软件名称
     */
    softName?: string;
    /**
     * 请求是否成功
     */
    success?: boolean;
  };
  QueryUserParam: {
    /**
     * 查询.是否禁用
     */
    disable?: string;
    /**
     * 查询.邮箱(模糊查询)
     */
    email?: string;
    /**
     * 查询.用户名称(模糊查询)
     */
    name?: string;
    /**
     * 查询.角色  0:学生;1:教师;2:管理员
     */
    role?: number;
    /**
     * 查询.用户代码(模糊查询)
     */
    userCode?: string;
  };
  PageQueryRequest: {
    /**
     * 查询.页号
     */
    pageNo?: number;
    /**
     * 查询.页大小
     */
    pageSize?: number;
  };
  "公共REST返回Body对象«IurDeclareGuide»": {
    /**
     * 响应实体
     */
    data?: definitions["IurDeclareGuide"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  GetUserRequest: {
    /**
     * 注册账号
     */
    code?: string;
  };
  "公共REST返回Body对象«string»": {
    /**
     * 响应实体
     */
    data?: string;
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpCooperate»": {
    /**
     * 响应实体
     */
    data?: definitions["HpCooperate"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "BaseResponseBody«User»": {
    /**
     * 响应实体
     */
    data?: definitions["User"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "Page«TypicalCustomer»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["TypicalCustomer"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "公共REST返回Body对象«List«HpCooperate»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpCooperate"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«HpProductType»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProductType"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpSchoolBadge»": {
    /**
     * 响应实体
     */
    data?: definitions["HpSchoolBadge"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«CompanyHr»»": {
    /**
     * 响应实体
     */
    data?: definitions["CompanyHr"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  ResetPasswordRequest: {
    /**
     * 账号
     */
    code: string;
    /**
     * 新密码
     */
    newPassword?: string;
  };
  "Page«OnlineMessage»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["OnlineMessage"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "Page«Album»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["Album"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "公共REST返回Body对象«HpProductInfo»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProductInfo"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«QueryListWithGuideResponse»": {
    /**
     * 响应实体
     */
    data?: definitions["QueryListWithGuideResponse"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpImage»": {
    /**
     * 响应实体
     */
    data?: definitions["HpImage"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«AlbumInfo»»": {
    /**
     * 响应实体
     */
    data?: definitions["AlbumInfo"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpColumn»": {
    /**
     * 响应实体
     */
    data?: definitions["HpColumn"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«TypicalCustomer»": {
    /**
     * 响应实体
     */
    data?: definitions["TypicalCustomer"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«IurSchoolBatch»»": {
    /**
     * 响应实体
     */
    data?: definitions["IurSchoolBatch"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  CheckTokenRequest: { token: string };
  "BaseResponseBody«List«User»»": {
    /**
     * 响应实体
     */
    data?: definitions["User"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "Page«登录历史»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["登录历史"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "公共REST返回Body对象«GetHomePageResponse»": {
    /**
     * 响应实体
     */
    data?: definitions["GetHomePageResponse"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«TypicalCustomerInfo»": {
    /**
     * 响应实体
     */
    data?: definitions["TypicalCustomerInfo"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "BaseResponseBody«boolean»": {
    /**
     * 响应实体
     */
    data?: boolean;
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  CompanyContent: {
    /**
     * 介绍
     */
    content?: string;
    /**
     * 副标题
     */
    contentSubtitle?: string;
    /**
     * 标题
     */
    contentTitle?: string;
    /**
     * 主键ID
     */
    id?: string;
  };
  CompanyHr: {
    /**
     * 招聘岗位
     */
    hrPost?: string;
    /**
     * 任职资格
     */
    hrPostCompetence?: string;
    /**
     * 岗位职责
     */
    hrPostDuty?: string;
    /**
     * 岗位英文
     */
    hrPostEn?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«List«HpColumn»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpColumn"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  ForgetPasswordByMailRequest: {
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户账号
     */
    userCode?: string;
  };
  "公共REST返回Body对象«HpInformation»": {
    /**
     * 响应实体
     */
    data?: definitions["HpInformation"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  IurSchool: {
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 省份
     */
    province?: string;
    /**
     * 院校批次
     */
    schoolBatch?: string;
    /**
     * 院校介绍
     */
    schoolContent?: string;
    /**
     * 院校图片
     */
    schoolImg?: string;
    /**
     * 院校名称
     */
    schoolName?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  QueryUserRequest: {
    /**
     * 查询.页号
     */
    pageNo?: number;
    /**
     * 查询.页大小
     */
    pageSize?: number;
    queryParam?: definitions["QueryUserParam"];
  };
  "公共REST返回Body对象«Page«Album»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«Album»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  GetProductByIdResponse: {
    /**
     * 产品信息
     */
    productInfoList?: definitions["HpProductInfo"][];
    /**
     * 产品名称
     */
    productName?: string;
    /**
     * 产品title图
     */
    productTitleImg?: string;
  };
  IurSchoolBatch: {
    /**
     * 批次名
     */
    batchName?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  Album: {
    /**
     * 相册描述
     */
    albumContent?: string;
    /**
     * 相册封面
     */
    albumImg?: string;
    /**
     * 相册名称
     */
    albumName?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 相片数@Transient
     */
    photoCount?: number;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«IurSchoolBatch»": {
    /**
     * 响应实体
     */
    data?: definitions["IurSchoolBatch"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  TypicalCustomer: {
    /**
     * 创建时间
     */
    createDate?: string;
    /**
     * 客户封面图
     */
    customerImg?: string;
    /**
     * 客户名称
     */
    customerName?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 实验室名称
     */
    laboratoryName?: string;
    /**
     * 发布时间
     */
    releaseDate?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 是否启用-true启用
     */
    status?: boolean;
  };
  "公共REST返回Body对象«Page«RaceActivityInfo»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«RaceActivityInfo»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«IurSchool»»": {
    /**
     * 响应实体
     */
    data?: definitions["IurSchool"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "Page«RaceActivity»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["RaceActivity"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "公共REST返回Body对象«RaceActivityInfo»": {
    /**
     * 响应实体
     */
    data?: definitions["RaceActivityInfo"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  HpProductType: {
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 类型图
     */
    typeImg?: string;
    /**
     * 产品类型
     */
    typeName?: string;
  };
  GetAboutWoResponse: {
    /**
     * 服务支持
     */
    companyAftermarketList?: definitions["CompanyAftermarket"][];
    /**
     * 公司简介
     */
    companyContent?: definitions["CompanyContent"];
    /**
     * 人才招聘
     */
    companyHrList?: definitions["CompanyHr"][];
    /**
     * 联系我们
     */
    hpInformation?: definitions["HpInformation"];
  };
  "公共REST返回Body对象«Album»": {
    /**
     * 响应实体
     */
    data?: definitions["Album"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  TokenUserResponse: {
    /**
     * 用户号
     */
    code?: string;
    disable?: boolean;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 角色(admin;teacher;student)
     */
    role?: string;
    token?: string;
  };
  AddUserRequest: {
    /**
     * 班级ID
     */
    classId?: string;
    /**
     * 账号
     */
    code: string;
    /**
     * 院系id
     */
    departmentId?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 是否也是教师
     */
    isTeacher?: string;
    /**
     * 注册姓名
     */
    name?: string;
    /**
     * 注册密码
     */
    password?: string;
    /**
     * 专业id
     */
    professionId?: string;
  };
  GetHomePageResponse: {
    /**
     * 产学合作
     */
    hpCooperateList?: definitions["HpCooperate"][];
    /**
     * 轮播图
     */
    imageList?: definitions["HpImage"][];
    /**
     * 校徽
     */
    schoolBadgeList?: definitions["HpSchoolBadge"][];
    /**
     * 文字
     */
    showWordList?: definitions["HpShowWord"][];
    /**
     * 典型客户2条
     */
    typicalCustomerList?: definitions["TypicalCustomer"][];
  };
  "公共REST返回Body对象«CompanyContent»": {
    /**
     * 响应实体
     */
    data?: definitions["CompanyContent"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«HpShowWord»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpShowWord"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  Iur: {
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 图片介绍
     */
    imageContent?: string;
    /**
     * 产学图片
     */
    imageImg?: string;
    /**
     * 图片名称
     */
    imageName?: string;
    /**
     * 产学名称
     */
    iurName?: string;
  };
  QueryListWithGuideResponse: {
    /**
     * 申请指南列表
     */
    guideList?: definitions["IurDeclareGuide"][];
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 图片介绍
     */
    imageContent?: string;
    /**
     * 产学图片
     */
    imageImg?: string;
    /**
     * 图片名称
     */
    imageName?: string;
    /**
     * 产学名称
     */
    iurName?: string;
  };
  "BaseResponseBody«BPhotoInfo»": {
    /**
     * 响应实体
     */
    data?: definitions["BPhotoInfo"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«GetProductByIdResponse»": {
    /**
     * 响应实体
     */
    data?: definitions["GetProductByIdResponse"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«RaceActivityNews»": {
    /**
     * 响应实体
     */
    data?: definitions["RaceActivityNews"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  登录历史: {
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 登录地址
     */
    loginAddr?: string;
    /**
     * 登录IP地址
     */
    loginIp?: string;
    /**
     * 登录时间
     */
    loginTime?: string;
    /**
     * 用户姓名
     */
    name?: string;
    /**
     * 用户账户
     */
    userCode?: string;
  };
  "公共REST返回Body对象«AlbumInfo»": {
    /**
     * 响应实体
     */
    data?: definitions["AlbumInfo"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  QueryListWithColumnResponse: {
    /**
     * 类别名称
     */
    productCategory?: string;
    /**
     * 产品信息
     */
    productList?: definitions["HpProduct"][];
  };
  HpShowWord: {
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 文字1
     */
    showWordOne?: string;
    /**
     * 文字3
     */
    showWordThr?: string;
    /**
     * 文字2
     */
    showWordTwo?: string;
  };
  QueryUserLoginHistoryRequest: {
    /**
     * 查询.页号
     */
    pageNo?: number;
    /**
     * 查询.页大小
     */
    pageSize?: number;
    /**
     * 查询.用户号
     */
    userCode: string;
  };
  "公共REST返回Body对象«List«QueryListResponse»»": {
    /**
     * 响应实体
     */
    data?: definitions["QueryListResponse"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "BaseResponseBody«Page«User»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«User»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  HpInformation: {
    /**
     * 分公司
     */
    branchOffice?: string;
    /**
     * 介绍
     */
    content?: string;
    /**
     * 邮件
     */
    email?: string;
    /**
     * 总公司
     */
    headQuarters?: string;
    /**
     * 热线
     */
    hotline?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 二维码
     */
    qrCode?: string;
  };
  VersionResult: {
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success?: boolean;
    /**
     * 版本号
     */
    version?: string;
  };
  "公共REST返回Body对象«List«HpProductCategory»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProductCategory"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«Page«HpNews»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«HpNews»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  RaceActivityInfo: {
    /**
     * 主表关联Id/虚拟仿真为空
     */
    activityId?: string;
    /**
     * 活动类别
     */
    activityInfoCategory?: string;
    /**
     * 活动封面图
     */
    activityInfoImg?: string;
    /**
     * 活动名称
     */
    activityInfoName?: string;
    /**
     * 视频路径
     */
    activityInfoVideo?: string;
    /**
     * 创建时间
     */
    createDate?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 阅读数量
     */
    readCount?: number;
    /**
     * 发布时间
     */
    releaseDate?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 是否启用-true启用
     */
    status?: boolean;
  };
  User: {
    /**
     * 角色.是否是管理员
     */
    admin?: boolean;
    /**
     * 年龄
     */
    age?: number;
    /**
     * 代码
     */
    code?: string;
    /**
     * 创建(注册)时间
     */
    createTime?: string;
    /**
     * 是否禁用
     */
    disable?: boolean;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 个人头像相对地址
     */
    headImagePath?: string;
    /**
     * 个人主页
     */
    homePage?: string;
    /**
     * 最近登录地址
     */
    lastestLoginAddr?: string;
    /**
     * 最近登录IP
     */
    lastestLoginIp?: string;
    /**
     * 最近登录时间
     */
    lastestLoginTime?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 个人签名
     */
    personalSignature?: string;
    /**
     * 自我介绍
     */
    selfIntroduction?: string;
    /**
     * 性别:0:女;1:男
     */
    sex?: number;
    /**
     * 角色.是否是学生
     */
    student?: boolean;
    /**
     * 角色.是否是教师
     */
    teacher?: boolean;
    /**
     * 头衔
     */
    title?: string;
  };
  "公共REST返回Body对象«RaceActivity»": {
    /**
     * 响应实体
     */
    data?: definitions["RaceActivity"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "BaseResponseBody«LoginUserResponse»": {
    /**
     * 响应实体
     */
    data?: definitions["LoginUserResponse"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«QueryListWithColumnResponse»»": {
    /**
     * 响应实体
     */
    data?: definitions["QueryListWithColumnResponse"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "BaseResponseBody«TokenUserResponse»": {
    /**
     * 响应实体
     */
    data?: definitions["TokenUserResponse"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  LoginRequest: {
    /**
     * 用户号
     */
    code: string;
    /**
     * 密码
     */
    password: string;
  };
  "Page«AlbumInfo»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["AlbumInfo"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  ChangePasswordRequest: {
    /**
     * 账号
     */
    code: string;
    /**
     * 新密码
     */
    newPassword?: string;
    /**
     * 原密码
     */
    oldPassword?: string;
  };
  "公共REST返回Body对象«Iur»": {
    /**
     * 响应实体
     */
    data?: definitions["Iur"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«Void»": {
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«List«HpImage»»": {
    /**
     * 响应实体
     */
    data?: definitions["HpImage"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  OnlineMessage: {
    /**
     * 联系人邮箱
     */
    contactsEmail?: string;
    /**
     * 联系人
     */
    contactsName?: string;
    /**
     * 联系电话
     */
    contactsPhone?: string;
    /**
     * 联系人学校
     */
    contactsSchool?: string;
    /**
     * 留言时间
     */
    createDate?: string;
    doRead?: boolean;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 内容
     */
    messageContent?: string;
  };
  "公共REST返回Body对象«Page«AlbumInfo»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«AlbumInfo»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  BaseUserRequest: {
    /**
     * 账号
     */
    code: string;
  };
  "Page«User»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["User"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  AlbumInfo: {
    /**
     * 相册关联Id
     */
    albumId?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 图片介绍
     */
    infoContent?: string;
    /**
     * 图片
     */
    infoImg?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«Page«HpProduct»»": {
    /**
     * 响应实体
     */
    data?: definitions["Page«HpProduct»"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  RegisterStudentRequest: {
    /**
     * 账号
     */
    code: string;
    /**
     * 注册姓名
     */
    name?: string;
    /**
     * 注册密码
     */
    password?: string;
  };
  "公共REST返回Body对象«List«TypicalCustomerInfo»»": {
    /**
     * 响应实体
     */
    data?: definitions["TypicalCustomerInfo"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«CompanyAftermarket»": {
    /**
     * 响应实体
     */
    data?: definitions["CompanyAftermarket"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "Page«HpNews»": {
    bottomPageNo?: number;
    /**
     * 结果.数据列表
     */
    list?: definitions["HpNews"][];
    nextPageNo?: number;
    /**
     * 页号
     */
    pageNo?: number;
    /**
     * 每页多少条记录
     */
    pageSize?: number;
    previousPageNo?: number;
    topPageNo?: number;
    totalPages?: number;
    /**
     * 查询记录总数
     */
    totalRecords?: number;
  };
  "公共REST返回Body对象«CompanyHr»": {
    /**
     * 响应实体
     */
    data?: definitions["CompanyHr"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  LoginUserResponse: {
    /**
     * 用户号
     */
    code?: string;
    disable?: boolean;
    /**
     * 姓名
     */
    name?: string;
    /**
     * 角色(admin;teacher;student)
     */
    role?: string;
    token?: string;
  };
  HpCooperate: {
    /**
     * 内容
     */
    cooperateContent?: string;
    /**
     * 文件
     */
    cooperateFile?: string;
    /**
     * 图片
     */
    cooperateImg?: string;
    /**
     * 标题
     */
    cooperateTitle?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«List«GetNewsResponse»»": {
    /**
     * 响应实体
     */
    data?: definitions["GetNewsResponse"][];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  TypicalCustomerInfo: {
    /**
     * 主表关联Id
     */
    customerId?: string;
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 模块介绍
     */
    infoContent?: string;
    /**
     * 模块文件
     */
    infoFile?: string;
    /**
     * 模块图
     */
    infoImg?: string;
    /**
     * 文件/图片类型 0-图片 1-全景 2-视频
     */
    infoType?: number;
    /**
     * 排序
     */
    seq?: number;
  };
  "公共REST返回Body对象«HpShowWord»": {
    /**
     * 响应实体
     */
    data?: definitions["HpShowWord"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpProductCategory»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProductCategory"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  "公共REST返回Body对象«HpProduct»": {
    /**
     * 响应实体
     */
    data?: definitions["HpProduct"];
    /**
     * 异常信息
     */
    message?: string;
    /**
     * 请求是否成功
     */
    success: boolean;
  };
  ChangeUserRoleRequest: {
    /**
     * 是否是管理员
     */
    admin?: boolean;
    /**
     * 账号
     */
    code: string;
    /**
     * 是否是学生
     */
    student?: boolean;
    /**
     * 是否是教师
     */
    teacher?: boolean;
  };
  QueryLoginHistoryRequest: {
    /**
     * 查询.用户邮箱
     */
    email?: string;
    /**
     * 查询.登录结束时间
     */
    endTime?: number;
    /**
     * 查询.用户姓名
     */
    name?: string;
    /**
     * 查询.页号
     */
    pageNo?: number;
    /**
     * 查询.页大小
     */
    pageSize?: number;
    /**
     * 查询.登录开始时间
     */
    startTime?: number;
    /**
     * 查询.用户号
     */
    userCode?: string;
  };
  HpProductInfo: {
    /**
     * 主键ID
     */
    id?: string;
    /**
     * 模块介绍
     */
    infoContent?: string;
    /**
     * 模块图
     */
    infoImg?: string;
    /**
     * 主表关联Id
     */
    productId?: string;
    /**
     * 排序
     */
    seq?: number;
    /**
     * 副标题
     */
    subTitle?: string;
    /**
     * 标题
     */
    title?: string;
  };
}
