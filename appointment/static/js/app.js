var divModal = new bootstrap.Modal(document.getElementById('divModal'))


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar:{
        left:'prev,today,next',
        center:'title',
        right:'dayGridMonth,timeGridWeek,listWeek'
        
      },
      titleFormat:{
        year:'numeric',
        month:'long',
        day:'numeric'
      },
      dateClick: function(info) {
        console.log(info.dateStr)
        // document.getElementById("start").value = "2022-08-18"
        document.getElementById("modalTitle").textContent = "Register an event"
        divModal.show()      
      }      
    });
    calendar.render();
  });