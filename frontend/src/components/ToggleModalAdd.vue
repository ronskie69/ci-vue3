<template>
    <button type="button" data-mdb-toggle="modal" data-mdb-target="#ModalAdd" class="btn btn-sm float-end btn-primary shadow-0">
        {{ buttonTitle }}
    </button>
</template>

<script>
    export default {
        name: 'ToggleModalAdd',
        props: { target: String | undefined },
        data(){
            return {
                buttonTitle: 'Add User',
            }
        }
    }
</script>