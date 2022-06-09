var diceArray = [];
var counter = 0;
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = $("<div class= \"dice col-2 h-200 w-200 d-flex justify-content-around m-3 border border-3 border-dark rounded-3 shadow-lg text-center align-items-center fs-1 fw-bold\" id=".concat(counter, "></div>"));
        this.value = this.roll();
        this.div.text(this.value.toString());
        this.div.css({ backgroundColor: giveRandomColor() });
        $('#diceTray').append(this.div);
        this.div.on('click', function () {
            _this.value = _this.roll();
            _this.div.text(_this.value.toString());
        });
        this.div.on('dblclick', function () {
            _this.div.remove();
            var dieIndex = diceArray.indexOf(_this);
            diceArray.splice(dieIndex, 1);
        });
    }
    ;
    Die.prototype.roll = function () {
        return Math.floor(Math.random() * 6 + 1);
    };
    ;
    return Die;
}());
;
$('#add-die').on('click', function () {
    diceArray.push(new Die());
    counter++;
});
$('#reroll').on('click', function () {
    diceArray.forEach(function (val) {
        val.value = val.roll();
        $(val.div).text(val.value);
    });
});
$('#total').on('click', function () {
    var total = 0;
    diceArray.forEach(function (val) {
        total += val.value;
    });
    //@ts-ignore
    Swal.fire("You rolled a total of ".concat(total, "!"));
});
function giveRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = Math.random() + 0.1;
    var rgbString = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    return rgbString;
}
;
