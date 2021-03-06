var arrConfig = [
	{ group: '', dataIndex: 'id', title: 'ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'emp', dataIndex: 'name', title: '用户姓名', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'code', title: '编码', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'password', title: '密码', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
	{ group: '', dataIndex: 'gender', title: '性别', formType: '单选框', dataType: 'int', default: '0', options: '0:保密，1:男，2:女', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'account', title: '账号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'email', title: '邮箱', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'fax', title: '传真', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'position', title: '职务', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'birthday', title: '出生日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'deptId', title: '部门ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/dept/list', dictLabel: 'name', dictValue: 'id', displayInTab: '否', displayInQuery: '是', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'roleId', title: '角色ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/role/list', dictLabel: 'name', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'creatorId', title: '创建者ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'phone', title: '电话', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
	{ group: '', dataIndex: 'description', title: '备注', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'isLeader', title: '是否为企业负责人', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'isDeptManager', title: '是否为部门负责人', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'sort', title: '排序', formType: '', dataType: 'int', default: '', options: '0', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '99', min: '1' },
	{ group: '', dataIndex: 'updateBy', title: '更新人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'updateDate', title: '更新时间', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'createDate', title: '创建时间', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'status', title: '状态', formType: '开关', dataType: 'int', default: '1', options: '0:启用,1:禁用', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'role', dataIndex: 'name', title: '名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'permissionIds', title: '权限ID列表', formType: '', dataType: 'string[]', default: '', options: 'dynamic', dictUrl: 'XXX', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'pageNum', title: '页码', formType: '', dataType: 'int', default: '1', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'pageSize', title: '每页的数量', formType: '', dataType: 'int', default: '10', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'idList', title: '角色id数组', formType: '', dataType: 'String[]', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'dept', dataIndex: 'name', title: '名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'parentId', title: '上级部门ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/dept/list', dictLabel: 'name', dictValue: 'id', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'total', title: '总记录数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'size', title: '本页数量', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'module', title: '模块名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'type', title: '日志类型', formType: '', dataType: '', default: '', options: 'ADD:新增,DELETE:删除,MODIFY:编辑,DISABLE:禁用,ENABLE:启用', displayInTab: '', displayInQuery: '是', displayInAdd: '否', max: '', min: '' },
	{ group: 'log', dataIndex: 'date', title: '日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '否', max: 'YYYY-MM-DD', min: '' },
	{ group: 'log', dataIndex: 'CONTENT', title: '接口参数', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'OPERATOR_NAME', title: '操作人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '否', max: '30', min: '' },
	{ group: 'leader', dataIndex: 'name', title: '姓名', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'collectionNumber1', title: '托收协议1', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'collectionNumber2', title: '托收协议2', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'collectionNumber3', title: '托收协议3', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'collectionNumber4', title: '托收协议4', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: 'leader', dataIndex: 'number', title: '工号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
	{ group: '', dataIndex: 'updateById', title: '更新人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
	{ group: '', dataIndex: 'carConfigType', title: '用车类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_CONFIG_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'effectiveDate', title: '生效日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'leaveDate', title: '离职日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'officeArea', title: '办公室面积', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'trafficSubsidyPaymentStandard', title: '交通补贴发放标准', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'car', dataIndex: 'number', title: '车牌号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'brand', title: '品牌', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'model', title: '型号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'carTypeCode', title: '车辆类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'purposeCode', title: '车辆用途', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_PURPOSE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'configModeCode', title: '配置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_CONFIG_MODE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'useTypeCode', title: '使用类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_USE_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'fundsSourceCode', title: '资金来源', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_FUNDS_SOURCE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'displacementCode', title: '排量', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_DISPLACEMENT', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'accountBooksCode', title: '账簿', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'ACCOUNT_BOOKS', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'carTypeCode', title: '车辆类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'purposeValue', title: '车辆用途', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'configModeValue', title: '配置类型', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'useTypeValue', title: '使用类型', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'fundsSourceValue', title: '资金来源', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'displacementValue', title: '排量', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'accountBooksValue', title: '账簿', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'isWithinBudget', title: '是否预算内购车', formType: '单选框', dataType: 'int', default: '0', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'purchaseDate', title: '购置日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'purchaseTotalPrice', title: '购置总价', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'purchaseTax', title: '购置税', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'purchasePrice', title: '购置单价', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'managingRelationshipsCode', title: '管理关系', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_MANAGING_RELATIONSHIPS', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'managingRelationshipsValue', title: '管理关系', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_MANAGING_RELATIONSHIPS', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'propertyUnit', title: '产权单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'purchaseApplyDateAndDocumentNumber', title: '购置申请日期及文号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
	{ group: '', dataIndex: 'applicationReplyDateAndDocumentNumber', title: '批复日期及文号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
	{ group: '', dataIndex: 'driverId', title: '驾驶员id', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/driver/list', dictLabel: 'name', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'etcId', title: 'ETCid', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/etc/list', dictLabel: 'number', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'gasolineCardId', title: '油卡ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/gasolineCard/list', dictLabel: 'number', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'disposalTypeCode', title: '处置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_DISPOSAL_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'disposalTypeValue', title: '处置类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'CAR_DISPOSAL_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'disposer', title: '处置人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'disposalDate', title: '处置日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'scrapApprovalInfomation', title: '报废审批信息', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'dateOfBirth', title: '出生日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'identityCardNumber', title: '身份证号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
	{ group: '', dataIndex: 'createById', title: '创建人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
	{ group: '', dataIndex: 'politicalOutlook', title: '政治面貌', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'nationality', title: '民族', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'educationDegree', title: '文化程度', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
	{ group: '', dataIndex: 'unitBelongs', title: '所属单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
	{ group: '', dataIndex: 'remarks', title: '备注', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: 'driver', dataIndex: 'name', title: '姓名', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '是', displayInAdd: '', max: '64', min: '' },
	{ group: '', dataIndex: 'updateById', title: '更新人ID', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '36', min: '' },
	{ group: '', dataIndex: 'createByName', title: '创建人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
	{ group: '', dataIndex: 'deptName', title: '部门名称', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
	{ group: '', dataIndex: 'leaderName', title: '企业负责人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
	{ group: 'transportationSubsidy', dataIndex: 'leaderName', title: '企业负责人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
	{ group: 'communication', dataIndex: 'leaderName', title: '企业负责人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
	{ group: '', dataIndex: 'leaderId', title: '企业负责人ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/leader/list', dictLabel: 'name', dictValue: 'id', displayInTab: '否', displayInQuery: '是', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'updateByName', title: '更新人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '64', min: '' },
	{ group: '', dataIndex: 'etcNumber', title: 'ETC卡号', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/etc/list', dictLabel: 'number', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'gasolineNumber', title: '油卡卡号', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/gasolineCard/list', dictLabel: 'number', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'etc', dataIndex: 'number', title: '卡号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'operator', title: '操作人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
	{ group: '', dataIndex: 'carId', title: '车辆ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/car/list', dictLabel: 'number', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'carNumber', title: '车牌号', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/car/list', dictLabel: 'number', dictValue: 'id', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'gasolineCard', dataIndex: 'number', title: '卡号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'gasolineCardTypeCode', title: '油卡类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'GASOLINECARD_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'gasolineCardTypeValue', title: '油卡类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'GASOLINECARD_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'buyCardDate', title: '办卡日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'customerName', title: '客户名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
	{ group: '', dataIndex: 'customerCode', title: '客户编号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: '', dataIndex: 'dispatchTheme', title: '派车单主题', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'dispatchNumber', title: '派车单编号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '64', min: '' },
	{ group: '', dataIndex: 'dispatchTypeCode', title: '派车单类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'DISPATCH_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'dispatchTypeValue', title: '派车单类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'DISPATCH_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'mainPassenger', title: '主要乘车人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'reason', title: '事由', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'passengersNumber', title: '乘客数量', formType: '', dataType: 'int', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'reasonDescription', title: '事由简述', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '150', min: '' },
	{ group: '', dataIndex: 'startTime', title: '开始时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'endTime', title: '结束时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'start', title: '起点', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
	{ group: '', dataIndex: 'end', title: '终点', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
	{ group: '', dataIndex: 'route', title: '途经', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '20', min: '' },
	{ group: '', dataIndex: 'mileage', title: '里程数', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'specialNeeds', title: '特殊需求', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
	{ group: '', dataIndex: 'applyEmp', title: '申请人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
	{ group: '', dataIndex: 'applyDept', title: '申请部门', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
	{ group: '', dataIndex: 'applyTime', title: '申请时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'deptApproval', title: '部门审批人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
	{ group: '', dataIndex: 'deptApprovalComments', title: '部门审批意见', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'deptApprovalTime', title: '部门审批时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'officeImplementer', title: '办公室落实人', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
	{ group: '', dataIndex: 'officeImplementComments', title: '办公室落实意见', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'officeImplementTime', title: '办公室落实时间', formType: '时间选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD HH:mm:ss', min: '' },
	{ group: '', dataIndex: 'driverName', title: '驾驶员', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'amount', title: '金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'documentNumber', title: '凭证号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '30', min: '' },
	{ group: '', dataIndex: 'financialSystemNumber', title: '财务系统/资金平台单号', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'entryDate', title: '入账日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '是', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'trainingTypeCode', title: '培训类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'TRAINING_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'trainingTypeValue', title: '培训类型', formType: '下拉框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
	{ group: '', dataIndex: 'trainingUnit', title: '培训单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '32', min: '' },
	{ group: '', dataIndex: 'trainingProgram', title: '培训项目', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '50', min: '' },
	{ group: '', dataIndex: 'trainingStartDate', title: '培训开始日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'trainingEndDate', title: '培训结束日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'trainingDays', title: '培训天数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'approvalBasis', title: '审批依据', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'isInPlan', title: '是否计划内培训', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'reimbursementDate', title: '报销日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'travelDate', title: '出差日期', formType: 'rangepicker', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'destination', title: '目的地', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '15', min: '' },
	{ group: '', dataIndex: 'title', title: '摘要', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'amountWithoutTax', title: '不含税金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'tax', title: '税额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'referenceInformation', title: '参考信息', formType: '', dataType: '', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '100', min: '' },
	{ group: '', dataIndex: 'paymentTypeCode', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'PAYMENT_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'paymentTypeValue', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'PAYMENT_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'submitDate', title: '提交日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'communicationTypeCode', title: '通讯类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'COMMUNICATION_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'communicationTypeValue', title: '通讯类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'COMMUNICATION_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'communication', dataIndex: 'date', title: '发生日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: 'alcohol', dataIndex: 'name', title: '名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'alcohol', dataIndex: 'brand', title: '品牌', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'price', title: '单价', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'entertainment', dataIndex: 'number', title: '编号', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '36', min: '' },
	{ group: 'entertainment', dataIndex: 'date', title: '用餐日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'entertainmentTypeCode', title: '招待类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'ENTERTAINMENT_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'entertainmentTypeValue', title: '招待类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'ENTERTAINMENT_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'entertainment', dataIndex: 'reason', title: '招待事由', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'applyDeptName', title: '申请部门', formType: '', dataType: '', options: '', default: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'applyDeptId', title: '申请部门ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/dept/list', dictLabel: 'name', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'applyEmpName', title: '申请人', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'applyEmpId', title: '申请人ID', formType: '下拉框SP', dataType: '', default: '', options: 'dynamic', dictUrl: '/emp/list', dictLabel: 'empname', dictValue: 'id', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'alcoholAmount', title: '酒水金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'reimbursementAmount', title: '报销金额', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'guestNumber', title: '来宾人数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'accompanyNumber', title: '陪同人数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'totalNumber', title: '总人数', formType: '', dataType: 'int', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'average', title: '人均', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'entertainmentNatureCode', title: '招待性质', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'ENTERTAINMENT_NATURE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'entertainmentNatureValue', title: '招待性质', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'ENTERTAINMENT_NATURE', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'standard', title: '人均标准', formType: '', dataType: 'float', default: '', options: '', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'mainUnitName', title: '主体单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'activityOrganizationUnit', title: '活动组织单位', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'projectName', title: '考察项目名称', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'destination', title: '考察目的地', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'abroad', dataIndex: 'date', title: '考察日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: 'YYYY-MM-DD', min: '' },
	{ group: '', dataIndex: 'actualExpenses', title: '实际花费', formType: '', dataType: 'float', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: '', dataIndex: 'daysNumber', title: '天数', formType: '', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'abroad', dataIndex: 'isInPlan', title: '是否计划内考察', formType: '单选框', dataType: 'int', default: '', options: '0:否,1:是', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'operation', dataIndex: 'date', title: '日期', formType: '日期选择框', dataType: '', default: '', options: '', displayInTab: '', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'operation', dataIndex: 'operationPaymentTypeCode', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'OPERATION_PAYMENT_TYPE', displayInTab: '否', displayInQuery: '', displayInAdd: '', max: '', min: '' },
	{ group: 'operation', dataIndex: 'operationPaymentTypeValue', title: '支付类型', formType: '下拉框', dataType: '', default: '', options: 'dynamic', dictType: 'OPERATION_PAYMENT_TYPE', displayInTab: '', displayInQuery: '', displayInAdd: '否', max: '', min: '' },
]

var ctrlMap = { '单选框': 'radio', '开关': 'switch', '日期选择框': 'datepicker', '时间选择框': 'timepicker', '下拉框': 'select', '下拉框SP': 'select' }

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
			case 'title': {
				if (/\S+ID$/i.test(d[k])) {
					d['orgTitle'] = d[k]
					d[k] = d[k].replace(/ID$/i, '')
				}
				break
			}
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
					if (String(res) === 'dynamic') {
						res = []
						d.dynamic = true
					}
					d[k] = res
				}
				break
			case 'formType':
				// 为空则默认 输入框'input'
				d[k] = ctrlMap[v] || v || 'input'
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

	; (() => {
		// 额外添加 开始时间/开始日期 —— 结束时间/结束日期
		let startDate = arrConfig.find(d => /startDate/i.test(d.dataIndex))
		if (startDate) startDate = { ...startDate, dataIndex: 'startDate', title: '开始日期', displayInQuery: 'y' }
		let endDate = arrConfig.find(d => /endDate/i.test(d.dataIndex))
		if (endDate) endDate = { ...endDate, dataIndex: 'endDate', title: '结束日期', displayInQuery: 'y' }
		let startTime1 = arrConfig.find(d => /startTime/i.test(d.dataIndex))
		let startTime2 = startTime1
		if (startTime1) {
			startTime1 = { ...startTime1, dataIndex: 'startTime1', title: '开始时间', displayInQuery: 'y' }
			startTime2 = { ...startTime2, dataIndex: 'startTime2', title: '至', displayInQuery: 'y', colon: false }
		}
		let endTime1 = arrConfig.find(d => /endTime/i.test(d.dataIndex))
		let endTime2 = endTime1
		if (endTime1) {
			endTime1 = { ...endTime1, dataIndex: 'endTime1', title: '结束时间', displayInQuery: 'y' }
			endTime2 = { ...endTime2, dataIndex: 'endTime2', title: '至', displayInQuery: 'y', colon: false }
		}
		arrConfig.push(startDate, endDate, startTime1, startTime2, endTime1, endTime2)
	})()

arrConfig.sort((a, b) => a.dataIndex.toLowerCase() > b.dataIndex.toLowerCase() ? 1 : -1)

// 额外添加 年份、月份
arrConfig.push(...[
	{ dataIndex: 'year', title: '年份', formType: 'select', default: '${CURRENT_YEAR}', dynamic: true, min: 2010 },
	{ dataIndex: 'month', title: '月份', formType: 'select', default: '${CURRENT_MONTH}', dynamic: true },
])

// console.log(JSON.stringify(arrConfig))

export default arrConfig

// 备用分割代码：
//  ``.split('\n').filter(d => d)