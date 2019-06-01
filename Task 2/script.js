function formSubmit() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    output.value = math(input.value);

    function math(str) {
        var firstMatch = str.match(/[\+\-\*\/=]/);
        try{
            var result = parseFloat(str.substr(0,firstMatch.index));
        }
        catch {
            alert("ошибка!");
            return "";
        }

        while (match = str.match(/[\+\-\*\/=]/)) {
            str = str.substr(match.index + 1, str.length);
            nextMatch = str.match(/[\+\-\*\/=]/);
            try{
                switch (match[0]) {
                    case "+":
                        result += parseFloat(str.substr(0, nextMatch.index));
                        break;
                    case "-":
                        result -= parseFloat(str.substr(0, nextMatch.index));
                        break;
                    case "*":
                        result *= parseFloat(str.substr(0, nextMatch.index));
                        break;
                    case "/":
                        result /= parseFloat(str.substr(0, nextMatch.index));
                        break;
                    case "=":
                        return result;
                }
            }
            catch {
                alert("ошибка!");
                return "";
            }
        }

    }
}