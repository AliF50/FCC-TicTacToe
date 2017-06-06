$(document).ready(function() {

    var player = 1;
    var count = 0;
    var designation = false;
    var x = 'fa fa-times';
    var o = 'fa fa-circle-o';

    $('.square').on('click', function(event) {
        //alert('add symbol here');
        if (count === 0) {
            if (designation === false) {
                player = x;
            } else {
                player = o;
            }
            $('#designation').attr("disabled", true); //disable checkbox so user can't switch value
        }
        var squareSelected = $(this);
        if (squareSelected.hasClass(x) || squareSelected.hasClass(o)) {
            alert('This square has already been clicked. Choose another.');
        } else {
            count++; //iterate count variable
            if (player === x) {
                squareSelected.addClass(x);
                if (checkIfPlayerWon(x)) {
                    alert('Congrats! Player X has won!');
                    clearBoard();
                } else {
                    player = o;
                }
            } else {
                squareSelected.addClass(o);
                if (checkIfPlayerWon(o)) {
                    alert('Congrats! Player O has won!');
                    clearBoard();
                } else {
                    player = x;
                }
            }
            if (count === 9 && (!checkIfPlayerWon(o) || !checkIfPlayerWon(x))) {
                alert('Tied!');
                location.reload();
            }
        }
    });

    $('.reset').on('click', function(event) { //handles reset button click
        location.reload();
    });

    $('#designation').on('click', function(event) {
        designation = $(this).is(":checked");
    });

    function checkIfPlayerWon(symbol) {
        //ex
        //oh
        if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) { //checking horizontal rows
            return true;
        } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
            return true;
        } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) { //checking vertical rows
            return true;
        } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
            return true;
        } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) { //checking diagonals
            return true;
        } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
            return true;
        } else {
            return false;
        }
    }

    function clearBoard() {
        for (var i = 1; i <= 9; i++) {
            if ($('.sq' + i).hasClass(x) || $('.sq' + i).hasClass(o)) {
                $('.sq' + i).removeClass(x);
                $('.sq' + i).removeClass(o);
            }
        }
    }
});
