app.controller('BudgetUploadCtrl', ['$scope', '$rootScope', '$log', '$tm1Ui', '$timeout',  function($scope, $rootScope, $log, $tm1Ui, $timeout) {
   /*
    *     defaults.* are variables that are declared once and are changed in the page, otherwise known as constants in programming languages
    *     lists.* should be used to store any lists that are used with ng-repeat, i.e. tm1-ui-element-list
    *     selections.* should be used for all selections that are made by a user in the page
    *     values.* should store the result of any dbr, dbra or other values from server that you want to store to use elsewhere, i.e. in a calculation
    * 
    *     For more information: https://github.com/cubewise-code/canvas-best-practice
    */
$scope.defaults = {
        cube: "",
        scenario: "",
        measure: "Amount",
        panelClass: "panel-default",
        panelRadio: "panel-default",
        panelTitle:'Click on the upload button to upload a file',
        panelRadioButton:'Please select a version',
        messageUpload:'false'
    };

    $scope.selections = {
        cube : $scope.defaults.cube,
        scenario: $scope.defaults.scenario,
        measure: $scope.defaults.measure,
        panelClass: $scope.defaults.panelClass,
        panelRadio: $scope.defaults.panelRadio,
        panelTitle: $scope.defaults.panelTitle,
        panelRadioButton: $scope.defaults.panelRadioButton,
        messageUpload: $scope.defaults.messageUpload
    };

    $scope.lists = {
        records: []
    };
    $scope.values = {
        favourites: ""
    };

    $scope.onSelectedVersion = function(scenario){
        $scope.selections.scenario = scenario;
        $scope.selections.panelRadioButton='Version selected';
        $scope.selections.panelRadio='panel-success';
        if($scope.selections.scenario == "Live Budget"){
            $scope.selections.cube = "UPP Budget";
        }else{
            $scope.selections.cube = "UPP Forecast";
        }
    };

    $scope.copyProductSuccess = function(){
        $scope.isProductCopied = true;
        $timeout(function(){
             $scope.isProductCopied = false;
        }, 2000);
    };

    // Trigger the Excel file read
    $scope.read = function (workbook) {
        if($scope.selections.panelRadioButton == "Version selected"){

        $scope.selections.panelTitle='Click save button to upload into TM1';
        $scope.selections.panelClass='panel-primary';
        // Parse the Excel file
        $scope.values.error = "";
        $scope.values.workbook = workbook;
        $scope.values.sheetName = "UPP Upload";
        $scope.lists.records = [];
        $scope.lists.recordHeaders = [];
        //timeout required to force page recalculation
        $timeout(function(){
            $scope.parseWorksheet($scope.values.workbook.Sheets[$scope.values.sheetName]);
        });

        }else{
            $scope.selections.panelRadioButton = 'Error : Please select a version';
            $scope.selections.panelRadio='panel-warning';
        }
    };

    // Read the Excel file and populate the records array
    $scope.parseWorksheet = function(sht){
        $scope.lists.records.length = 0;
        var startRow = 9;
        var range = XLSX.utils.decode_range(sht["!ref"]);
        //header
            var p01 = sht["G" +(startRow)].v;
            var p02 = sht["H" +(startRow)].v;
            var p03 = sht["I" +(startRow)].v;
            var p04 = sht["J" +(startRow)].v;
            var p05 = sht["K" +(startRow)].v;
            var p06 = sht["L" +(startRow)].v;
            var p07 = sht["M" +(startRow)].v;
            var p08 = sht["N" +(startRow)].v;
            var p09 = sht["O" +(startRow)].v;
            var p10 = sht["P" +(startRow)].v;
            var p11 = sht["Q" +(startRow)].v;
            var p12 = sht["R" +(startRow)].v;

            //$tm1Ui.cellGet("UofA_TM1_FP-Dev", "FP Setting", "Current Planning Year - Forecast", "String").then(function(PlanningYear){

            //});

            var recordHeader = {
                row: startRow,
                period: p01,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p02,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p03,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p04,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p05,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p06,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p07,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p08,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p09,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p10,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p11,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
            var recordHeader = {
                row: startRow,
                period: p12,
                status: "N",
                errorMsg:errorMsg,
            };

            $scope.lists.recordHeaders.push(recordHeader);
        
        // end header        
        for(var r = startRow; r <= range.e.r; r++){
 
            // Test if the first cell and check if it is empty
            var departmentCell = sht["A" +(r + 1)];
            if (departmentCell === undefined) {
                // No more data
                break;
            }

            var Department = sht["A" +(r + 1)].v;
            var DepartmentName = sht["B" +(r + 1)].v;
            var ProjectID = sht["C" +(r + 1)].v;
            var ProjectName = sht["D" +(r + 1)].v;
            var AccountCode = sht["E" +(r + 1)].v;
            var AccountName = sht["F" +(r + 1)].v;
            var m01 = sht["G" +(r + 1)].v;
            var m02 = sht["H" +(r + 1)].v;
            var m03 = sht["I" +(r + 1)].v;
            var m04 = sht["J" +(r + 1)].v;
            var m05 = sht["K" +(r + 1)].v;
            var m06 = sht["L" +(r + 1)].v;
            var m07 = sht["M" +(r + 1)].v;
            var m08 = sht["N" +(r + 1)].v;
            var m09 = sht["O" +(r + 1)].v;
            var m10 = sht["P" +(r + 1)].v;
            var m11 = sht["Q" +(r + 1)].v;
            var m12 = sht["R" +(r + 1)].v;
            var errorMsg = "";
            var error = [];

            var record = {
                row: r - startRow + 1,
                count:0,
                selected: true,
                Department: Department,
                DepartmentName: DepartmentName,
                ProjectID: ProjectID,
                ProjectName: ProjectName,
                AccountCode: AccountCode,
                AccountName: AccountName,
                DepartmentProjectAccount: Department + ProjectID + AccountCode,
                m01: m01,
                m02: m02,
                m03: m03,
                m04: m04,
                m05: m05,
                m06: m06,
                m07: m07,
                m08: m08,
                m09: m09,
                m10: m10,
                m11: m11,
                m12: m12,
                errorMsg:errorMsg,
                error: error
            };

            $scope.lists.records.push(record);

        }

       $scope.lists.validation = [];
        for(var i = 0; i < $scope.lists.records.length; i++){
            $scope.lists.validation.push($scope.lists.records[i]);
        }

        //console.log($scope.lists.validation);

        var monthValidate = [
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[0].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[1].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[2].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[3].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[4].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[5].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[6].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[7].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[8].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[9].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[10].period, 
                                "Indicator"]
            },
            {
                    instance:"UofA_TM1_FP-Dev", 
                    cube: "FP Budget Lookup", 
                    cubeElements:[$scope.selections.scenario, 
                                $scope.lists.recordHeaders[11].period, 
                                "Indicator"]
            },
            ];
//            $scope.lists.allowedPeriods = [];
            $scope.lists.allowedPeriodObj = {};

            $tm1Ui.cellsetGet(monthValidate).then(function(results){
                for(var i = 0; i < results.length; i++){
                    console.log(results[i].Value);
                    $scope.lists.allowedPeriodObj[$scope.lists.recordHeaders[i].period] = results[i].Value;
                }
                
            });

            $scope.validate();

    };

    $scope.validate = function() {


        // Function gets the first record and then validates its contents

        if ($scope.lists.validation.length > 0){
            //shift() remove a record once it has been investigated
            var record = $scope.lists.validation.shift();
            var count = 0;
            // Check for duplicate record
            for(var i = 0; i < $scope.lists.records.length; i++){
                if(record.DepartmentProjectAccount == $scope.lists.records[i].DepartmentProjectAccount){
                    count++;
                }
            }
            if(count > 1){
                    record.selected = false;
                    record.errorMsg = record.errorMsg + "Duplicate record found.";
            }
            // check for numeric
            if(isNaN(record.m01) ||isNaN(record.m02) ){
                    record.selected = false;
                    record.errorMsg = record.errorMsg + "Period contain text.";
            }
            // check for department validation
            $tm1Ui.dimensionElement("UofA_TM1_FP-Dev", "FP Budget Department", record.Department).then(function(value){
                if (value == undefined){
                    record.selected = false;
                    record.errorMsg = record.errorMsg + record.Department + " is invalid.";
                }else{
                    
                    $tm1Ui.attributeGet("UofA_TM1_FP-Dev", "FP Budget Department", record.Department,"Department Status").then(function(value){
                        if (value.Value != "Active"){
                            record.selected = false;
                            record.errorMsg = record.errorMsg + record.Department + " is not active.";
                        }
                        
                    });
                    $tm1Ui.cellGet("UofA_TM1_FP-Dev", "FP Setting", "Current Planning Year - Budget", "String").then(function(PlanningYear){
                        $tm1Ui.cellGet("UofA_TM1_FP-Dev", "FP Budget", "All Projects", $scope.selections.scenario, PlanningYear.Value, record.Department,"NET OPERATING RESULT L1","Project Budget Flag").then(function(value){
                            if(value.Value != "Y"){
                            record.selected = false;
                            record.errorMsg = record.errorMsg + record.Department + " Flag needs to be set.";
                            }                     
                        });                      
                     });

                }
            });  
            // check for Account validation
            $tm1Ui.dimensionElement("UofA_TM1_FP-Dev", "FP Account", record.AccountCode).then(function(value){
                if (value == undefined){
                    record.selected = false;
                    record.errorMsg = record.errorMsg + record.AccountCode + " is invalid.";
                }else{
                    
                    $tm1Ui.attributeGet("UofA_TM1_FP-Dev", "FP Account", record.AccountCode,"Account Status").then(function(value){
                        if (value.Value != "Active"){
                            record.selected = false;
                            record.errorMsg = record.errorMsg + record.AccountCode + " is not active.";
                        }
                        
                    });
                }
            });  

            // check for Account validation
            $tm1Ui.dimensionElement("UofA_TM1_FP-Dev", "USP Project", record.ProjectID).then(function(value){
                if (value == undefined){
                    record.selected = false;
                    record.errorMsg = record.errorMsg + record.ProjectID + " is invalid.";
                }else{
                    $tm1Ui.attributeGet("UofA_TM1_FP-Dev", "USP Project", record.ProjectID,"Project Status").then(function(value){
                        if (value.Value != "Active"){
                            record.selected = false;
                            record.errorMsg = record.errorMsg + record.ProjectID + " is not active.";
                        }
                        
                    });
                    
                }
            });  

            $scope.validate();
                  
        }
    };




    $scope.save = function(){

        if($scope.values.sheetName){

        $scope.selections.messageUpload='true';

        for(var i = 0; i < $scope.lists.records.length; i++){
            var record = $scope.lists.records[i];
            if (record.selected){
                $scope.saveItem(record);
            } 
        }

        $scope.selections.panelTitle='Data uploaded into TM1';
        $scope.selections.panelClass='panel-success';
    };

    };

    $scope.saveItem = function(record){
        record.saved = false;
        record.saving = true;
  
        var cellPutRequests = [];
        for(var i = 0; i < 12; i++){
            if($scope.lists.allowedPeriodObj[$scope.lists.recordHeaders[i].period] == "N"){
                var period = i<10 ? '0' + (i + 1) : (i + 1);
            cellPutRequests.push({
                value: record['m' + period],
                instance:"UofA_TM1_FP-Dev",
                cube: $scope.selections.cube,
                cubeElements:[$scope.selections.scenario,
                            $scope.lists.recordHeaders[i].period,
                            record.Department,
                            record.AccountCode,
                            record.ProjectID,
                            $scope.selections.measure]
            });
            }
        
        }
        /*
        if($scope.lists.recordHeaders[1].status == "N"){
          cellPutRequests.push({
            value: record.m02,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[1].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }
        if($scope.lists.recordHeaders[2].status == "N"){
          cellPutRequests.push({
            value: record.m03,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[2].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }
        
        if($scope.lists.recordHeaders[3].status == "N"){
          cellPutRequests.push({
            value: record.m04,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[3].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }
        if($scope.lists.recordHeaders[4].status == "N"){
          cellPutRequests.push({
            value: record.m05,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[4].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }
        if($scope.lists.recordHeaders[5].status == "N"){
          cellPutRequests.push({
            value: record.m06,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[5].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }
        if($scope.lists.recordHeaders[6].status == "N"){
          cellPutRequests.push({
            value: record.m07,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[6].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }      
        if($scope.lists.recordHeaders[7].status == "N"){
          cellPutRequests.push({
            value: record.m08,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[7].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }      
        if($scope.lists.recordHeaders[8].status == "N"){
          cellPutRequests.push({
            value: record.m09,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[8].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }      
        if($scope.lists.recordHeaders[9].status == "N"){
          cellPutRequests.push({
            value: record.m10,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[9].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }              
        if($scope.lists.recordHeaders[10].status == "N"){
          cellPutRequests.push({
            value: record.m11,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[10].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }      
        if($scope.lists.recordHeaders[11].status == "N"){
          cellPutRequests.push({
            value: record.m12,
            instance:"UofA_TM1_FP-Dev",
            cube: $scope.selections.cube,
            cubeElements:[$scope.selections.scenario,
                        $scope.lists.recordHeaders[11].period,
                        record.Department,
                        record.AccountCode,
                        record.ProjectID,
                        $scope.selections.measure]
          });
        }       
        */       
        console.log(cellPutRequests);
        $tm1Ui.cellsetPut(cellPutRequests).then(function(value){
                record.saved= true;
                record.saving = false;
        });

    };

    $scope.getMonthName = function(month){
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[month-1];
    };
    
}]);