document.addEventListener('DOMContentLoaded', function(){
    document.querySelector("#input-section").style.display = "block";
    document.querySelector(".input-content").style.display = "none";
    document.querySelector(".joint-data-input-table").style.display = "none";
    document.querySelector(".material-data-input-table").style.display = "none";
    document.querySelector(".area-data-input-table").style.display = "none";
    document.querySelector(".member-data-input-table").style.display = "none";
    document.querySelector(".load-data-input-table").style.display = "none";
    document.querySelector("#output-section").style.display = "none";

    
    // By default
     jointData();    
    
});

// For the input parameters 
function jointData(){
    document.querySelector(".input-content").style.display = "none";
    document.querySelector(".joint-data-input-table").style.display = "block";
    document.querySelector(".material-data-input-table").style.display = "none";
    document.querySelector(".area-data-input-table").style.display = "none";
    document.querySelector(".member-data-input-table").style.display = "none";
    document.querySelector(".load-data-input-table").style.display = "none";
    document.querySelector("#message").style.display = "none";
};   
function materialData(){
    document.querySelector(".input-content").style.display = "none";
    document.querySelector(".joint-data-input-table").style.display = "none";
    document.querySelector(".material-data-input-table").style.display = "block";
    document.querySelector(".area-data-input-table").style.display = "none";
    document.querySelector(".member-data-input-table").style.display = "none";
    document.querySelector(".load-data-input-table").style.display = "none";
    document.querySelector("#message").style.display = "none";
};
function areaData(){
    document.querySelector(".input-content").style.display = "none";
    document.querySelector(".joint-data-input-table").style.display = "none";
    document.querySelector(".material-data-input-table").style.display = "none";
    document.querySelector(".area-data-input-table").style.display = "block";
    document.querySelector(".member-data-input-table").style.display = "none";
    document.querySelector(".load-data-input-table").style.display = "none";
    document.querySelector("#message").style.display = "none";
};
function memberData(){
    document.querySelector(".input-content").style.display = "none";
    document.querySelector(".joint-data-input-table").style.display = "none";
    document.querySelector(".material-data-input-table").style.display = "none";
    document.querySelector(".area-data-input-table").style.display = "none";
    document.querySelector(".member-data-input-table").style.display = "block";
    document.querySelector(".load-data-input-table").style.display = "none";
    document.querySelector("#message").style.display = "none";
};
function loadData(){
    document.querySelector(".input-content").style.display = "none";
    document.querySelector(".joint-data-input-table").style.display = "none";
    document.querySelector(".material-data-input-table").style.display = "none";
    document.querySelector(".area-data-input-table").style.display = "none";
    document.querySelector(".member-data-input-table").style.display = "none";
    document.querySelector(".load-data-input-table").style.display = "block";
    document.querySelector("#message").style.display = "none";
};

// To add a row for every click on the plus sign 
function addRows(table, value){
    let currentTable = document.getElementById(table);
    let table_num = currentTable.childElementCount
    let content = document.getElementById(value).innerHTML;

    let new_row = currentTable.insertRow(-1);
    new_row.innerHTML = content;

};

// To remove any rows 
function removeRows(){
    let remove_content = event.target;
    remove_content.parentElement.parentElement.remove();
};


// Submitting joint matrix  
function jointSubmit(){

   var jointNum = document.getElementById("joint-table-body");
   var jointMatrix = [];
   
   for(i=0; i<jointNum.childElementCount; i++){
        var matrix_eachRow = [];
       
        for (j=0; j<3; j++){
           var val_position = jointNum.children[i].children[j];
           var each_value = parseFloat(val_position.children[0].value);
           matrix_eachRow.push(each_value);
       }jointMatrix.push(matrix_eachRow); 
       
   };

    return (jointMatrix);
  
};

// Submitting the support matrix 
function supportSubmit(){
    var jointNum = document.getElementById("joint-table-body");
    var supportMatrix = [];
    for(i=0; i<jointNum.childElementCount; i++){
        var support_eachRow = [];
        for (j=3; j<5; j++){
            var support_position = jointNum.children[i].children[j];
            var support_value = parseFloat(support_position.children[0].value);
            support_eachRow.push(support_value);
        }
        support_eachRow.unshift(parseFloat(jointNum.children[i].children[0].children[0].value));
        if (support_eachRow[1] == 1 || support_eachRow[2] == 1 ){
            supportMatrix.push(support_eachRow);
        };
    };

    return(supportMatrix);
    
};

function non_supportSubmit(){
    var jointNum = document.getElementById("joint-table-body");
    var non_supportMatrix = [];
    for(i=0; i<jointNum.childElementCount; i++){
        var non_support_eachRow = [];
        for (j=3; j<5; j++){
            var non_support_position = jointNum.children[i].children[j];
            var non_support_value = parseFloat(non_support_position.children[0].value);
            non_support_eachRow.push(non_support_value);
        }
        non_support_eachRow.unshift(parseFloat(jointNum.children[i].children[0].children[0].value));
        if (non_support_eachRow[1] == 0 || non_support_eachRow[2] == 0 ){
            non_supportMatrix.push(non_support_eachRow);
        };
    };

    return(non_supportMatrix);
    
};

// Submitting material matrix 
function materialSubmit(){
    var materialNum = document.getElementById("material-table-body")
    var material_matrix = [];
    for(i=0;i<materialNum.childElementCount;i++){
        var material_eachRow = [];
        for (j=0; j<2 ; j++){
            var material_row = materialNum.children[i].children[j];
            var material_value = parseFloat(material_row.children[0].value);
            material_eachRow.push(material_value);
        };
        material_matrix.push(material_eachRow);
    };
  
    return(material_matrix);
};

// Submitting area matrix 
function areaSubmit(){
    var areaNum = document.getElementById("area-table-body")
    var area_matrix = [];
    for(i=0;i<areaNum.childElementCount;i++){
        var area_eachRow = [];
        for (j=0; j<2 ; j++){
            var area_row = areaNum.children[i].children[j];
            var area_value = parseFloat(area_row.children[0].value);
            area_eachRow.push(area_value);
        };
        area_matrix.push(area_eachRow);
    };

    return(area_matrix);
};

// Submitting load matrix 
function loadSubmit(){
    var loadNum = document.getElementById("load-table-body")
    var load_matrix = [];
    for(i=0;i<loadNum.childElementCount;i++){
        var load_eachRow = [];
        for (j=0; j<3 ; j++){
            var load_row = loadNum.children[i].children[j];
            var load_value = parseFloat(load_row.children[0].value);
            load_eachRow.push(load_value);
        };
        load_matrix.push(load_eachRow);
    };

    return(load_matrix);
};

// submitting member matrix 
function memberSubmit(){
    var memberNum = document.getElementById("member-table-body")
    var member_matrix = [];
    for(i=0;i<memberNum.childElementCount;i++){
        var member_eachRow = [];
        for (j=0; j<5 ; j++){
            var member_row = memberNum.children[i].children[j];
            var member_value = parseFloat(member_row.children[0].value);
            member_eachRow.push(member_value);
        };
        member_matrix.push(member_eachRow);
    };
    return (member_matrix);
};


function success_message(table){
    document.getElementById(table).insertAdjacentHTML("afterEnd", `<div id="message" class="alert alert-success" role="alert" style="width: 30%; float: right; margin-right: 200px; margin-top: 20px">
                                                    Data Submitted.
                                            </div>`);
};
// Calculation the number of degree of freedom 
function NDOF(){
    var support_matrix = supportSubmit();
    var joint_matrix = jointSubmit();
    var nr = 0;
    for (var i=0; i<support_matrix.length; i++){
        for (var j=1; j<3; j++){
            if(support_matrix[i][j] == 1){
                nr++;
            }
        }
    }
    var ndof_val = 2*(joint_matrix.length) - nr;

    return(ndof_val);
};


// LOAD VECTOR 
function loadVector(){
    var load_matrix = loadSubmit();

    var load_value_vector = [];
   
    var load_value = [];
    for (k=0; k<load_matrix.length; k++){
        load_matrix[k].shift();
        load_value = load_value.concat(load_matrix[k]); 
    };
    for (j=0; j<load_value.length; j++){
        load_value_vector.push(load_value[j]);
    };

    return(load_value_vector);
};

// sin, cos, E, A and L of every members 
function member_value_matrix(){
    var member_matrix = memberSubmit();
    var joint_matrix = jointSubmit();
    var material_matrix = materialSubmit();
    var area_matrix = areaSubmit();
    var member_value = [];

    for(i=0; i<member_matrix.length; i++){
        var member_row = member_matrix[i];
        var beginning_joint = member_row[1];
        var end_joint = member_row[2];

        for(j=0; j<joint_matrix.length; j++){
            if(beginning_joint == joint_matrix[j][0]){
                var xB = joint_matrix[j][1];
                var yB = joint_matrix [j][2];
            };
            if(end_joint == joint_matrix[j][0]){
                var xE = joint_matrix[j][1];
                var yE = joint_matrix[j][2];
            };
        };

        for(j=0; j<material_matrix.length; j++){
            if(member_row[3] == material_matrix[j][0]){
                var E = material_matrix[j][1];
            };
        };

        for(j=0; j<area_matrix.length; j++){
            if(member_row[4] == area_matrix[j][0]){
                var A = area_matrix[j][1];
            };
        };

        var a = xE - xB;
        var b = yE - yB;

        var member_length = Math.sqrt(a*a + b*b);
        var member_cos = a/member_length;
        var member_sin = b/member_length;

        var member_value_row = [i, member_sin, member_cos, E, A, member_length];    
        member_value.push(member_value_row);

    };
    

    return(member_value);

}

// Computation of global K-matrix 
function global_K_matrix(sin, cos, E, A, L){
    var global_K_matrix = [];
    var K_matrix_row = [];
    var scalar_val = (E*A)/L;
    var for_global_matrix = ([[cos*cos, cos*sin, -cos*cos, -cos*sin],
                    [cos*sin, sin*sin, -cos*sin, -sin*sin],
                    [-cos*cos, -cos*sin, cos*cos, cos*sin],
                    [-cos*sin, -sin*sin, cos*sin, sin*sin]]);
    

    for (i=0; i<4; i++){
        K_matrix_row = for_global_matrix[i].map(x => x * scalar_val);
        global_K_matrix.push(K_matrix_row);
    };   


    return (global_K_matrix);
};


// Assiging the code numbers 
function code_number(){
   
    var MSUP = supportSubmit();
    var joint_matrix = jointSubmit();
    var NJ = joint_matrix.length;
    var j = 0;
    var NSC = [];
    var k = NDOF();

    var icount =0;
    var i3 = 0;

    for(var i=1; i<(NJ+1); i++){
        icount = 0;
        for(var i1=0; i1<(MSUP.length); i1++){
            if(MSUP[i1][0] == i){
                icount = 1;
                for(var i2=1; i2<3; i2++){
                    i3 = (i-1)*2 + i2;
                    if(MSUP[i1][i2] == 1){
                        k++;
                        NSC[i3] = k;
                    }else{
                        j++;
                        NSC[i3] = j;
                    };
                };
            };
        };
        if (icount == 0){
            for (var i2=1; i2<3; i2++){
                i3 = (i-1)*2+i2;
                j++;
                NSC[i3] = j;
            };
        };
    };

    return (NSC);
};

// Calcualation of stiffness matrix 
function stiffness_matrix(){
    var nsc = code_number(); 
    var member_matrix = memberSubmit();
    var member_value = member_value_matrix();
    var ndof = NDOF();
    var S = [];
    for (var i=0; i<ndof; i++){
        var S_row = [];
        for(var j=0; j<ndof; j++){
            S_row.push(0);
        };
        S.push(S_row);
    };

    for(var im=0; im<member_value.length; im++){

        var JB = member_matrix[im][1];
        var JE = member_matrix[im][2]; 
        var sin = member_value[im][1];
        var cos = member_value[im][2];
        var E = member_value[im][3];
        var A = member_value[im][4];
        var L = member_value[im][5];
        var GK = global_K_matrix(sin, cos, E, A, L);   

        for(var i=0; i<4; i++){
            if(i < 2){
                var i1 = (JB - 1)*2 + (i+1);
            }else{
                var i1 = (JE -1)*2 + (i-1);
            };
            var n1 = nsc[i1];
            if (n1 <= (ndof)){
                for (var j=0; j<4; j++){
                    if(j<2){
                        var i1 = (JB - 1)*2 + (j+1);
                    }else{
                         var i1 = (JE - 1)*2 + (j - 1);
                    }
                    var n2 = nsc[i1];
                    if (n2 <= (ndof)){
                        S[n1-1][n2-1] = S[n1-1][n2-1] + GK[i][j];
     
                    };
                };
            };

        };

    };   

    return (S);
};

// For joint load vector including code number 
function joint_load_vector(){
    var ndof = NDOF();
    var P = [];
    var nsc = code_number();
    var load_input_vector = loadSubmit();
    for (var i=0; i<ndof; i++){
        P[i] = 0;
    };
    for(var i=0; i<load_input_vector.length; i++){
        var i1 = load_input_vector[i][0];
        var i2 = (i1 - 1)*2;
        for(var j=1; j<3; j++){
            i2++;
            var N = nsc[i2];
            if(N<(ndof+1)){
                P[N-1] = P[N-1] + load_input_vector[i][j];
            };
        };
    };

    return (P);
}

// Computation of displacement matrix 
function displacement_matrix(){
    var P = math.matrix(joint_load_vector());
    var S = math.matrix(stiffness_matrix());
    
    var inverse_S = math.inv(S);
    var d_matrix = math.multiply(inverse_S,P);

    
    
    return(d_matrix);
}

// ***** For the reaction vector ******

// Assiging global displacement vector using code number 
function member_global_displacement_vector(JB,JE){
    var nsc = code_number();
    var ndof = NDOF();
    var P = displacement_matrix();
    var V = [];
    var j =0;
    for (var i=0; i<4; i++){
        V[i] = 0;
    };

    for (var j=0; j<4; j++){
        if(j<2){
            var i1 = (JB - 1)*2 + (j+1);
        }else{
             var i1 = (JE - 1)*2 + (j - 1);
        }
        var n = nsc[i1];
        if (n <= (ndof)){
            V[j] = P.subset(math.index(n-1));
          
        };
    };
    return(V);
};

// Computation of T matrix 
function T_matrix(sin, cos){
    var T_matrix = [[cos, sin, 0, 0],
                    [-sin, cos, 0, 0],
                    [0, 0, cos, sin],
                    [0, 0, -sin, cos]];
    return (T_matrix);
};

// Computation of local k matrix 
function local_k_matrix(E, A, L){
    var scalar_val = (E*A)/L;
    var local_k_matrix = [];
    var k_matrix_row = [];

    var for_local_matrix = [[1, 0, -1, 0],
                            [0, 0, 0, 0],
                            [-1, 0, 1, 0],
                            [0, 0, 0, 0]];

    for (i=0; i<4; i++){
       
        k_matrix_row = for_local_matrix[i].map(x => x * scalar_val);
        local_k_matrix.push(k_matrix_row);
    };   

    var try_matrix = math.multiply(scalar_val, for_local_matrix);
    // console.log(try_matrix);
    return (local_k_matrix);
};

// FOR EACH MEMBERS calculation of axial force and finally calculating the reaction forces
function for_each_member(){
    document.querySelector("#input-section").style.display = "none";
    document.querySelector("#output-section").style.display = "block";
    var member_matrix = memberSubmit();
    var member_value = member_value_matrix();
    var U = [];
    var Q = [];
    var F = [];
    var R = [];
    var nsc = code_number();
    var ndof = NDOF();
    var joint = jointSubmit();
    var nr = joint.length*2 - ndof;
    console.log(`NR: ${nr}`);


    for(var k=0; k<((joint.length)*2); k++){
        R[k] = 0;
    };
    console.log(R);
    for(var im=0; im<member_matrix.length; im++){
        var JB = member_matrix[im][1];
        var JE = member_matrix[im][2]; 
        var sin = member_value[im][1];
        var cos = member_value[im][2];
        var E = member_value[im][3];
        var A = member_value[im][4];
        var L = member_value[im][5];
        var k = local_k_matrix(E,A,L);

        var T = math.matrix(T_matrix(sin,cos));
        var V = math.matrix(member_global_displacement_vector(JB,JE));
        console.log("V_matrix");
        console.log(V);
        U = math.multiply(T,V);
        console.log("U_matrix");
        console.log(U);
        Q = math.multiply(k,U);

        if (Q.subset(math.index(0)) < 0){
            var C_or_T = "T";
        }else{
            var C_or_T = "C";
        }
        document.getElementById("output-axial-body").innerHTML +=
        `<tr>
            <td>${member_matrix[im][0]}</td>
            <td>${Math.abs(Number.parseFloat(Q.subset(math.index(0))).toPrecision(5))}${C_or_T}</td>
        </tr>`;
  

        var transpose_T = math.transpose(T);
        F = math.multiply(transpose_T,Q);
        var F_matrix = [];
        for (var i=0; i<4; i++){
            F_matrix[i] = F.subset(math.index(i));
        };

        console.log("F matrix");
        console.log(F_matrix);
        for(var i=0; i<4; i++){
            if(i < 2){
                var i1 = (JB - 1)*2 + (i+1);
            }else{
                var i1 = (JE -1)*2 + (i-1);
            };
            n = nsc[i1];
            if(n>(ndof)){
                var k = n-ndof-1;
                R[k] = R[k] + F_matrix[i];              
            };
        };
    };

    console.log(R);
    return(R);
};

// Printing the result 
function output(){
    var d = displacement_matrix();
    var R = for_each_member();
    var nsc = code_number();
    var d_matrix = [];
    var R_matrix = [];
    var ndof = NDOF();
    nsc.shift();
    for(var k = 0; k<(nsc.length); k++){
        d_matrix[k] = 0;
        R_matrix[k] = 0;
    };

    var dm = 0;
    var rm = 0;
    for(var i=0; i<nsc.length ; i++){
        if (nsc[i] < (ndof+1)){
            d_matrix[i] = d.subset(math.index(dm));
            dm++;
        }else{
            R_matrix[i] = R[rm];
            rm++;
        };
        
    };
    console.log(nsc);
    console.log("Check: ");
    console.log(d_matrix);
    console.log(R_matrix);

    
    var n_sm = non_supportSubmit();

    for (var i=0; i<n_sm.length; i++){
        document.querySelector("#output-displacement-body").innerHTML +=
        `<tr>
            <td>${n_sm[i][0]}</td>
            <td>${Number.parseFloat(d_matrix[(n_sm[i][0])*2 - 2]).toPrecision(5)}</td>
            <td>${Number.parseFloat(d_matrix[(n_sm[i][0])*2 - 1]).toPrecision(5)}</td>
        </tr>`;
        
    };

    var sm=supportSubmit();
    for (var i=0; i<sm.length; i++){
        document.querySelector("#output-reaction-body").innerHTML +=
        `<tr>
            <td>${sm[i][0]}</td>
            <td>${Number.parseFloat(R_matrix[(sm[i][0])*2 - 2]).toPrecision(5)}</td>
            <td>${Number.parseFloat(R_matrix[(sm[i][0])*2 - 1]).toPrecision(5)}</td>
        </tr>`;
        
    };

    
    
};

// printing function 
function printDIV(){
    
    var jointmatrix = jointSubmit();
    var materialmatrix = materialSubmit();
    var areamatrix = areaSubmit();
    var membermatrix = memberSubmit();
    var ndof = NDOF();

    
    document.querySelector("#input-section").style.display = "none";
    document.querySelector("#output-section").style.display = "none";
    document.getElementById("input-details").innerHTML = 
    `<h1> General Structural Data </h1>
    <p><b>Structure Type:</b> Plane Truss </p>
    <p><b>Number of joints:</b> ${jointmatrix.length} </p>
    <p><b>Number of members:</b> ${membermatrix.length} </p>
    <p><b>Number of material sets:</b> ${materialmatrix.length} </p>
    <p><b>Number of cross-sectional area sets:</b> ${areamatrix.length} </p>
    <p><b>Number of degree of freedom:</b> ${ndof}</p>` ;

    document.querySelector("#input-section").style.display = "none";
    document.querySelector("#output-section").style.display = "none";

    

    var printContents = document.getElementById("output-section").innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

