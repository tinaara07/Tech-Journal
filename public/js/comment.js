const commentForm= document.getElementById("comment-form")
const textarea= document.getElementById("comment-text")

async function addComment( event){
    event.preventDefault()
 console.log(textarea.value)
 fetch ("/api/comments", {
    method:"POST",
    headers: {
        'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
       text: textarea.value,
       journal_id: window.location.href.split("/")[4] 
    })
 })
 .then(res => {
    window.location.reload()
 })
}
commentForm.addEventListener("submit",addComment )