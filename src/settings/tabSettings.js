export default [
    {
        code: '2.1',
        key: 'leader',
        title: '企业负责人信息',
        notAllowDelete: true,
        cols:  ["name", "isLeader", "deptId", "collectionNumber1", "collectionNumber2", "collectionNumber3", "collectionNumber4", "createById", "number", "sort"]
    },
    {
        code: '3.1',
        key: 'car',
        title: '车辆管理',
        cols: ["id", "number", "deptId", "brand", "model", "carTypeCode", "purposeCode", "configModeCode", "useTypeCode", "fundsSourceCode", "displacementCode", "accountBooksCode", "isWithinBudget", "purchaseDate", "purchaseTotalPrice", "purchaseTax", "purchasePrice", "managingRelationshipsCode", "propertyUnit", "purchaseApplyDateAndDocumentNumber", "applicationReplyDateAndDocumentNumber", "driverId", "etcId", "leaderId", "gasolineCardId", "disposalTypeCode", "disposer", "disposalDate", "scrapApprovalInfomation", "updateById"],
    },
    {
        code: '3.2',
        key: 'driver',
        title: '驾驶员管理',
        cols: ["id", "number", "deptId", "brand", "model", "carTypeCode", "purposeCode", "configModeCode", "useTypeCode", "fundsSourceCode", "displacementCode", "accountBooksCode", "isWithinBudget", "purchaseDate", "purchaseTotalPrice", "purchaseTax", "purchasePrice", "managingRelationshipsCode", "propertyUnit", "purchaseApplyDateAndDocumentNumber", "applicationReplyDateAndDocumentNumber", "driverId", "etcId", "leaderId", "gasolineCardId", "disposalTypeCode", "disposer", "disposalDate", "scrapApprovalInfomation", "updateById"],
    },
    {
        code: '3.3',
        key: 'etc',
        title: 'ETC管理',
        cols: ["id", "number", "operator", "buyCardDate", "status", "carId", "updateById", "status", "remarks", "deptId"],
    },
    {
        code: '3.4',
        key: 'gasolineCard',
        title: '油卡管理',
        cols: ["id", "number", "operator", "buyCardDate", "status", "carId", "createById", "status", "remarks", "deptId", "customerName", "customerCode", "gasolineCardTypeCode"],
    },
    {
        code: '3.5',
        key: 'officialVehicles',
        title: '公务用车管理',
        cols: ["deptId", "createById", "dispatchTheme", "dispatchNumber", "dispatchTypeCode", "mainPassenger", "reason", "passengersNumber", "phone", "reasonDescription", "startTime", "endTime", "start", "end", "route", "driverId", "carId", "mileage", "specialNeeds", "remarks", "applyEmp", "applyDept", "applyTime", "deptApproval", "deptApprovalComments", "deptApprovalTime", "officeImplementer", "officeImplementComments", "officeImplementTime"],
    },
    {
        code: '4.1',
        key: 'training',
        title: '培训费管理',
        cols: ["deptId", "trainingTypeCode", "trainingUnit", "trainingProgram", "trainingStartDate", "trainingEndDate", "trainingDays", "approvalBasis", "isInPlan", "createById", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.2',
        key: 'travel',
        title: '差旅费管理',
        cols: ["deptId", "reimbursementDate", "travelDate", "destination", "title", "amountWithoutTax", "tax", "amount", "fromId", "referenceInformation", "leaderId", "accountBooksCode", "documentNumber", "financialSystemNumber", "entryDate", "remarks", "createById"],
    },
    {
        code: '4.3',
        key: 'transportationSubsidy',
        title: '交通补贴管理',
        cols: ["deptId", "paymentTypeCode", "submitDate", "createById", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.4',
        key: 'communication',
        title: '通讯费管理',
        cols: ["deptId", "communicationTypeCode", "date", "createById", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.5',
        key: 'alcohol',
        title: '酒水管理',
        cols: ["deptId", "name", "brand", "createById", "price", "status"],
    },
    {
        code: '4.6',
        key: 'entertainment',
        title: '招待费管理',
        cols: ["number", "date", "entertainmentTypeCode", "reason", "applyDeptId", "applyEmpId", "alcoholAmount", "reimbursementAmount", "guestNumber", "accompanyNumber", "totalNumber", "average", "entertainmentNatureCode", "standard", "deptId", "createById", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.7',
        key: 'abroad',
        title: '因公临时出国（境）管理',
        cols: ["mainUnitName", "activityOrganizationUnit", "projectName", "destination", "date", "actualExpenses", "daysNumber", "isInPlan", "deptId", "createById", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.8',
        key: 'operation',
        title: '运行费管理',
        cols: ["date", "operationPaymentTypeCode", "carId", "driverId", "deptId", "createById", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
]