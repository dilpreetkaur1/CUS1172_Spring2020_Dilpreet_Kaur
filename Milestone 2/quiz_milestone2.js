var right_answers = 0;
var quiz1_current_actual_chkbox_ans;
var quiz1_array_count = 0;
var quiz1_res;
var question_count = 1;
var quiz1_current_user_ans = "";
var quiz1_current_actual_ans = "";
var quiz1_current_explanation = ""

var quiz_choice = ""
var q_id = 21;  
var q_meta=21;
var choices;
$.ajax({
    url: "http://localhost:5000/quiz1/api/quiz/list",

    method: "get",
    contentType: "json/application",
    dataType: 'json',
    success: function (response) {
        console.log("api response", response)
        // quiz1_res = response;
        choices = response.message
    },
    error: function (err) {
        console.log("errors : ", err)
    }
})
