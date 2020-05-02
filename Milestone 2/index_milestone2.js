var right_answers = 0;
var quiz1_current_actual_chkbox_ans;
var quiz1_array_count = 0;
var quiz1_res;
var question_count = 1;
var quiz1_current_user_ans = "";
var quiz1_current_actual_ans = "";
var quiz1_current_explanation = ""

var quiz_choice = ""
var q_id = 1;  
var q_meta=1;
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
function showQuiz1() {
    // multiple choice
    // console.log("quiz1", quiz1_res)
    
if(q_meta != -1){
    $("#quiz1_q").empty()

    $.ajax({
        // url: `http://localhost:5000/quiz1/api/quiz/${quiz_choice}/${q_id}`,
        url: "http://localhost:5000/quiz1/api/quiz?id="+quiz_choice+"&questionid="+q_id,

        // "&uname="+name
        method: "get",
        contentType: "json/application",
        dataType: 'json',
        success: function (response) {
            console.log("question api response", response)
            q_meta= response.message.meta;
            console.log("meta", q_meta)
            displayQuestions(response.message)
        },
        error: function (err) {
            console.log("errors : ", err)
        }
    })
}



}

function displayQuestions(res) {


    document.getElementById("quiz1_statement").innerHTML = question_count + " ) " + res.question;
    // quiz1_current_explanation = res.explanation;
    // quiz1_current_actual_ans = res.answer

    if (res.type == "multiple choice") {
        // var choices = [];
        var choices = res.choices
        console.log("choices", choices, "  ll ,", choices[0])
        $("#quiz1_q").append(
            '<input type="radio" id=' + res.choices[0] + ' name="mcqRadio"  value="' + res.choices[0] + '" onclick="getValue(this.value)"><label for="male">  ' + res.choices[0] + '</label><br><input type="radio" id=' + res.choices[1] + ' onclick="getValue(this.value)" name="mcqRadio" value="' + res.choices[1] + '"><label for="female">  ' + res.choices[1] + '</label><br><input type="radio" id=' + res.choices[2] + ' onclick="getValue(this.value)" name="mcqRadio" value="' + res.choices[2] + '"><label for="other">  ' + res.choices[2] + '</label><br><input type="radio" id=' + res.choices[3] + ' onclick="getValue(this.value)" name="mcqRadio" value="' + res.choices[3] + '"><label for="other">  ' + res.choices[3] + '</label><br><input type="radio" id=' + res.choices[4] + ' onclick="getValue(this.value)" name="mcqRadio" value="' + res.choices[4] + '"><label for="other">  ' + res.choices[4] + '</label><br/>');
    }
    else if (res.type == "fill in the blank") {
        $("#quiz1_q").append('  ' + res.choices + '<br/> Type answer : ' + '<input type="text" id="fill_blank" onchange="getValue(this.value)" /><br/>')

    }
    else if (res.type == "true/false") {
        $("#quiz1_q").append(
            '<input type="radio" id=' + res.choices[0] + ' name="mcqRadio"  value="' + res.choices[0] + '" onclick="getValue(this.value)"><label for="male">  ' + res.choices[0] + '</label><br><input type="radio" id=' + res.choices[1] + ' onclick="getValue(this.value)" name="mcqRadio" value="' + res.choices[1] + '"><label for="female"> b) ' + res.choices[1] + '</label><br>'
        )
    }
    else if (res.type == "checkboxes") {
        console.log(res.answer)
        quiz1_current_actual_chkbox_ans = res.answer;
        console.log(quiz1_current_actual_chkbox_ans)

        $("#quiz1_q").append(
            '<div id="allCheckboxes"><input type="checkbox" id="chkBox1" value="' + res.choices[0] + '" name="Box1" />  <label >' + res.choices[0] + '<br/><input type="checkbox" id="chkBox2" value="' + res.choices[1] + '" name="Box2" />  <label >' + res.choices[1] + '<br/><input type="checkbox" id="chkBox3" value="' + res.choices[2] + '" name="Box3" />  <label >' + res.choices[2] + '<br/><input type="checkbox" id="chkBox4" value="' + res.choices[3] + '" name="Box4" />  <label >' + res.choices[3] + '<br/></div>'
        )
    }

    else if (res.type == "short answer") {

        $("#quiz1_q").append('  ' + res.choices + '<br/> Type answer : ' + '<input type="text" id="fill_blank" onchange="getValue(this.value)" /><br/>')
    }

    $("#quiz1_q").append('<input id="submit-btn" onclick="quiz1Submit()" type="submit" value="Submit">')


}

