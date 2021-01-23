export default [
    {
        code: '2.1',
        key: 'leader',
        childKey: 'leaderConfig',
        childCols: ["leaderId", "deptId", "carConfigType", "effectiveDate", "leaveDate", "officeArea", "trafficSubsidyPaymentStandard"],
        title: '企业负责人信息',
        notAllowDelete: true,
        cols:  ["name", "isLeader", "deptId", "collectionNumber1", "collectionNumber2", "collectionNumber3", "collectionNumber4", "number", "sort"]
    },
    {
        code: '3.1',
        key: 'car',
        title: '车辆管理',
        cols: ["id", "number", "deptId", "brand", "model", "carTypeCode", "purposeCode", "configModeCode", "useTypeCode", "fundsSourceCode", "displacementCode", "accountBooksCode", "isWithinBudget", "purchaseDate", "purchaseTotalPrice", "purchaseTax", "purchasePrice", "managingRelationshipsCode", "propertyUnit", "purchaseApplyDateAndDocumentNumber", "applicationReplyDateAndDocumentNumber", "driverId", "etcId", "leaderId", "gasolineCardId", "disposalTypeCode", "disposer", "disposalDate", "scrapApprovalInfomation"],
    },
    {
        code: '3.2',
        key: 'driver',
        title: '驾驶员管理',
        cols: ["id", "name", "deptId", "gender", "dateOfBirth", "identityCardNumber", "phone", "politicalOutlook", "nationality", "educationDegree", "unitBelongs", "status", "remarks"],
    },
    {
        code: '3.3',
        key: 'etc',
        title: 'ETC管理',
        cols: ["id", "number", "operator", "buyCardDate", "carId", "status", "remarks", "deptId"],
    },
    {
        code: '3.4',
        key: 'gasolineCard',
        title: '油卡管理',
        cols: ["id", "number", "operator", "buyCardDate", "carId", "status", "remarks", "deptId", "customerName", "customerCode", "gasolineCardTypeCode"],
    },
    {
        code: '3.5',
        key: 'officialVehicles',
        title: '公务用车管理',
        searchCols: ["driverId", "carId", "startTime1", "startTime2", "endTime1", "endTime2"],
        cols: ["id", "deptId", "dispatchTheme", "dispatchNumber", "dispatchTypeCode", "mainPassenger", "reason", "passengersNumber", "phone", "reasonDescription", "startTime", "endTime", "start", "end", "route", "driverId", "carId", "mileage", "specialNeeds", "remarks", "applyEmp", "applyDept", "applyTime", "deptApproval", "deptApprovalComments", "deptApprovalTime", "officeImplementer", "officeImplementComments", "officeImplementTime"],
    },
    {
        code: '4.1',
        key: 'training',
        title: '培训费管理',
        searchCols: ["leaderId", "startTime1", "startTime2", "endTime1", "endTime2", "startDate", "endDate"],
        searchSetMap: {
            startTime1: { title: '培训开始时间' },
            startDate: { title: '入账开始日期' }
        },
        cols: ["id", "deptId", "trainingTypeCode", "trainingUnit", "trainingProgram", "trainingStartDate", "trainingEndDate", "trainingDays", "approvalBasis", "isInPlan", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"]
    },
    {
        code: '4.2',
        key: 'travel',
        title: '差旅费管理',
        searchCols: ["leaderId", "startDate", "endDate"],
        searchSetMap: {
            startDate: { title: '入账开始日期' }
        },
        cols: ["id", "deptId", "reimbursementDate", "travelDate", "destination", "title", "amountWithoutTax", "tax", "amount", "fromId", "referenceInformation", "leaderId", "accountBooksCode", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.3',
        key: 'transportationSubsidy',
        title: '交通补贴管理',
        searchCols: ["leaderId", "startDate", "endDate"],
        cols: ["id", "deptId", "paymentTypeCode", "submitDate", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.4',
        key: 'communication',
        title: '通讯费管理',
        searchCols: ["leaderId", "startDate", "endDate"],
        searchSetMap: {
            startDate: { title: '入账开始日期' }
        },
        cols: ["id", "deptId", "communicationTypeCode", "date", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.5',
        key: 'alcohol',
        title: '酒水管理',
        cols: ["id", "deptId", "name", "brand", "price", "status"],
    },
    {
        code: '4.6',
        key: 'entertainment',
        title: '招待费管理',
        searchCols: ["leaderId", "startDate", "endDate"],
        searchSetMap: {
            startDate: { title: '入账开始日期' }
        },
        cols: ["id", "number", "date", "entertainmentTypeCode", "reason", "applyDeptId", "applyEmpId", "alcoholAmount", "reimbursementAmount", "guestNumber", "accompanyNumber", "totalNumber", "average", "entertainmentNatureCode", "standard", "deptId", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.7',
        key: 'abroad',
        title: '因公临时出国（境）管理',
        searchCols: ["leaderId", "startDate", "endDate"],
        searchSetMap: {
            startDate: { title: '入账开始日期' }
        },
        cols: ["id", "mainUnitName", "activityOrganizationUnit", "projectName", "destination", "date", "actualExpenses", "daysNumber", "isInPlan", "deptId", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '4.8',
        key: 'operation',
        title: '运行费管理',
        searchCols: ["leaderId", "startDate", "endDate"],
        searchSetMap: {
            startDate: { title: '入账开始日期' }
        },
        cols: ["id", "date", "operationPaymentTypeCode", "carId", "driverId", "deptId", "leaderId", "accountBooksCode", "amount", "documentNumber", "financialSystemNumber", "entryDate", "remarks"],
    },
    {
        code: '5.1',
        key: 'OVOReport',
        title: '公务用车年度台账',
        compType: 'chart',
        searchCols: ["year", "leaderId", "carId"]
    },
    {
        code: '5.1',
        key: 'OVOReport',
        title: '公务用车年度台账',
        compType: 'chart',
        searchCols: ["year", "leaderId", "carId"]
    },
    {
        code: '5.2',
        key: 'tbReport',
        title: '交通补贴确认',
        compType: 'chart',
        searchCols: {
            1: ["year", "month"],
            2: ["year", "driverId"],
        }
    }, 
]