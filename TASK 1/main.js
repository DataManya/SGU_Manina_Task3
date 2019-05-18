function formSubmit() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    output.value = CharRemover(input.value);

    function CharRemover(str) {
        var Reoccur = '';
        str.split(" ").forEach(function (t) {
            var reoccur = '';
            for (var i = 0; i < t.length; i++) {
                if (t.lastIndexOf(t[i]) !== t.indexOf(t[i])) {
                    while(str.indexOf(t[i]) !== -1 && t[i] !== "!" &&
                    t[i] !== "." &&
                    t[i] !== "," &&
                    t[i] !== ";" &&
                    t[i] !== "?" &&
                    t[i] !== ":")
                        str = str.replace(t[i],"")
                }
            }
        });
        return str;
    }
}