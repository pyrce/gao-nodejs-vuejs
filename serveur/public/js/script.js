$( document ).ready(function() {
  // Handler for .ready() called.

/**
 * supprimer une assignation
 */
jQuery(".heures").on('click', '.remove', function(e) {

  id=$(this).attr("data-id");
  
   data={};
   data["attr"]=id;
   console.log(data)
    $.ajax({url:"/attribution/delete",
    type:'delete',
    data:data,
    success:(msg)=>{
      location.reload();
      //$("#content").load("#content > *")
    }
  })

  
  });

/**
 * modal ajout assignation
 */
  jQuery(".heures").on('click', '.add', function(e) {
    e.target.onclick=()=>{
     
      // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
console.log("ok")
  modal.style.display = "block";
  $("#user").data("heure",$(e.target).data("heure") );
  $("#user").data("poste",$(e.target).data("poste") );


getusers();

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
    }

    });

function getusers(){
  
      $.ajax({
        url:"/users",
        type:"GET",
        success:(users)=>{
          $("#user").val("");
          $("#users").html("");
          for(u in users){
            $("#users").append("<option data-id="+users[u].id+" value="+users[u].nom+"-"+users[u].prenom+">"+users[u].nom+"-"+users[u].prenom+"</option>")
            
          }
        }
      })
    }

    /**
     * ajout attribution à un utilisateur
     */
    jQuery("#myModal").on('click', '#attribuer', function(e) {
     
      var user= $("#users option[value='" + $('#user').val() + "']").attr('data-id');
      
      var poste=  $("#user").data("poste");
      var heure=  $("#user").data("heure");
      var data={}
      data["user"]=user;
      data["poste"]=poste;
      data["heure"]=heure;
      console.log(data);
      $.ajax({
        url:"/attribbution/attribuer",
        type:"POST",
        data:data,
        success:()=>{
          document.getElementById("myModal").style.display = "none";
          $(".msg").show(100, "swing");
          $(".msg").html(
            '<button type="button" id="validationpanier" class="btn btn-success">l\'utilisateur a bien été attribuer à un poste</button>'
            );
          $(".msg").delay(2250).hide(50, "swing");
         // $("#content").load("#content > *")
            location.reload();
        }
      })
})

$("#ajout_poste").on("click",()=>{
  var modal = document.getElementById("myModal2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal

  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 

})

$("#addposte").on("click",()=>{
data={}
data["poste"]=$("#poste").val();
$.ajax({
  url:"/postes/add",
  type:"POST",
  data:data,
  success:()=>{
    document.getElementById("myModal2").style.display = "none";
    $(".msg").show(100, "swing");
    $(".msg").html(
      '<button type="button" id="validationpanier" class="btn btn-success">le poste a bien étéajouter</button>'
      );
    $(".msg").delay(2250).hide(50, "swing");
    $("#content").load("#content > *")
  }
})
})

$("#add_user").on("click",()=>{
  var modal = document.getElementById("modal_user");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];
// When the user clicks on the button, open the modal

  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
  })

  $("#adduser").on("click",()=>{
    console.log("add client");
    data={}
    data["nom_client"]=$("#nom_client").val();
    data["prenom_client"]=$("#prenom_client").val();
    $.ajax({
      url:"/users/add",
      type:"POST",
      data:data,
      success:()=>{
        document.getElementById("modal_user").style.display = "none";
        $(".msg").show(100, "swing");
        $(".msg").html(
          '<button type="button" id="" class="btn btn-success">l\'utilisateur a bien étéajouter</button>'
          );
        $(".msg").delay(2250).hide(50, "swing");
       getusers();
      }
    })
    })
    jQuery("#content").on('click', '.delete_poste', function(e) {
      e.target.onclick=(d)=>{
      data={};
      data["poste_id"]=$(this).attr("data-id");
      console.log(data);
  
    $.ajax({
        url:"/postes",
        type:"delete",
        data:data,
        success:()=>{

          $(".msg").show(100, "swing");
          $(".msg").html(
            '<button type="button" id="" class="btn btn-success">le poste a bien été supprimé</button>'
            );
          $(".msg").delay(2250).hide(50, "swing");
          $("#content").load("#content > *")
        }
      })
      
    }
      })

$("#jour").on("change",()=>{

data={}
data["jour"]=$("#jour").val()
$.ajax({
  url:"/attribution/filtre",
  type:"get",
  data:data,
  success:(content)=>{

    //$("#postes").html("");
    $("#postes").html(content.content);

    //$("#content").load("#content > *");
   
  }
})

})

});