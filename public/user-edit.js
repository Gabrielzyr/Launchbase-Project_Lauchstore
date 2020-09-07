const formDelete = document.getElementById('form-delete')
formDelete.addEventListener("submit", function(event) {
    const confirmation = confirm("Tem certeza que deseja excluir sua conta? Essa operação não poderá ser desfeita.")
    if(!confirmation) {
        event.preventDefault()
    }
})