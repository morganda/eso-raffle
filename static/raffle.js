$(document).ready(function(){
    $("#addTickets").click(function () {
        $("#undoTicketSubmission").removeClass("hidden");
        $("#submittedStatus").removeClass("hidden");
        $("#emailMessage").removeClass("hidden");
    });
    
    $("#undoTicketSubmission").click(function () {
        $("#undoTicketSubmission").addClass("hidden");
        $("#submittedStatus").addClass("hidden");
        $("#emailMessage").addClass("hidden");
    });

    $("#ticketSubmissionForm").submit(function(e){
        e.preventDefault();
    });

    $("#drawWinner").click(function() {
        $("#winnerMessage").removeClass("hidden");
    });
});
