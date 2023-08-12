$(function () {
    $(".datepicker").datepicker({
        dateFormat: "mm/dd/yy",
        changeMonth: true,
        changeYear: true,
        yearRange: "1950:2024",
        timeFormat: '', // ignore time
        showTimepicker: false // ignore time
    });
});