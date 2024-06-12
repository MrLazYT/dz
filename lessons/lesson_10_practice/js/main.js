function clickHandler() {
    let json_error = document.getElementById("error_label");

    json_error.innerText = "";;

    let json = document.getElementById("json");

    try {
        let formatted_obj = JSON.parse(json.value);
        let formatted_json = document.getElementById("formatted_json");

        formatted_json.value = JSON.stringify(formatted_obj, null, 4);
    }
    catch {

        json_error.innerText = "[format error]";
    }
}