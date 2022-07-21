AFRAME.registerComponent("addmarker",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>[
            this.handleMarkerFound()
        ])
        this.el.addEventListener("markerLost",()=>[
            this.handleMarkerLost()
        ])
    },
handleMarkerFound:function(){
    var buttondiv = document.getElementById("button-div")
    buttondiv.style.display="flex";
    var orderbutton = document.getElementById("order-button")
    var orderSummarybutton = document.getElementById("order-summary-button")

    orderbutton.addEventListener("click",()=>{
        swal({
            icon:"success",
            title:"thnks for ordering",
            text:" ",
            timer:1000,
            buttons:false
        })
    })
    orderSummarybutton.addEventListener("click",()=>{
        swal({
            icon:"warning",
            title:"Order Summary",
            text:"Work In Progress",
            timer:1000,
            buttons:false
        })
    })
},
handleMarkerLost:function(){
    var buttondiv = document.getElementById("button-div")
    buttondiv.style.display="none";
}
})