let log = console.log

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
function buildHeader(){
  const csrftoken = getCookie('csrftoken');
  let headers = new Headers()    
  headers ={      
      'X-Requested-With': 'XMLHttpRequest',
      "X-CSRFToken": csrftoken,
      // no need to set it yourself as 'content-type': 'multipart/form-data'
     
  }
  return headers

}



var divModal = new bootstrap.Modal(document.getElementById('divModal'))

const regActionInFrom = document.getElementById("formModal");
let baseUrl = "http://127.0.0.1:8000"

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
    // events after calend rendering
    regActionInFrom.addEventListener('submit',(ev)=>{
      ev.preventDefault();      
      const event = document.getElementById("event").value;
      const date = document.getElementById("dateStart").value;
      const color = document.getElementById("color").value;
      const urlPost = `${baseUrl}/start/`
      if(event ==="" ||date ==="" ||color==""){
            // render sweetalert warning
            Swal.fire(
              'Warning',
              'All fields are required',
              'warning'
            )
            }else{
              const dataForm = new FormData()
            dataForm.append("event",event)
            dataForm.append("date",date)
            dataForm.append("color",color) 


            fetch(urlPost, {
              headers:buildHeader(),                
              method:"POST",        
              body:dataForm  
              
                        
            })        
            .then(resp=>resp.json())  
            .then((data)=>{
              console.log("OK",data)
              // console.log(data.status)
              // log(data.data)
            })
            .catch((err)=>{
              console.log(err)
            }
            )  

            }      
      

      
     
    })
  });