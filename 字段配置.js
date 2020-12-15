var arrConfig = [
    { group: '', groupName: '', dataIndex: 'id', title: 'ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'emp', groupName: '用户', dataIndex: 'name', title: '用户姓名', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'code', title: '编码', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'password', title: '密码', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
    { group: '', groupName: '', dataIndex: 'gender', title: '性别', formType: '单选框', dataType: 'int', default: '0', options: '0:保密，1:男，2:女', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'account', title: '账号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'email', title: '邮箱', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'fax', title: '传真', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'position', title: '职务', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'birthday', title: '出生日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'deptId', title: '部门ID', formType: '', dataType: '', default: '', options: 'dynamic ', displayInTab: '否', displayInQuery: '是', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'roleId', title: '角色ID', formType: '', dataType: '', default: '', options: 'dynamic ', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'creatorId', title: '创建者ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'phone', title: '电话', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
    { group: '', groupName: '', dataIndex: 'description', title: '备注', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'isLeader', title: '是否为企业负责人', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'isDeptManager', title: '是否为部门负责人', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'sort', title: '排序', formType: '', dataType: 'int', default: 'auto', options: '1-99', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '99', min: '1' },
    { group: '', groupName: '', dataIndex: 'updateBy', title: '更新人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'updateDate', title: '更新时间', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'createDate', title: '创建时间', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'status', title: '状态', formType: '开关', dataType: 'int', default: '1', options: '0:启用,1:禁用', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'role', groupName: '角色', dataIndex: 'name', title: '名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'permissionIds', title: '权限ID列表', formType: '', dataType: 'string[]', default: '', options: 'dynamic ', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'pageNum', title: '页码', formType: '', dataType: 'int', default: '1', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'pageSize', title: '每页的数量', formType: '', dataType: 'int', default: '10', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'idList', title: '角色id数组', formType: '', dataType: 'String[]', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'dept', groupName: '部门', dataIndex: 'name', title: '名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'parentId', title: '上级部门ID', formType: '', dataType: '', default: '', options: 'dynamic ', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'total', title: '总记录数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'size', title: '本页数量', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'module', title: '模块名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'type', title: '日志类型', formType: '', dataType: '', default: '', options: 'ADD:新增,DELETE:删除,MODIFY:编辑,DISABLE:禁用,ENABLE:启用', displayInTab: '', displayInQuery: '是', displayInAdd: '否', max: '', min: '' },
    { group: 'log', groupName: '日志', dataIndex: 'date', title: '日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '否', max: 'YYYY-MM-DD', min: '' },
    { group: 'log', groupName: '日志', dataIndex: 'CONTENT', title: '接口参数', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'OPERATOR_NAME', title: '操作人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '否', max: '30', min: '' },
    { group: 'leader', groupName: '企业负责人', dataIndex: 'name', title: '姓名', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'collectionNumber1', title: '托收协议1', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'collectionNumber2', title: '托收协议2', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'collectionNumber3', title: '托收协议3', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'collectionNumber4', title: '托收协议4', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'createById', title: '创建人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
    { group: 'leader', groupName: '企业负责人', dataIndex: 'number', title: '工号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'updateById', title: '更新人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'carConfigType', title: '用车类型', formType: '', dataType: '', default: '', options: 'dynamic ', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'effectiveDate', title: '生效日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'leaveDate', title: '离职日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'officeArea', title: '办公室面积', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'trafficSubsidyPaymentStandard', title: '交通补贴发放标准', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'car', groupName: '车辆', dataIndex: 'number', title: '车牌号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'brand', title: '品牌', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'model', title: '型号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'carTypeCode', title: '车辆类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic ', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'purposeCode', title: '车辆用途', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'configModeCode', title: '配置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'useTypeCode', title: '使用类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'fundsSourceCode', title: '资金来源', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'displacementCode', title: '排量', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'accountBooksCode', title: '账簿', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'carTypeCode', title: '车辆类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic ', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'purposeValue', title: '车辆用途', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'configModeValue', title: '配置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'useTypeValue', title: '使用类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'fundsSourceValue', title: '资金来源', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'displacementValue', title: '排量', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'accountBooksValue', title: '账簿', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'isWithinBudget', title: '是否预算内购车', formType: '单选框', dataType: 'int', default: '0', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'purchaseDate', title: '购置日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'purchaseTotalPrice', title: '购置总价', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'purchaseTax', title: '购置税', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'purchasePrice', title: '购置单价', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'managingRelationshipsCode', title: '管理关系', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'managingRelationshipsValue', title: '管理关系', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'propertyUnit', title: '产权单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'purchaseApplyDateAndDocumentNumber', title: '购置申请日期及文号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
    { group: '', groupName: '', dataIndex: 'applicationReplyDateAndDocumentNumber', title: '批复日期及文号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
    { group: '', groupName: '', dataIndex: 'driverId', title: '驾驶员id', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'etcId', title: 'ETCid', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'gasolineCardId', title: '油卡ID', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'disposalTypeCode', title: '处置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'disposalTypeValue', title: '处置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'disposer', title: '处置人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'disposalDate', title: '处置日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'scrapApprovalInfomation', title: '报废审批信息', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'dateOfBirth', title: '出生日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'identityCardNumber', title: '身份证号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
    { group: '', groupName: '', dataIndex: 'createById', title: '创建人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'politicalOutlook', title: '政治面貌', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'nationality', title: '民族', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'educationDegree', title: '文化程度', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'unitBelongs', title: '所属单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'remarks', title: '备注', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: 'driver', groupName: '驾驶员', dataIndex: 'name', title: '姓名', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'updateById', title: '更新人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'createByName', title: '创建人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'deptName', title: '部门名称', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'leaderName', title: '企业负责人', formType: '', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'leaderId', title: '企业负责人ID', formType: '', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '是', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'updateByName', title: '更新人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'etcNumber', title: 'ETC卡号', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'gasolineNumber', title: '油卡卡号', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'etc', groupName: 'ETC', dataIndex: 'number', title: '卡号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'operator', title: '操作人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'carId', title: '车辆ID', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'carNumber', title: '车牌号', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'gasolineCard', groupName: '油卡', dataIndex: 'number', title: '卡号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'gasolineCardTypeCode', title: '油卡类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'gasolineCardTypeValue', title: '油卡类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'buyCardDate', title: '办卡日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'customerName', title: '客户名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
    { group: '', groupName: '', dataIndex: 'customerCode', title: '客户编号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: '', groupName: '', dataIndex: 'dispatchTheme', title: '派车单主题', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'dispatchNumber', title: '派车单编号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
    { group: '', groupName: '', dataIndex: 'dispatchTypeCode', title: '派车单类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'dispatchTypeValue', title: '派车单类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'mainPassenger', title: '主要乘车人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'reason', title: '事由', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'passengersNumber', title: '乘客数量', formType: '', dataType: 'int', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'reasonDescription', title: '事由简述', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '150', min: '' },
    { group: '', groupName: '', dataIndex: 'startTime', title: '开始时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'endTime', title: '结束时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'start', title: '起点', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
    { group: '', groupName: '', dataIndex: 'end', title: '终点', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
    { group: '', groupName: '', dataIndex: 'route', title: '途经', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
    { group: '', groupName: '', dataIndex: 'mileage', title: '里程数', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'specialNeeds', title: '特殊需求', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
    { group: '', groupName: '', dataIndex: 'applyEmp', title: '申请人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
    { group: '', groupName: '', dataIndex: 'applyDept', title: '申请部门', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
    { group: '', groupName: '', dataIndex: 'applyTime', title: '申请时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'deptApproval', title: '部门审批人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
    { group: '', groupName: '', dataIndex: 'deptApprovalComments', title: '部门审批意见', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'deptApprovalTime', title: '部门审批时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'officeImplementer', title: '办公室落实人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
    { group: '', groupName: '', dataIndex: 'officeImplementComments', title: '办公室落实意见', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'officeImplementTime', title: '办公室落实时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
    { group: '', groupName: '', dataIndex: 'driverName', title: '驾驶员', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'amount', title: '金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'documentNumber', title: '凭证号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'financialSystemNumber', title: '财务系统/资金平台单号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'entryDate', title: '入账日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '是', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingTypeCode', title: '培训类型', formType: '下拉框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingTypeValue', title: '培训类型', formType: '下拉框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingUnit', title: '培训单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingProgram', title: '培训项目', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingStartDate', title: '培训开始日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingEndDate', title: '培训结束日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'trainingDays', title: '培训天数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'approvalBasis', title: '审批依据', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'isInPlan', title: '是否计划内培训', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'reimbursementDate', title: '报销日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'travelDate', title: '出差日期', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
    { group: '', groupName: '', dataIndex: 'destination', title: '目的地', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '15', min: '' },
    { group: '', groupName: '', dataIndex: 'title', title: '摘要', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'amountWithoutTax', title: '不含税金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'tax', title: '税额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'referenceInformation', title: '参考信息', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
    { group: '', groupName: '', dataIndex: 'paymentTypeCode', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'paymentTypeValue', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'submitDate', title: '提交日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'communicationTypeCode', title: '通讯类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'communicationTypeValue', title: '通讯类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'communication', groupName: '通讯费', dataIndex: 'date', title: '发生日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: 'alcohol', groupName: '酒水', dataIndex: 'name', title: '名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'alcohol', groupName: '酒水', dataIndex: 'brand', title: '品牌', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'price', title: '单价', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'entertainment', groupName: '招待费', dataIndex: 'number', title: '编号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
    { group: 'entertainment', groupName: '招待费', dataIndex: 'date', title: '用餐日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'entertainmentTypeCode', title: '招待类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'entertainmentTypeValue', title: '招待类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'entertainment', groupName: '招待费', dataIndex: 'reason', title: '招待事由', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'applyDeptName', title: '申请部门', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'applyDeptId', title: '申请部门Id', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'applyEmpName', title: '申请人', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'applyEmpId', title: '申请人ID', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'alcoholAmount', title: '酒水金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'reimbursementAmount', title: '报销金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'guestNumber', title: '来宾人数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'accompanyNumber', title: '陪同人数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'totalNumber', title: '总人数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'average', title: '人均', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'entertainmentNatureCode', title: '招待性质', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'entertainmentNatureValue', title: '招待性质', formType: '下拉框', dataType: '', default: '', options: 'dynamic', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'standard', title: '人均标准', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'mainUnitName', title: '主体单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'activityOrganizationUnit', title: '活动组织单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'projectName', title: '考察项目名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'destination', title: '考察目的地', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'abroad', groupName: '因公临时出国', dataIndex: 'date', title: '考察日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
    { group: '', groupName: '', dataIndex: 'actualExpenses', title: '实际花费', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: '', groupName: '', dataIndex: 'daysNumber', title: '天数', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'abroad', groupName: '因公临时出国', dataIndex: 'isInPlan', title: '是否计划内考察', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'operation', groupName: '运行费', dataIndex: 'date', title: '日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
    { group: 'operation', groupName: '运行费', dataIndex: 'operationPaymentTypeCode', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
    { group: 'operation', groupName: '运行费', dataIndex: 'operationPaymentTypeValue', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },

]

var ctrlMap = { '单选框': 'radio', '开关': 'switch', '日期选择框': 'datepicker', '时间选择框': 'timepicker', '下拉框': 'select' }

var utTrim = str => (str || '').replace(/^\s+|\s+$/g, '')

var utCheckNum = (type, v) => {
    if (v !== '' && isFinite(v)) return v * 1   // && ['int', 'float', 'number'].includes(type)
    return v
}

arrConfig.forEach(d => {
    Object.keys(d).forEach(k => {
        d[k] = (d[k] === 0 ? '0' : d[k]) || ''
        let v = d[k]
        switch (k) {
            case 'options':
                if (v) {
                    let arr = v.split(v.indexOf('，') !== -1 ? '，' : ',')
                    let res = arr.map(dd => {
                        let str = utTrim(dd)
                        if (str === 'dynamic') return str
                        if (str === '0-99') {
                            d.min = 0
                            d.max = 99
                            return ''
                        }
                        let label = utTrim(str.split(':')[1])
                        let value = utTrim(str.split(':')[0])
                        if (['int', 'float', 'number'].includes(d.dataType)) value *= 1
                        return { label, value }
                    })
                    d[k] = String(res) === 'dynamic' ? 'dynamic' : res
                }
                break
            case 'formType':
                // 为空则默认 输入框'input'
                d[k] = ctrlMap[v] || 'input'
                break
            case 'max': 
                if (v.startsWith('YYYY')) {
                    d.format = v
                    d[k] = ''
                } else {
                    d[k] = utCheckNum(d.dataType, v)
                }
                break
            case 'min':
            case 'default':
                d[k] = utCheckNum(d.dataType, v)
                break
            default:
                if (v === '是') d[k] = 'y'
                else if (v === '否') d[k] = 'n'
        }
        if (d[k] === '') delete d[k]
    })
})
arrConfig.sort((a, b) => a.dataIndex.toLowerCase() > b.dataIndex.toLowerCase() ? 1 : -1)
console.log(JSON.stringify(arrConfig))
